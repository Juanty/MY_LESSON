// let ran_num = Math.random();
// 函数表达式
const hongbao = (total, num) => {
    const arr = []; //待分配金额数组
    // 定义计算量
    let restAmount = total,
        restNum = num;
    for(let i = 0; i < num-1; i++){
        //前n-1发随机
        //20*Math.random() 错误算法，不公平
        let amount = parseFloat(Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(20, 47));