// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

function someHight(itemClass){
  let item = document.querySelectorAll(itemClass);
  let hightItem = 0;
  for (let i = 0; i < item.length; i++) {
    if (hightItem < item[i].offsetHeight) hightItem = item[i].offsetHeight;
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.height = hightItem + 'px';
  }
}
someHight('.product_summary');

})
