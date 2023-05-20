const MIN = 0
const MAX = 200

function isPrime(n) {
  let result = true
  if (n === 0 || n === 1) {
    result = false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false
      break
    }
  }
  return result
}

function sieveOfEratosthenes(max) {
    let sieve = new Array(max).fill(true)

    let sqrt = Math.floor(Math.sqrt(max))
    console.log(`DEBUG: limit = ${sqrt}`)

    // 0 and 1 are not prime number
    sieve[0] = sieve[1] = false

    for (let i = 0; i <= sqrt; i++) {
        if (sieve[i] === true) {
            for (let j = i * 2; j <= max; j += i) {
                sieve[j] = false
            }
        }
    }
    return sieve
}

let count = 0
for (let i = MIN; i <= MAX; i++) {
  if (isPrime(i) === true) {
    count++
    process.stdout.write(`${i}, `)
  }
}
console.log("")
console.log('count: ' + count)

count = 0
let primeList = sieveOfEratosthenes(MAX)
for (let i = MIN; i <= primeList.length; i++) {
  if (primeList[i] === true) {
    count++
    process.stdout.write(`${i}, `)
  }
}
console.log('')
console.log('count: ' + count)

