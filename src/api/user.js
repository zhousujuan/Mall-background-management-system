import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/acl/index/info',
    method: 'get',
    // 这里改写了？？？还有注释的意思
    // 此处的params其实是用来接收query传参用的,会自动将对象的属性名作为key,属性值作为value
    params: {
      token:token
     }
  })
}

export function logout() {
  return request({
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
