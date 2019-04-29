// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const got = require('got')

let appid = 'wx6756d62a3de782f6';
let secret = '416059066c62e65e55454f92b0507228';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6756d62a3de782f6&secret=416059066c62e65e55454f92b0507228

// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
  let tokenResponse = await got(tokenUrl);
  let token = JSON.parse(tokenResponse.body).access_token;
  console.log(token);
  let checkResponse = await got(msgCheckUrl + token, {
    body: JSON.stringify({
      content: event.text
    })
  })
  console.log(checkResponse)
  return checkResponse.body
  return event.a + event.b
  // return '毛问题啊';  
}
