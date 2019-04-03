function lou(n){
    if (n < 0) {
        return 0;
    }
    // 边界
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return lou(n - 1) + lou(n - 2);
}
console.log(lou(12));

// 从大到小的递归，也有从边界来的回溯