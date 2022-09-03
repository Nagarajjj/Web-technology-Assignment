const btn = document.getElementById('myBtn');
const degrees = document.getElementById('quantity');
const state = document.getElementById('inputState');
let result = document.getElementById('result');


btn.addEventListener('click', (e) =>{
  e.preventDefault();
  
  console.log(state.value);
  if(!degrees.value){
    result.innerHTML = 'Please enter the degrees value (as a number)!';
  }

  else if(state.value == 'fahrenheit' && degrees.value != ''){
     result.innerHTML = parseFloat(degrees.value) * 9 / 5 + 32 + ' Â°F';
   }
   else if(state.value == 'celsius' && degrees.value != ''){
     result.innerHTML = parseFloat(degrees.value) + ' Â°C';
   }
   else if(state.value == 'kelvin' && degrees.value != ''){
     result.innerHTML = parseFloat(degrees.value) + 273.15 + ' K';
   }

});