//The function below uses the id res to create the solve function of the calculator.//
function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
//The function below uses the id res to create the result function of the calculator.//
// This can  bring up error pages if a error occurs with the catch keyword//
function Result() {
   var num1 = document.getElementById('res').value;
   try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
   } catch {
      document.getElementById('res').value = 'Error';
   }
}
//The function below creates the function of clearing the space in the calcualtor using the id res.//
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}
//The function below uses multiple const variables. It also uses the if conditional statement and the else if multiple times.// 
// It also helps the numbers and key actions of the calculator run properly.//
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
      Result();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});