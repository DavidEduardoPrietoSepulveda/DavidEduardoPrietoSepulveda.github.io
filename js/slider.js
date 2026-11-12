(function(){
    //defino las constantes necesarias
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value; //con let porque va a ser un valor que varia

    //eventos para definir los cambios al hacer click en un button
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    //defino la funcion de cambio de posicion que cambia segun el boton o flecha donde se haga click en el slider   
    const changePosition = (add) =>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;//obtener id de la clase que se esta mostrando (...--show)
        value = Number(currentTestimony);// en valu guardo su valor numerico
        value += add;// cambia value segun los clicks en los botones before o next

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;//ajusto el value en funcion de la catidad de elementos del slider para hacer que el slidaer sea ciclico
        }

        sliders[value-1].classList.add('testimony__body--show')//añade la clase --show, para mostrar el objeto del slider que debería mostrar según los clicks que de en las flechas.
    } 
})();