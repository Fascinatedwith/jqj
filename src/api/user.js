import axios from '@/utils/request'

// 登录接口
export const login = data =>
  axios({
    method: 'POST',
    url: '/sys/login',
    data: data
  })

// 获取基本资料
export const getInfo = () =>
  axios({
    method: 'POST',
    url: `/sys/profile`
  })

// 获取员工个人信息
export const getUser = (id) =>
  axios({
    url: `/employees/${id}/personalInfo`,
    params: {
      id
    }
  })

// 获取员工基本信息
export const getUserinfo = (id) =>
  axios({
    url: `/sys/user/${id}`,
    params: {
      id
    }
  })

