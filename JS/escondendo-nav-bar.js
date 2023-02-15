var btn = document.getElementById('nav-list');
var container = document.querySelector('.nav-list');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'none') {
      container.style.display = 'block';
  } else {
      container.style.display = 'none';
  }
});
