const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (campA, campB){
    return campB > campA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    let campA = parseFloat(document.getElementById('campo-a').value);
    let campB = parseFloat(document.getElementById('campo-b').value);

    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> campo A menor que campo B!</B>';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(campA, campB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        campA.value = '';
        campB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})