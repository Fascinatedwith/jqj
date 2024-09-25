<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="12">
        <slot name="total" />
      </el-col>
      <el-col :span="12">
        <el-row type="flex" justify="end" align="middle">
          <slot name="button" />
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style scoped lang="scss">

</style>
