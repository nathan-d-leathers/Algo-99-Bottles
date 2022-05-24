function bottleSong() {
  // Write your code here!
  let newNum = num -1;
  while (num > 2) {
    let newNum = num -1;
    console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${newNum} bottles of beer on the wall.`);
    num--;
  }
  while (num === 2) {console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.`);
  num--;
} 
  while (num === 1) {console.log(`${num} bottle of beer on the wall, ${num} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`);
  num--;
}
if (num === 0) {console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`)
};
};

bottleSong(5);
