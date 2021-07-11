var menudrop = document.getElementById("menudrop");
var sidebar = document.getElementById("sidebar");
var links = document.querySelectorAll("nav a");


function toggleMenu() {
  if (sidebar.style.maxHeight) {
    sidebar.style.maxHeight = null;
    menudrop.innerHTML = "<p>menu</p><p>v</p>";
  } else {
    sidebar.style.maxHeight = sidebar.scrollHeight + "px";
    menudrop.innerHTML = "<p>menu</p><p>x</p>";
  }
}


menudrop.addEventListener("click", function(){toggleMenu()});

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(){toggleMenu()});
}
