import config from './config'
import * as Mock from './mock'

let util = {
  isDEV = config.isDev,
  log() {
    this.isDEV && config.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if ('object' === typeof content) {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  
}