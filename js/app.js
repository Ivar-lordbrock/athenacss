const btnClose = document.getElementById('close-alert');

btnClose.addEventListener('click', function(){
    const alert = document.getElementById('alert');
    alert.parentNode.removeChild(alert)
});


function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);