const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 员工token
  token: state => state.user.token,
  // 暂不清楚
  avatar: state => state.user.avatar,
  // 员工名字
  name: state => state.user.userinfo.username,
  // 员工头像
  staffPhoto: state => state.user.userinfo.staffPhoto,
  // 员工所在公司名
  company: state => state.user.userinfo.company,
  // 员工所在公司id
  companyId: state => state.user.userinfo.companyId,
  // 员工部门
  departmentName: state => state.user.userinfo.departmentName,
  // 员工信息
  userinfo: state => state.user.userinfo,
  // 员工所拥有的权限页面
  Routers: state => state.permission.permissionRouters
}
export default getters
