import axios from '@/utils/request'

// 获取社保列表
export const getSocialList = (data) =>
  axios({
    method: 'POST',
    url: `/social_securitys/list`,
    data
  })
