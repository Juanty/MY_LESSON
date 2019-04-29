// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get');
  let postResponse = await got('httpbin.org/post',
  {
    method: 'POST', /* 加密 */
    header: {
      'Content-Type': 'application/json' /* 内容类型 header */
    },
    body: JSON.stringify({
      title: '带个朋友回家',
      value: '菲菲'
    })
  })
  return postResponse.body

  // const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}