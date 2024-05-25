
const form = document.querySelector('form'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  // Your form submission logic here 
  let count = 0;

const numberDisplay = document.getElementById("number")
const btnUp = document.getElementById("increment");
const btnDown = document.getElementById("decrement");
const btnClear = document.getElementById("clear");
const errorMessege = document.getElementById("error-msg");

btnUp.addEventListener('click' ,(event) =>{
    event.stopPropagation()
    errorMessege.innerText ="";
    count++;
    console.log("Increment button clicked: ", count);
    numberDisplay.innerText = count;
    
});

btnDown.addEventListener('click',(event)=>{
    event.stopPropagation()
    
    if(count == 0){
        errorMessege.innerText = "Error : cannot go below 0";
        console.log("can not decrement");
    }
   else{
    errorMessege.innerText ="";
    count--;
    console.log("decrement button clicked: ", count);
    numberDisplay.innerText = count;
   }
    
});

btnClear.addEventListener('click' ,(event)=>{
    event.stopPropagation()
    errorMessege.innerText ="";
    count = 0;
    console.log("clear button clicked: ", count);
    numberDisplay.innerText = count;
    
});

});

