// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.
// Input: 7
// Output: Odd
// var num=5;
// if(num %2==0)
// {
//     console.log("Number is odd");
// }

// else
// {
//     console.log("Number is even    ");
// }




// 2. Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.
// Input: 5 9
// Output: 9


// let a=10;
// let b=20;

// if(a>b)
// {
//     console.log("Number a is big",a);
// }

// else
// {
//     console.log("Number b is big",b)
// }





// 3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year


// var year=2020;
// if(year % 4  ==0)
// {
//     console.log("leap year");
// }

// else
// {
//     console.log("Not leap year");
// }



// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15


// let sum =0;
// let n;
// for(let i=1;i<=n;i++)
// {
//     sum =sum+i;
//     console.log(sum);
// }




// 5. Factorial of a Number
// Definition: Calculate factorial of a number.
// Input: 4
// Output: 24


// let n=5;
// let fact=1;

// for(let i=1;i<=n;i++)
// {
//     fact *=i;
// }
// console.log("Factorial of : ",fact)



// 6. Print Multiplication Table
// Definition: Display multiplication table of a number up to 10.
// Input: 3
// Output: 3 x 1 = 3
// ...
// 3 x 10 = 30

// let number=5;
// for(let i=1;i<=10;i++)
// {
//     console.log(number + "X" + i + "=" + (number*i))
// }



// 7. Reverse a Number
// Definition: Reverse the digits of a number.
// Input: 1234
// Output: 4321


// let number=456789;
// let rev=parseInt(number.toString().split('').reverse('').join(''));
// console.log("Reverse number is : ",rev);


// 8. Palindrome Check (Number)
// Definition: Check if a number reads the same backward.
// Input: 121
// Output: Palindrome

// let number=121;
// let original = number;
// let rev = 0;

// while(number!== 0 )
// {
//     let digit = number%10;
//     rev= rev*10+digit;
//     number=Math.floor(number/10);//last digit remove to fucntion

//     if(original==rev)
//     {
//         console.log("Palindrome..");
//     }
//     else
//     {
//         console.log("Not Palindrome..");
//     }
// }


// 9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime


let number=3;
let prime=true;

for(let i=2;i<number;i++)
{
    if(number % i === 0 )
    {
        prime=false;
        break;
    }
}

if(number<=1)
{
    prime=false;
}

console.log(prime ? "Prime Number" : "Not prime");