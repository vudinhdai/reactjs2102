let n = window.prompt("enter a number :" )
console.log("n :", n , typeof(n))
if(n < 2){
    document.write("NO" , n)
    

// cach 1 }else{
//     for(let i = 2; i < (n-1); i++){
//         if(n % i == 0){
//             n = false;
//             break;
//         }
//     }
// }if(n >2){
//     document.write("YES", n)
// }else{
//     document.write("NO:", n)
//cach 2
}else{
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count ++;
            if(count >= 3){
                break;
            }
        }
    }
    if(count === 2){
        console.log(n + "is prime");
    }else{
        console.log(n + "is not prime");
    }
}

//bai8
while(n > 0){
    console.log("n %10", n % 10);
    n = parseInt(n/10);
}



