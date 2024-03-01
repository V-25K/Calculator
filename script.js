let calculation = JSON.parse(localStorage.getItem("calculation")) || "0";
const display = document.querySelector("#js-screen");

function calculatorNumberInput(func_name) {
  try{
    display.value += func_name;
  }
  catch(error){
    display.value = "Error"
  }
  
}

function reset() {
  localStorage.removeItem("calculation");
  display.value = "";
}

function result() {
  try{
    if(display.value === 'Error' || display.value === 'undefined'){
      return display.value = ''
    }
    display.value = eval(display.value);
    calculation = display.value;
    localStorage.setItem("calculation", JSON.stringify(calculation));
  }catch(error){
    display.value = "Error"
  }
}

function clearOne(){
  let newCalc = calculation.slice(0, -1);
  calculation = newCalc;
  display.value = calculation;
}
