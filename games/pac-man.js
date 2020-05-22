//start by making a block that you can control with arrow keys.


const block_1 = document.querySelector('.block-1');
const block2 = document.querySelector('.block-2');


let block_1_new = 0;
block_1.style.top = block_1_new;
let block_1_new_horiz = 0;
block_1.style.left = block_1_new_horiz;
const body = document.querySelector('body');
let block_1_info;
let block2Info;


body.addEventListener('keypress', function(){
  const x = event.keyCode;
  // w = 119
  // a = 97
  // s = 115
  // d = 100
  if (x == 115) {
    block_1_new += 15; 
    block_1.style.top = `${block_1_new}px`;
  } else if (x == 119) {
    block_1_new -= 15; 
    block_1.style.top = `${block_1_new}px`;
  } else if (x == 97) {
    block_1_new_horiz -= 15; 
    block_1.style.left = `${block_1_new_horiz}px`;
  } else if (x == 100) {
    block_1_new_horiz += 15; 
    block_1.style.left = `${block_1_new_horiz}px`;
  };

  block_1_info = block_1.getBoundingClientRect();
  // if (parseInt(block_1.style.top, 10) < 0) {
  //   block_1.style.top = `${window.innerHeight - 60}px`;
  //   block_1_info.top = window.innerHeight;
  //   console.log(block_1_info.top)
  // }
  if (block_1_info.top < 0) {
    block_1_new = window.innerHeight - 50;
    /*
    if you use:
    let block_1_new = window.innerHeight - 60;
    block gets stuck at bottom, but its info value reads negative, as if it's still above the screen...
    */
    block_1.style.top = `${block_1_new}px`;
  }
  else if (block_1_info.top > window.innerHeight - 50) {
    block_1_new = 0;
    block_1.style.top = `${block_1_new}px`;
  }
  
  // The following if/else if will make sure that if the block reaches the left or right side of the screen, it will switch back to the opposite side of the screen, so that the block never actually goes off screen. 
  if (block_1_info.left > window.innerWidth - 50) {
    block_1_new_horiz = 0;
    block_1.style.left = `${block_1_new_horiz}px`;
  }
  else if (block_1_info.left < 0) {
    block_1_new_horiz = window.innerWidth - 50;
    block_1.style.left = `${block_1_new_horiz}px`;
  }

  // The following ifs will be to check if block 1 is overlapping position with block 2...
  block2Info = block2.getBoundingClientRect();
  if (block_1_info.top > block2Info.top - 50 && block_1_info.left < block2Info.left + 50 && block_1_info.left > block2Info.left - 50 && block_1_info.top < block2Info.top + 50) {
    block_1_new = 0;
    block_1.style.top = `${block_1_new}px`;
  }
});

block_1_info = block_1.getBoundingClientRect();
block2Info = block2.getBoundingClientRect();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
setInterval(function(){
  console.log('enter');
  if (block_1_info.top > block2Info.top - 50 && block_1_info.left < block2Info.left + 50 && block_1_info.left > block2Info.left - 50 && block_1_info.top < block2Info.top + 50) {
    console.log('enter');
    block_1_new = 0;
    block_1.style.top = `${block_1_new}px`;
  }
}, 1);


// let block2Info = block2.getBoundingClientRect();
// if (block_1_info.top > block2Info.top - 50 && block_1_info.left < block2Info.left + 50 && block_1_info.left > block2Info.left - 50 && block_1_info.top < block2Info.top + 50) {
//   block_1_new = 0;
//   block_1.style.top = `${block_1_new}px`;
// }

let block2LeftNew = 0;
window.setInterval(function(){
  let block2Info = block2.getBoundingClientRect();
  if (block2Info.left > window.innerWidth - 50) {
    block2LeftNew = 0;
    block2.style.left = "0px";
  } 
  block2LeftNew += 1;
  block2.style.left = `${block2LeftNew}px`
}, 0.1);