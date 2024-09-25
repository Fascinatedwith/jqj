import axios from '@/utils/request'

// 获取工资列表
export const getSalarysList = (yearMonth) =>
  axios({
    method: 'GET',
    url: `/salarys/reports/${yearMonth}`
  })
