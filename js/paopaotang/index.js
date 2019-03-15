//player1 player2 ……
//object 类
//JSON object 难以完成此job
//玩家类 es5 没有class关键字
//大写首字母的函数 构造函数
function Player(name){
    this.name = name;
}

var player1 = new Player("皮蛋");
console.log(player1.name);
var player2 = new Player("小乖");
console.log(player2.name);