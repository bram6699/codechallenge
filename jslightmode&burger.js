  /*
JS buat light & dark mode
*/
function invertMode() {
  var elements = document.getElementsByClassName("my-body");
  for(var i=0; i<elements.length; i++){
  	if(elements[i].className.indexOf("dark-mode") >= 0)
    {
      elements[i].classList.remove("dark-mode");
      elements[i].classList.add("light-mode");
    }
    else if(elements[i].className.indexOf("light-mode") >= 0){
      elements[i].classList.remove("light-mode");
      elements[i].classList.add("dark-mode");
    }
  }
}

/*
JS buat burger menu
*/
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
