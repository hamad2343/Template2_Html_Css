let tog=document.querySelector('.tog');
let list=document.querySelector('.header ul')
let link=document.querySelectorAll('.header ul a');
tog.onclick=function(){
    list.classList.toggle('back');
    list.classList.toggle('hidden');
    list.classList.toggle('away');
    for(let i=0;i<link.length;i++){
        link[i].style.cssText="display:block;padding:8px 15px"
    }
    
}
