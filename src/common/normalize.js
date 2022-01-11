export const normalize = (number) =>{
    let str = `${number}`;
    let strArr = str.split('').reverse();
    let b=3;
    while(b<strArr.length){
        strArr.splice(b,0,',');
        b*=3;
    }
    return strArr.reverse().join('')
}