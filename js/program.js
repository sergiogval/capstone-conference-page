function myFunction() {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'flex') {
    x.style.opacity = 0;
  } else {
    x.style.display = 'flex';
  }
}
myFunction();
