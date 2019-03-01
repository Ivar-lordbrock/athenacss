const btnClose = document.getElementById('close-alert');

btnClose.addEventListener('click', function(){
    const alert = document.getElementById('alert');
    alert.parentNode.removeChild(alert)
});