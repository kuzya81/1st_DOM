const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const countitems = getComputedStyle(items);
const item = document.querySelectorAll(".item");


const step = 100;
const shownItems = 300/step;
const maxRight = (item.length-shownItems)*step;
const minRight = 0;

let currentRight = parseInt(countitems.right);

rightBtn.addEventListener('click', e=>{
  e.preventDefault;
if (currentRight< maxRight){
  currentRight +=step;
  items.style.right = `${currentRight}px`
}

});
leftBtn.addEventListener('click', e=>{
  e.preventDefault;

  if (currentRight>minRight){
    currentRight -=step;
    items.style.right = `${currentRight}px`
  }
});
