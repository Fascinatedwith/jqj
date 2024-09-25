import axios from '@/utils/request'

// 获取权限列表
export const permissionList = () =>
  axios({
    method: 'GET',
    url: '/sys/permission'
  })

// 删除权限
export const delpermission = (id) =>
  axios({
    method: 'DELETE',
    url: `/sys/permission/${id}`
  })

// 获取权限点详情
export const permission = (id) =>
  axios({
    method: 'GET',
    url: `/sys/permission/${id}`
  })

// 修改权限点详情
export const Uppermission = (data) =>
  axios({
    method: 'PUT',
    url: `/sys/permission/${data.id}`,
    data
  })

// 新增权限
export const addpermission = (data) =>
  axios({
    method: 'POST',
    url: `/sys/permission`,
    data
  })
