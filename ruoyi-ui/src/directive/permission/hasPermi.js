<<<<<<< HEAD
/**
 * v-hasPermi 操作权限处理
 * Copyright (c) 2019 ruoyi
 */

=======
 /**
 * 操作权限处理
 * Copyright (c) 2019 ruoyi
 */
 
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
<<<<<<< HEAD
    const all_permission = "*:*:*"
=======
    const all_permission = "*:*:*";
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    const permissions = store.getters && store.getters.permissions

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value

      const hasPermissions = permissions.some(permission => {
        return all_permission === permission || permissionFlag.includes(permission)
      })

      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置操作权限标签值`)
    }
  }
}
