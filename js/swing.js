document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.services li');
  let currentIndex = 0;

  function showNextItem(){
    if(currentIndex < items.length){
      const currentItem = items[currentIndex];
                
      setTimeout(() => {
        currentItem.classList.add('show', 'swing');
      }, 3000);
      //
      setTimeout(() => {
        currentItem.classList.remove('show', 'swing');
        currentItem.classList.add('fling-out');
        currentIndex++;
        if(currentIndex >= items.length){
          currentIndex = 0;
        }

        setTimeout(() => {
          currentItem.classList.remove('fling-out');
          showNextItem();
        }, 500);
      }, 5000);
    }
  }
  setTimeout(showNextItem, 3000);
});