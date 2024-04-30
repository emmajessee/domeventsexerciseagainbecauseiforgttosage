//1a. 
const button1 = document.getElementById(`one`)

//1b. 
button1.onclick = function(){
    alert("You clicked the first button!!! Congratulations!!!")
}

//2a. 
const h3 = document.querySelector(`h3`)

//2b. 
h3.addEventListener('mouseover', function() {
    alert("You hovered over the h3 element!!!!! Congrats!!!!!");
})

//3a. 
const form = document.getElementById(`myForm`)

//3b. 
form.addEventListener('submit', function() {
    alert("Submitted value")
})