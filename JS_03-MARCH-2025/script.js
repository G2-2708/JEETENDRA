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
//
// // ______________________________________________________________________________________________
// let marvelHeroes = ['spiderman','ironamn','thor']

// marvelHeroes.unshift('antman')
// let dcHeroes = ['superman', 'batman']
// let indianHeroes = ['krish', 'shaktiman']

// marvel_dc = marvelHeroes.concat(dcHeroes , indianHeroes)
// console.log(marvel_dc); 
// let pc = marvel_dc.shift() //shift()-> first element 'antman' out/removed
// console.log(marvel_dc);
// console.log(`just deleted ${pc} using shift function`);
// ___________________________________________________________________________________________________
// slice() --> slice(startIdx,endIdx) --> doesn't change the original array and endIdx is not-inclusive
// splice() --> splice
// let keyss = ['a','b','c','d','e']
// let Slicee = keyss.slice(1,2)
// console.log(Slicee);
// console.log(keyss.slice(1)); // will print all after since not end index is given 
let num=[1,2,3,5,6];

for(i=0;i<num.length;i++){
    if(num[i] == num[i+1] - 1)
    {
        console.log(num[i]);
        
    }
    else{

        let y = num[i] +1;
        console.log(y);
        
    }
}