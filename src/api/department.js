import axios from '@/utils/request'

// 获取部门列表
export const getDepartment = () =>
  axios({
    method: 'GET',
    url: '/company/department'
  })

// 删除部门
export const delDepartment = (id) =>
  axios({
    method: 'DELETE',
    url: `/company/department/${id}`,
    data: {
      id
    }
  })

// 获取部门详情
export const getDepartmentInfo = (id) =>
  axios({
    method: 'GET',
    url: `/company/department/${id}`,
    data: {
      id
    }
  })

// 修改部门信息
export const editDepartment = (data) =>
  axios({
    method: 'PUT',
    url: `/company/department/${data.id}`,
    data: data
  })

// 获取负责人列表
export const getUserlist = () =>
  axios({
    method: 'GET',
    url: `/sys/user/simple`
  })

// 添加部门
export const addDepartment = (data) =>
  axios({
    method: 'POST',
    url: `/company/department`,
    data: data
  })
