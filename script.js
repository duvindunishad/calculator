let currentInput ='';

function appendToDisplay(value){
    currentInput += value;
    document.getElementById('display').value = currentInput;
}
function clearDisplay(){
    currentInput = '';
    document.getElementById('display').value = '';
}
