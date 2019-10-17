//3. Dados dois números calcule o MDC deles.

let mdc = 1;
let divisor =2;
let x = 90;
let y = 54;

while (x>1 && y>1){
    if (x % divisor === 0 && y % divisor === 0){
        mdc *= divisor;
        x /= divisor;
        y /= divisor; 
        } else if (x % divisor === 0){
            x /= divisor;
        } else if (y % divisor ==0){
            y /= divisor;
        }else{
            divisor ++;
        }
}
console.log(mdc);