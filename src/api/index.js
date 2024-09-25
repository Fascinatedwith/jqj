import axios from '@/utils/request'

// POST
export const login = data =>
  axios({
    method: 'POST',
    url: '/sys/login',
    data: data
  })
// GET
export const getUser = (id) =>
  axios({
    url: `/employees/${id}/personalInfo`,
    params: {
      id
    }
  })

