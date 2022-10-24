function bottlesOfBeer() {
  
    
    let numBottles = +prompt(`enter the number of bottles to start:`);
    
    
    console.log(`${numBottles} bottles of beer on the wall \n${numBottles} bottles of beer \ntake 1 down, pass it around`);
    numBottles--;
    console.log(`${numBottles} bottles of beer on the wall`);
    for (let i = 2; numBottles > 0; i++) {
        console.log(`${numBottles} bottles of beer on the wall \n${numBottles} bottles of beer \ntake ${i} down, pass them around`);
        numBottles -= i;
        if (numBottles > 0) {
            console.log(`${numBottles} bottles of beer on the wall`);
        } else {
            console.log(`there are no bottles of beer on the wall`);
        }
    }
}

bottlesOfBeer();