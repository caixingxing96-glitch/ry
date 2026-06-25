module.exports = {
<<<<<<< HEAD
  /**
   * 网页标题
   */
  title: process.env.VUE_APP_TITLE,

  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-dark',

  /**
   * 系统布局配置
   */
  showSettings: true,

  /**
   * 菜单导航模式 1、纯左侧 2、混合（左侧+顶部） 3、纯顶部
   */
  navType: 1,
=======
  title: '若依管理系统',

  /**
   * 是否系统布局配置
   */
  showSettings: false,
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
<<<<<<< HEAD
   * 持久化标签页
   */
  tagsViewPersist: false,

  /**
   * 显示页签图标
   */
  tagsIcon: false,

  /**
   * 标签页样式：card 卡片（默认）、chrome 谷歌浏览器风格
   */
  tagsViewStyle: 'card',

  /**
   * 是否固定头部
   */
  fixedHeader: true,
=======
   * 是否固定头部
   */
  fixedHeader: false,
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
<<<<<<< HEAD
   * 是否显示动态标题
   */
  dynamicTitle: false,

  /**
   * 是否显示底部版权
   */
  footerVisible: false,

  /**
   * 底部版权文本内容
   */
  footerContent: 'Copyright © 2018-2026 RuoYi. All Rights Reserved.'
=======
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
}
