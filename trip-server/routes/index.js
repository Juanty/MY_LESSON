var express = require('express');
var fs = require("fs");
var router = express.Router();

// 首页的操作
router.get('/', function(req, res, next) {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'application/json');
function readImage(path,res){
  console.log(path)
  fs.readFile(path,'binary',function(err,  file)  {
      if (err) {
          console.log(err);
          return;
      } else{
          console.log("输出文件");
          res.writeHead(200,  {'Content-Type':'image/jpeg'});
          res.write(file,'binary');
          res.end();
      }
  });
}
readImage('/public/images/head.jpeg', res)
});
module.exports = router;
