// Create a simple webpage in which, when a button is clicked, 
// all the links change their background to blue and their text color to white.

let buttons = ["mybtn1","mybtn2"]

for(let i in buttons)

{document.getElementById(buttons[i]).addEventListener("click", function(){for(let i in buttons)
{getElementById(buttons[i]).style.backgroundColor = "#444dc7";this.style.color = "white"}})}