import axios from '@/utils/request'

// 获取考勤列表
export const getAttendancesList = (data) =>
  axios({
    method: 'GET',
    url: `/attendances`,
    data
  })

// 编辑用户考勤状态
export const setAttendances = (id, data) =>
  axios({
    method: 'PUT',
    url: `/attendances/${id}`,
    data
  })
