import axios from '@/utils/request'

// 获取公司信息
export function getCompanyInfo(companyId) {
  return axios({
    url: `/company/${companyId}`
  })
}

// 获取角色列表
export function getRoleList(params) {
  return axios({
    method: 'GET',
    url: `/sys/role`,
    params: params
  })
}

// 删除角色
export function delRole(id) {
  return axios({
    method: 'DELETE',
    url: `/sys/role/${id}`,
    data: {
      id
    }
  })
}

// 添加角色
export function addRole(data) {
  return axios({
    method: 'POST',
    url: `/sys/role`,
    data: data
  })
}

// 获取角色详情
export function getRole(id) {
  return axios({
    method: 'GET',
    url: `/sys/role/${id}`
  })
}

// 修改角色详情
export function updateRole(data) {
  return axios({
    method: 'PUT',
    url: `/sys/role/${data.id}`,
    data
  })
}

// 给角色分配权限
export function assignPrem(id, permIds) {
  return axios({
    method: 'PUT',
    url: `/sys/role/assignPrem`,
    data: {
      id,
      permIds
    }
  })
}
