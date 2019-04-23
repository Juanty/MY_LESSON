// 面向对象的世界， 创建很多对象， 策略对象
// 实现了同样的接口， calculate， 互换策略 => 策略模式
function PerformanceS () {
}
PerformanceS.prototype.calculate = 
  function (salary) {
    return salary * 5;
}
function PerformanceA () {
}
PerformanceA.prototype.calculate = 
  function (salary) {
    return salary * 3;
}
function PerformanceB () {
}
PerformanceB.prototype.calculate = 
  function (salary) {
    return salary * 2;
}


// 面向对象
var Bonus = function (salary) {
  this.salary = salary;
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary);
}

const bonus = new Bonus(10000);
bonus.setStrategy(new PerformanceS());
console.log(bonus.getBonus());

const bonus2 = new Bonus(5000);
bonus2.setStrategy(new PerformanceA());
console.log(bonus2.getBonus());


 