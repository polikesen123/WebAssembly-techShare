// The entry file of your WebAssembly module.

/**
 * 判断一个数是否是素数
 * @param x 
 */
function isPrime(x: u32): bool {
  if (x < 2) {
    return false;
  }

  for (let i: u32 = 2; i < x; i++) {
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
export function getPrime(x: u32): number {
  let index: u32 = 0;

  let i: u32 = 2;
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
export function getFib(n: u32): number {
  if (n < 2) return 1;

  return getFib(n - 2) + getFib(n - 1);
}