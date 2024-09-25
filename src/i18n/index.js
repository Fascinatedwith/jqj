import Vue from 'vue' // 引入Vue
import VueI18n from 'vue-i18n' // 引入国际化的包

Vue.use(VueI18n) // 全局注册国际化包

const messages = {
  en: {
    dashboard: 'dashboard',
    approvals: 'approvals',
    attendances: 'attendances',
    departments: 'departments',
    employees: 'employees',
    permissions: 'permissions',
    salarys: 'salarys',
    CompanySettings: 'CompanySettings',
    social: 'social'
  },
  zh: {
    dashboard: '首页',
    approvals: '审批',
    attendances: '考勤',
    departments: '组织架构',
    employees: '员工管理',
    permissions: '权限管理',
    salarys: '工资',
    CompanySettings: '公司设置',
    social: '社保'
  },
  ja: {
    dashboard: 'トップページ',
    approvals: 'ひじゅん',
    attendances: 'よーじ',
    departments: 'そしきこーぞー',
    employees: 'じゅーぎょーいんかんり',
    permissions: 'けんげんかんり',
    salarys: 'ちんぎん',
    CompanySettings: 'かいしゃのせっち',
    social: 'なごり'
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages // 设置地区信息
})

// 导出
export default i18n

