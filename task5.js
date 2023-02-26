let num=236;
let sum=0;
if(num>=100 && num<1000){
    sum=num%10;
    //console.log(sum);
    num=(num-num%10)/10;
    //console.log(num);
    sum=sum+num%10;
    num=(num-num%10)/10;
    console.log(sum+num);
}