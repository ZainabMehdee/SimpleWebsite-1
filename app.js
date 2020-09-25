// document.querySelector is a function that returns an object. It gets an object. The object in this case is .hello 
// Click is predefined. THe eventistener listens for an event. IN this case the event is click.
// InnerHTML is a text. hello is a variable which represents the element.

'use strict';
console.log('This is a weird piece of code.');


let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
console.log(today)
selectElement.innerHTML = formatDate;



var hello = document.querySelector(".hello");
var num = 0;
hello.addEventListener("click", function(){
    num++;
    if(num % 2 == 0){
        hello.innerHTML = "Hey You~"+num;
    }
    else{
        hello.innerHTML = "Task Timeline"
    }
    console.log("hello")
});
