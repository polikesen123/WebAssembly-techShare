// The entry file of your WebAssembly module.

/**
 * 判断一个数是否是素数
 * @param x 
 */
function isPrime(x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}


/**
 * 获取第n个素数
 * @param x 
 */
function getPrime(x) {
    let index = 0;
    let i = 2;
    do {
        if (isPrime(i)) {
            ++index;
        }
        ++i;
    } while (index !== x);
    return i - 1;
}


/**
 * 获取第n个斐波那契数列
 * @param n 
 */
function getFib(n){
    if (n < 2) return 1;
  
    return getFib(n - 2) + getFib(n - 1);
}
