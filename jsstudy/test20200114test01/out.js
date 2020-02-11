function sum(n){
    var res =0;
    if (n %2 ==0){
        for (var i =2; i <= n;i+=2)
        res +=1/i;

    }else{
        for (var i =1;i <= n;i+=2){
            res +=1/i;
        }
    }
    return res;
    
}
// alert(sum(4))

console.log(sum(10))