export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'head' | 'HEAD'
| 'put' | 'PUT'
| 'delete' | 'DELETE'
| 'options' | 'OPTIONS'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  params?: any
  data?: any
  method?: Method
}
