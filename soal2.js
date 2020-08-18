let arr =[]
let min = 0
let max = 0
let input= parseInt(prompt("Masukkan Angka"))
do{
    arr.push(input)
    if(input > max){
        max = input
    }else if(input > min){
        min = input
    }
    
}while(input <= 100)



console.log(arr)
console.log("nilai tertinggi :"+  max)
console.log("nilai terendah :"+  min)