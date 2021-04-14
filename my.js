let x = [-3,5,1,3,2,10];
let first = 0;
let last = x.length-1;
while (first<last){
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x);


let a = 30;
let b = 15;
for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
        if(i!==1&&i!==b&&j!==1&&j!==a){
            document.write("&nbsp&nbsp")
        }else{
            document.write("*")
        }
    }
    document.write("<br>")
}