// let ran_num = Math.random（）;

//（）=> {}函数表达式
const  hongbao  =（total，num）=> {
    const  arr  = []; //待分配的金额
    //定义计算量
    让 restAmount = total，restNum = num;
    for（let i =  0 ; i < num - 1 ; i ++）{
        //前n-1个个人发随机金额
        //（restAmount / restNum）* 2每人的随机金额最大值为平均值的两倍
        让量=  parseFloat（数学。随机（）*（（restAmount / restNum）* 2 - 0））。toFixed（2）;
        restAmount -  = amount;
        restNum - ;
        arr。推（金额）;
    }
    arr。推（restAmount。toFixed（2））;
    返回 ARR;
}
控制台。日志（红宝（200，10））;
