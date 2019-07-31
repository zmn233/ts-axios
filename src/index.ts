import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import buildURL from './helper/url'
import transformRequest from './helper/data'
import { processHeaders } from './helper/headers'

export default function axios (config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL (config: AxiosRequestConfig): string {
  return buildURL(config.url, config.params)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders (config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
