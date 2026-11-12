(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    //tengo dos funciones una para abrir(agregar) y otra para cerrar(remover) pero si solo fuera una función quedaría muy bien toggle:
    // menu.classList.toggle()
    openButton.addEventListener('click', () =>{
        menu.classList.add('nav__link--show');
    });
    
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    

})();