
let buttonOperation = () => {
    let numbers = [1,2,3,4,6,7,8,9];
    console.log("numbers before adding-"+numbers);
    numbers.push(10,11,12,13,14);
    console.log("numbers after adding-" +numbers);
    // for(let i=0;i<numbers.length;i++) {
    //   numbers[i] = numbers[i]*10;
    // }
    // console.log("numbers with multiple of 10-" +numbers);
    let multipiedArray = numbers.map(x => {
        return x*10;
    })
     console.log("numbers with multiple of 10-" +multipiedArray);
    //  let even;
    let even=[];
    numbers.map(x => {
        
        if(x%2==0) {
           
           even.push(x);
        }
       
    })
    console.log("even numbers in given list are-" +even);
}