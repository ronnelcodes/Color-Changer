// coded by @ronnelcodes
const colors = ["green", "red", "blue", "pink", "orange", "white", "gray", "black", "teal", "yellow", "tan", "purple"]
var color = document.querySelector('.color')
var button = document.querySelector('.change')

button.addEventListener('click', function(){
  var final_color = colors[randomColor()]
  document.body.style.backgroundColor = final_color;
color.textContent = final_color
function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
})