// let a=6;
// let b=7;
// let con1= a=b; con2=a===6;
// console.log(con1&&con2);
//_________sum of first N nos_____________________
// let sum=0
// let N=5
// for(let i=0; i<=N; i++ )
// {
//     console.log("i = ",i)
//     sum+=i;
// }
// console.log("sum of first",N,"natural numbers is",sum);
//____________while loop_________________
// let i=1;
// let N=5;
// let sum=0;
// while(i<=N)
// {
//     sum+=i
//     console.log("i = ", i);
//     i++;
// }
// console.log("sum of first",N,"natural numbers is",sum);
//____________do-while___________________________________
// let i=1;
// do {

//     console.log("i = ",i);
//     i++;
// } while (i<=5);
// _______________for-of loop_______________________________
// let a="Jimy_Anderson";
// console.log("length of string is = ",a.length);
// for(let i of a)
// {
//     console.log("i =",i);
    
// }
//_______________for-in Loop_____________________
// let student = {  //student is a object with 4 keys -name-age-cgpa-color
//     fullName: "Rahul",
//     age:22,
//     cgpa:8.8,
//     color:"black",
// };   
// console.log("Keys with its values of the object STUDENT are", student);
// for(let i in student){
//     console.log ("key ",i," = ",student[i]);
// }
//
//_____________________________________________________________________________________________
//
//You are given an array of prices[i] is the price of a given stock on an ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a
//different day in the future to sell that stock. Return the maximum profit you can achieve from this
 
//Input:
// prices = [7,1,5,3,6,4]
 
//Explaination:
// Buy on day 2(price=1) and
// sell on day 5 (prices = 6), profit = 6-1 =5
 
// let prices = [7,1,5,3,6,4,9];
// let profit=0;
// for(i=0; i<prices.length ; i++ )
// {
//     let cp=prices[i];
   
//    for(j=i+1; j<prices.length; j++)
//   {
//     let sp=prices[j];
//     if(cp<sp)
//     {
        
//         let maxprofit=sp-cp;
//         if (maxprofit>profit)
//             {
//                 profit=maxprofit;
//             }
            
//     }
        
//   }
// }
// console.log(profit)
//__________________________________________________________________________
//Marks of student [85,97,44,37,76,60]. Average marge of entire class.
// let marksOfStudent= [85,97,44,37,76,60];
// let sumOfMarks=0;
// for(i=0 ; i < marksOfStudent.length ; i++)
// {
//   sumOfMarks = sumOfMarks + marksOfStudent[i];

// }
// letaverage
// console.log(sumOfMarks);
//___________same code using "FOR OF LOOP" ____________________________________
// let marks= [85,97,44,37,76,60];
// let sum=0;
// for(let i of marks)
// {
  
//   sum += i;
  

// }
// console.log(`sum of marks is ${sum}`);
// console.log(`avg of marks is ${sum/marks.length}`);

//--------------------------------------------------------------------
//Print names of heros
// let heros = ['shaktiman', 'heman','superman', 'batman', 'spiderman']
// for(let i=0; i<heros.length; i++)
// {
//   console.log(heros[i]);
  
// }
//-------------------------same code using "for-of loop"---------------------------
// let heros = ['shaktiman', 'heman','superman', 'batman', 'spiderman']
// for(let i of heros)
// {
//   console.log(i);
  
// }
// ---------------------------------------------------
// let cities=['delhi', 'gurgaon', 'Pune', 'bangalore', 'mumbai']
// for(let city of cities)
// {
//   console.log(city.toUpperCase() ); //to uppercase using --> .toUpperCase() -->uppercase function 
  
// }
//_____________________________________________________________________
//Given array with price of 5 items [250,645,300,900,50]. 
//All items have 10%OFF discount.
//Restore the array to store Final prices after discount.
// let price= [250,645,300,900,50]
// for(i=0; i<price.length; i++)
// {
//   let newPrice=0;
//   newPrice=price[i]*.9;
//   console.log(newPrice);
  
// }
//--------------above same code using "FOR-OF LOOP"--------------------
// let price= [250,645,300,900,50]
// let idx=0
// for(let i of price)
// {
//   newPrice=i*.9;
//   console.log(`value at ${idx} is ${newPrice}`);
//   idx++
  
// }
//_________________________________________________________________________
//----------------PUSH-POP opertions in an ARRAY----------------------------
//---------PUSH()--add to end---&& POP()-->delete from end and return-----------
// let fruitList= ['apple', 'mango', 'banana', 'litchi']
// console.log(fruitList)
// fruitList.push('kiwi')
// console.log(fruitList);
// deletedValue= fruitList.pop()
// console.log(`updated list of food item after POP operation ${fruitList}`);

// console.log(`deleted item ${deletedValue}`)
// _____________________________________________________________________________________________________
// -- toString() operation in ARRAY-->convert array to string---it doesnot change the original array---
// _____________________________________________________________________________________________________
// let fruitList= ['apple', 'mango', 'banana', 'litchi']
// console.log(fruitList);
// console.log(`Original Fruit item list ${fruitList}`);
// console.log(`Updated Fruit item list ${fruitList.toString()}`);
// console.log(fruitList.toString());
// console.log(fruitList);
// ______________________________________________________________________________________________
// -----------concat() ------------join multiple array and returns the result ------------------
//-------unshift()-->push()@start------&&----shift()-->pop()@start--------------------------------
// ______________________________________________________________________________________________
// let marvelHeroes = ['spiderman','ironamn','thor']
// marvelHeroes.unshift('antman')
// let dcHeroes = ['superman', 'batman']
// let indianHeroes = ['krish', 'shaktiman']
// marvel_dc = marvelHeroes.concat(dcHeroes , indianHeroes)
// console.log(marvel_dc);
// ________________________________________________________________________________________________
//__________Print the missing number in a series of consequtive numbers__________
// let a = [1,2,3,5,6]
// for(let i=0; i<a.length -1; i++)
// {
//     if(a[i]!==a[i+1]-1)
//         {
//             console.log(a[i]+1)
//         }
// }
//__________________________________________________________________________________________________
//___company = ["Bloomberg","Microsoft","Uber", "Google", "IBM", "Netflix"] . Now
// (I) Remove 1st company from its place (II) Remove Uber & add OLA in its place (III)Add AMZ at the end
// let company = ["Bloomberg","Microsoft","Uber", "Google", "IBM", "Netflix"]
// company.shift()
// company.splice(2,1,'OLA')
// company.push("Amazon")
// console.log(company);
//_________________________________________________________________________________________________
// slice() & splice() method in array_____________________________________________________________
//slice(startIdx,endIdx) ---> endIdx non-inclusive --> returns a piec of array & doesnt change original array
//splice(startIdx,delCount,newEle..)--> changes original array (add,remove,replace_____________________________________________________________
//-------------------------------------------------------------------------------------------------
//
// An array containg only non-negative number, Find the consecutive element to have a given sum
//  eg. input : a = [1,3,5,9,13,17,18,19]
//              target sum = 35
//      Output : the consecutive integer to have a sum of 35 are 17 & 18
// NOTE :  Constraints : 1 <= a.size() <=6
//                       0 < a[i] <10^3
//                       0 < sum < 10^9              
// let a = [1,3,5,9,13,17,18,19]
// let s=35
// for(let i=0 ; i<a.length ; i++)
// {
//     if(a[i]+a[i+1] == s)
//         console.log(`the consecutive integer to have a sum of ${s} are ${a[i]} & ${a[i+1]}`);
        

// }
//-------------------------------------------------------------------------------------------
//
//Given an integer array arr = [2, 3, -8, 7, -1, 2, 3]. Find the maximum sum of subarray.
//    Output: 11
//    Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
// constraints: 1 ≤ arr.size() ≤ 10^5
//              -109 ≤ arr[i] ≤ 10^4
// _____SOL.__________Kandane's Agorithm_______


// function SubArray(a)
// {
//     currentMax = a[0];
//     newMax= a[0];
//     for(i=1; i<a.length; i++)
//     {
//         currentMax=Math.max(a[i], a[i]+currentMax);
//         newMax = Math.max(currentMax,newMax);
//     }
//     return newMax;
// }


// const  a = [2, 3, -8, 7, -1, 2, 3]
// console.log(SubArray(a));
// reads array and return
//--------------------------------------------------

// function reqNum(num)
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }
//  for (let i=0;i<a.length;i++)
// {
//     if(num[i]%2===0)
//     {  
//         const b=num[i] 
//         console.log(num[i]);
//     }
       
        

// }
// let a = [1,2,6,8,9,15,11]
// console.log(reqNum(a));
//__________________________________
// function findEvenNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         return arr[i]; // Return the first even number found
//       }
//     }
//     return null; // If no even number is found, return null
//   }
//   const numbers = [1, 3, 5, 7, 8, 10];
//   console.log(findEvenNumber(numbers));

//-------------------------
// function requiredNum(arr)
// {
//     for(let i=0; i < arr[i].length ; i++)
//     {
//         if(arr[i] % 2 === 0)
//             {
//                 return arr[i];
//             }
//     }
    
    
// }
// const  b = [2, 3, -8, 7, -1, 2, 3]
// console.log(requiredNum(b));
//
//____________________________________________________
// function findEvenNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         return arr[i]; // Return the first even number found
//       }
//     }
//     return null; // If no even number is found, return null
//   }
//   const numbers = [1, 3, 5, 7, 8, 10];
//   console.log(findEvenNumber(numbers));
//
//-------------------------------------------------------------------
// let arr=[1,2,6,8,9,15,11];
// let newArr=[];
// let j=0
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         j++;
//        newArr[j] = arr[i] + 2 ;
//        console.log(newArr[j]);
           
//     }

// }
//-------------------------------------------------------------------------
//Finding second largest number
//w/o function
// let arr = [12, 35, 1, 10, 34, 1];
// let max = Math.max(...arr);
// console.log(max);
// let filteredArr = arr.filter(num=> num<max); //.filter creates new filter with condn. & 
// console.log(filteredArr);
// let secondLar = filteredArr.length>1 ? Math.max(...filteredArr) : null
// console.log(secondLar);
//---------------------------------------------------------------------
//same with func
//
// function secLar(arr)
// {
//     let max = Math.max(...arr);
//     let newArr=arr.filter(num=> num<max);
//     return newArr.length>1 ? Math.max(...newArr): null;
// }
// let num = [12, 35, 1, 10, 34, 1];
// console.log(secLar(num));
//
//
//-------------------------------------------------------
// Pratice of 2nd largest number in an array using function
//
// function Bist(err)
// {
//     biggest = Math.max(...err);
//     newErr = err.filter(num=>num<biggest);
//     return Math.max(...newErr);
// }
// let rust = [1,2,56,45,89,77,222];
// console.log(Bist(rust));
//
//----------------------------------------------------------
//
//Find the missing number in an array. 
// arr= [8, 2, 4, 5, 3, 7, 1];
//Your task is to identify and return the missing element.
function misNum(crr)
{
    newCrr=crr.sort((a,b)=>a-b)
    console.log('sorted array in ascending order is : ',newCrr );
    
    console.log('The SECOND LARGEST element of the given array is',(newCrr[newCrr.length-2]));
}
arr= [8, 2, 4, 5, 3, 7, 1,9,55,77,66,22,33];
misNum(arr);
//
//---------------------------------------------------------------------------
//
// Minimum_Jumps_from first to last element ofd the array 
// Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 
// Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last. 
//              
