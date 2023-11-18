window.addEventListener('DOMContentLoaded',()=>{
     
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideImage(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
        })
        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        })
    }
   
    function showImage(i = 0){
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideImage()
    showImage();

tabs.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        hideImage()
        showImage(i);
    })
})

})