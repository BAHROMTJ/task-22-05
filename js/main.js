

// task1

// function getMultipliedArr(arr) {
// 	return arr.map(a=>a*2)
// }

// task2

// function wordLengths(arr) {
// 	return arr.map(a=>a.length)
// }


// task3

// function findDifference(a, b) {
// 	return Math.abs( a.reduce((a,b)=>a*b,1)-b.reduce((a,b)=>a*b,1))
// }


// task4

// function evenOrOdd(arr) {
// 	return arr.length ==0||arr.reduce((a,e)=>a+e)%2==0 ?"even":"odd"
// }

// task5

// function spaceMeOut(str) {
// 	return str.split("").join(" ")
// }

// task6
// const arr = ["cars", "planes", "trains", "motorcycles"]

// // Fix the following using es6 destructuring
// // Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
// let [ trans1, trans2, trans3, trans4 ] = arr

// /*
// console.log(trans1) // should output "cars"
// console.log(trans2) // should output "planes"
// console.log(trans3) // should output "trains"
// console.log(trans4) // should output "motorcycles"
// */


// task7

// function rotateByOne(arr) {
// 	arr.unshift(arr.pop())
// 	return arr
// }	

// task8

// function invertArray(arr) {
// 	return arr.map(a=>a==0?a:-a)
// }


// task9

// function sumFive(arr) {
// 	return arr.reduce((a,b)=>b>5?a+b:a,0)
// }



// task10

// function getFilename(path) {
// 	return path.split("/").pop()
// }

// task11

// function error(n) {
// 	return n== 1 ? "Check the fan: e1": n==2 ? "Emergency stop: e2":n==3?"Pump Error: e3":n==4? "c: e4":n==5? "Temperature Sensor Error: e5"
// }
// console.log(error(2));

// function error(n) {
// 	let obj={
// 			1: "Check the fan: e1",
// 2:"Emergency stop: e2",
// 3:"Pump Error: e3",
// 4 :"c: e4",
// 5:"Temperature Sensor Error: e5",
// 		"-1000":101
// 	}
// return obj[n]
// }


// task12

// function doubleChar(str) {
// 	return str.split("").map(a=>a.repeat(2)).join("")
// }


// task13
function formatPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-`+numbers.splice(6).join("")
}

// task14

// // function hasValidUnitOfMeasure(product = {}) {
// // 	const { unitOfMeasure, comment } = product
// // 	return (comment!=undefined || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
// // }

// // task15
// function tpChecker(home) {
//     let a= Math.floor((home.tp*500)/(home.people*57))
//     return a>14?`Your TP will last ${a} days, no need to panic!`:`Your TP will only last ${a} days, buy more!`
//     }


// // task16
//     function findIt(obj, name) {
	
//         return Object.keys(obj).includes(name)?`${name[0].toUpperCase()+name.slice(1)} is gone...`:`${name[0].toUpperCase()+name.slice(1)} is here!`
//     }


// // task17
//     function getDistance(a, b) {
//         return + Math.hypot(a.x-b.x, a.y-b.y).toFixed(3)
//     }
    

// task18
    // function fiftyThirtyTwenty(ati) {
// 	let obj={
// 		"Needs": Math.floor(ati/100*50), "Wants": Math.floor(ati/100*30), "Savings":  Math.floor(ati/100*20)
		
// 	}
// 	return obj
// }



// task19

// writeyourcodehere =[first,second,third,...other]= [1, 2, 3, 4, 5, 6, 7, 8]



// task20
// function determineLever(arr) {
// 	return arr[0]=="e"&&arr[1]=="f"&&arr[2]=="l"?"first class lever":arr[0]=="e"&&arr[1]=="l"&&arr[2]=="f"?"second class lever":"third class lever"
// }


