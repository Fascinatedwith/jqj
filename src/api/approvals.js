import axios from '@/utils/request'

// 获取审批列表
export const getApprovalsList = (page, size) =>
  axios({
    method: 'PUT',
    url: `/user/process/instance/${page}/${size}`
  })
