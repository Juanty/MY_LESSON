var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({
  post: 'localhost',
  user: 'root',
  password: '',
  database: 'trip'
})
// 开始请求
