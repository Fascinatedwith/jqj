import axios from '@/utils/request'

// 获取员工列表
export function getStaffList(params) {
  return axios({
    method: 'GET',
    url: `/sys/user`,
    params: params
  })
}

// 删除员工
export function delStaff(id) {
  return axios({
    method: 'DELETE',
    url: `/sys/user/${id}`,
    data: {
      id
    }
  })
}

// 新增员工
export function addStaff(data) {
  return axios({
    method: 'POST',
    url: `/sys/user`,
    data: data
  })
}

// 获取员工基本信息
export function UserInfo(id) {
  return axios({
    method: 'GET',
    url: `/sys/user/${id}`
  })
}

// 分配员工角色
export function allot(data) {
  return axios({
    method: 'PUT',
    url: `/sys/user/assignRoles`,
    data
  })
}

// 修改员工信息
export const updateUser = (data) =>
  axios({
    method: 'PUT',
    url: `/sys/user/${data.id}`,
    data
  })

// 获取岗位信息
export const getJobDetail = (id) =>
  axios({
    method: 'GET',
    url: `/employees/${id}/jobs`
  })

// 导入员工
export function importEmployee(data) {
  return axios({
    url: '/sys/user/batch',
    method: 'post',
    data
  })
}
