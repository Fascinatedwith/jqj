<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" size="mini" type="primary" @click="handleUpload">
        点击上传
      </el-button>
    </div>
    <!-- 隐藏域文件上传框 -->
    <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">

    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      <i class="el-icon-upload" />
      <span>将文件拖到此处</span>
    </div>
  </div>
</template>

<script>
// 引入xlsx    * 导入所有 as 重命名为 XLSX
import * as XLSX from 'xlsx'
export default {
  props: {
    beforeUpload: Function, // eslint-disable-line
    onSuccess: Function// eslint-disable-line
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    // 5. 将数据拼起来传到父页面
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    // 文件拖入事件
    handleDrop(e) {
      // 阻止冒泡
      e.stopPropagation()
      // 取消默认行为  当文件拖到浏览器里 默认是下载
      e.preventDefault()
      // 如当前有程序正在上传 则return
      if (this.loading) return
      // 拿到拖入的文件的存放数组
      const files = e.dataTransfer.files
      // 当上传多个时 报错 必须只能上传1个
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      // 拿到上传的文件
      const rawFile = files[0] // only use files[0]
      // 只支持.xlsx, .xls 文件 验证规则
      if (!this.isExcel(rawFile)) {
        this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
        return false
      }
      // 触发事件
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      // 阻止冒泡
      e.stopPropagation()
      // 阻止默认行为 文件拖进去浏览器默认下载
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    // 1. 点击上传
    handleUpload() {
      // 触发文件上传的点击事件
      this.$refs['excel-upload-input'].click()
    },
    // 2. 文件上传点击事件 change事件
    handleClick(e) {
      // 拿到上传的文件数组
      const files = e.target.files
      // 拿到上传的文件
      const rawFile = files[0] // only use files[0]
      // 如果文件不存在 不成功  return
      if (!rawFile) return
      // 如果文件存在 执行以下函数
      this.upload(rawFile)
    },
    // 3. 如果上传文件成功
    upload(rawFile) {
      // 将文件框清空 否则再上传不会触发 文件框的change事件
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel

      // 如果更新前没有文件
      if (!this.beforeUpload) {
        // 读取拿到的文件
        this.readerData(rawFile)
        return
      }
      // 如果拿到的文件为真
      const before = this.beforeUpload(rawFile)
      if (before) {
        // 读取拿到的文件
        this.readerData(rawFile)
      }
    },
    // 4. 读取数据
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        // 4.1 读取文件内容 异步的
        const reader = new FileReader()
        // 4.3 onload 读取数据事件完成之后会触发
        reader.onload = e => {
          // 拿到读取到二级制数据
          const data = e.target.result
          // 将二进制数据 通过XLSX.read 的方法 转换成我们认识的数据
          const workbook = XLSX.read(data, { type: 'array' })
          // 拿到转换完的数据对象
          const firstSheetName = workbook.SheetNames[0]
          // 拿到转换完的数据
          const worksheet = workbook.Sheets[firstSheetName]
          // 拿到所有的 header 就是xlsx文件内容的第一行
          const header = this.getHeaderRow(worksheet)
          // 拿到所有数据内容
          const results = XLSX.utils.sheet_to_json(worksheet)
          // 调用方法 将数据 拼起来
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        // 4.2 执行读取数据事件
        reader.readAsArrayBuffer(rawFile)
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style scoped lang='scss'>
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.drop{
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
.upload-excel {
  display: flex;
  justify-content: center;
   margin-top: 100px;
   .excel-upload-input{
       display: none;
        z-index: -9999;
     }
   .btn-upload , .drop{
      border: 1px dashed #bbb;
      width: 350px;
      height: 160px;
      text-align: center;
      line-height: 160px;
   }
   .drop{
       line-height: 80px;
       color: #bbb;
      i {
        font-size: 60px;
        display: block;
      }
   }
}
</style>
