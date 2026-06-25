import request from '@/utils/request'

<<<<<<< HEAD
// 获取服务信息
=======
// 查询服务器详细
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
export function getServer() {
  return request({
    url: '/monitor/server',
    method: 'get'
  })
}