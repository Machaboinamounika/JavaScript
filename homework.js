// To check weather the given number is even or not
const isEven = num => {
    return (num%2==0)
}
let n = 12
isEven(n) ? console.log(`The given number ${n} is Even `) : console.log(`The given number ${n} is Not Even`)

// To check weather the given number is odd or not
const isOdd = num => {
    return (num%2!=0)
}
let n1 = 12
isOdd(n1) ? console.log(`The given number ${n1} is Odd `) : console.log(`The given number ${n1} is Not Odd`)

// program to print 1 to N numbers 
const numbers = (x) => {
    for(let i =1; i < x; i++) {
        console.log(i);
    }
}
console.log(numbers(10))

// To check weather the given number is prime or not
const primeNum = (num2) => {
    for(let i =2; i < num2; i++) {
        if(num2 %i === 0) {
            return 'not prime'
        }
        return 'prime'
    }
}
console.log(primeNum(11))
 
// to print prime numbers upto n
const prime1 = (n3) => {
   for(let j=1;j<=n3;j++) {
    for(let i =2; i <=j; i++) {
        if(j %i === 0) {
            return 'not prime'
        }
        return 'prime'
    }
   }
    
}
console.log(prime1(5))


//Print prime numbers upto n
function prime2(num4) {
    if(num4 ==0 || num4 == 1)
    return false;
    for(let i = 2;i<=n;i++)
{
    if(num4 % i ==0)
    {
        return false
    }
    }return true
}
let number1 = 50;
for(let i = 1;i<=number1;i++)
{
    prime2(i);
}