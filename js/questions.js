(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];//obtener todos los títulos
    
    titleQuestions.forEach(q => {
        q.addEventListener('click', ()=>{//vamos a definir la accion que queremos al hacer click
            let height = 0;
            let answer = q.nextElementSibling;//por ejemple el hermano del title seria el parrafo (p)
            let addPadding = q.parentElement.parentElement;//traer el elemento que tiene la clase questions__padding es decir el article completo

            addPadding.classList.toggle('questions__padding--add')

            q.children[0].classList.toggle('questions__arrow--rotate')//voy a obtener el primer hijo de title que sería en este caso el span poruqe quiero las clases del span, especificamente la primera

            if(answer.clientHeight === 0){//pregunta la altura del parrafo
                height = answer.scrollHeight;//ahora la variable height será el alto minimo para mostrar el parrafo
            }

            answer.style.height = `${height}px`//agrego la variable height a la prodiedad answer
        })
    });

})();