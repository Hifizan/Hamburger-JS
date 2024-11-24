let icon = document.querySelector('.ham');
let list = document.querySelector ('.list');

icon.addEventListener('click', ()=>{
    console.log('icon clicked');
    list.classList.toggle('mob');

    // list.style.display='block';
})