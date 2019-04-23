// ali 14.6 2.6
// meituan 16 4
// 51信用卡 17 5
// S 5
// A 3
// B 2
// C 1 
// D 

// level key 计算函数？

let stratigies = {
  'S': function(salary){
    return salary * 5;
  },
  'A': function(salary){
    return salary * 3;
  },
  'B': function(salary){
    return salary * 2;
  },
  'C': function(salary){
    return salary * 1;
  }
}
function calculate (level, salary) {

  return stratigies[level](salary);

  // 分支太多， 计算策略太简陋  如何优化？
  // if(level === 'S'){
  //   return salary * 5;
  // }
  // if(level === 'A'){
  //   return salary * 3;
  // }
  // if(level === 'B'){
  //   return salary * 2;
  // }
  // else{
  //   return salary;
  // }

  // const arr = {
  //   'S':5,
  //   'A':3,
  //   'B':2,
  //   'C':1,
  //   'D':0
  // }
  // return arr[level]*salary;

  // switch(level){
  //   case 'S': return salary * 5;
  //   case 'A': return salary * 3;
  //   case 'B': return salary * 2;
  //   case 'C': return salary * 1;
  //   default: break;
  // }

}

console.log(calculate('S', 1000));