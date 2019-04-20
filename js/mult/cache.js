var mult = (function(){
    var cache = {};
    var calculate = function(){//封闭calculate函数
        var a = 1;
        for(var i = 0, l = arguments.length; i < l; i++){
            a = a * arguments[i];
        }
        return a;
    };
    return function(){
        var args=Array.prototype.join.call(arguments,",");
        if(args in cache){
            console.log('从缓存中取');
            return cache[args];
        }
        return cache[args]=calculate.apply(null,arguments);
    }
})();

console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));
