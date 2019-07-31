export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'head' | 'HEAD'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'

// 测试git新加的注释

export interface AxiosRequestConfig {
  url: string
  params?: any
  data?: any
  headers?: any
  method?: Method
}
