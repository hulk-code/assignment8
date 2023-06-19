function forInputs(inputFieldId){
    const inputONe=document.getElementById(inputFieldId);
   const inputOneString=inputONe.value ;
   const inputOneValue=parseInt(inputOneString);
      inputONe.value=''
   return inputOneValue;

}
// function forInputText(textFieldId){
//     const firstResult=document.getElementById(textFieldId);
//     const firstResultString=firstResult.innerText;
//     const firstResultInt=parseInt(firstResultString);
    
//     return firstResultInt;
//  }
//  function result(common){
//     const firstResult=document.getElementById(common);
//     firstResult.innerText=triangleValue;
//     return firstResult; 
//  }


document.getElementById('button-one').addEventListener('click',function(){

const one= forInputs('input-one')

const two=forInputs('input-two')
    const triangleValue= 0.5*one * two;
    const firstResult=document.getElementById('first-result');
    firstResult.innerText=triangleValue;
})
    

document.getElementById('convert-buttonOne').addEventListener('click',function(){
    const firstResult=document.getElementById('first-result');
    const firstResultString=firstResult.innerText;
    const firstResultInt=parseInt(firstResultString);
    // const threeInput=forInputText('first-result');
     
    const convertResult = 0.0001* firstResultInt;
    const NumberTwoDeci=convertResult.toFixed(3)
    firstResult.innerText=NumberTwoDeci;
})
document.getElementById('button-two').addEventListener('click',function(){
    const inputThree=forInputs('input-three');
    const inputFour=forInputs('input-four');
    const pentagoanValue=0.5 * inputThree* inputFour;
    const secoundResult=document.getElementById('second-result');
    secoundResult.innerText=pentagoanValue;
})

document.getElementById('convert-buttonTwo').addEventListener('click',function(){
    const secoundResult=document.getElementById('second-result');
    const secoundResultstring=secoundResult.innerText;
    const secoundResultInt=parseInt(secoundResultstring)

    const convertResultforbuttontwo = 0.0001* secoundResultInt;
    const resultTwoDeci=convertResultforbuttontwo.toFixed(3)
    secoundResult.innerText=resultTwoDeci;

})
document.getElementById('button-three').addEventListener('click',function(){
    const inputParaOne=forInputs('input-para-one');
    const inputParaTwo=forInputs('input-para-two');
    const paraValue=inputParaOne*inputParaTwo;
    const paraCmResult=document.getElementById('pera-cm-result');
    paraCmResult.innerText=paraValue;
})
 document.getElementById('convert-button-para').addEventListener('click',function(){
    const paraCmResult=document.getElementById('pera-cm-result');
    const paraCmResultString=paraCmResult.innerText;
    const convertParaResult=parseFloat(paraCmResultString);
    const finalparaValue= 0.0001*convertParaResult;
    const finalpara= finalparaValue.toFixed(3)
    paraCmResult.innerText=finalpara;
 })
 
 document.getElementById('button-four').addEventListener('click',function(){
    const inputOneRac=forInputs('input-one-rac');
    const inputTwoRac=forInputs('input-two-rac');
     const resultRac=inputOneRac*inputTwoRac;
    const totalRacCalculation=document.getElementById('total-rac-calculation');
    totalRacCalculation.innerText=resultRac;

 })
 document.getElementById('convert-rac-button').addEventListener('click',function(){

    const totalRacCalculation=document.getElementById('total-rac-calculation');
    const totalRacCalculationString=totalRacCalculation.innerText;
    const totalRacCalculationInt=parseFloat(totalRacCalculationString);
    const finalRacvalue=0.0001*totalRacCalculationInt;
    const finalRacvaluedeci= finalRacvalue.toFixed(3)
     totalRacCalculation.innerText=finalRacvaluedeci; 

 })
 document.getElementById('button-five').addEventListener('click',function(){
    const inputRhomOne=forInputs('input-rhom-one');
    const inputRhomTwo=forInputs('input-rhom-two');
    const RhombusArea=0.5* inputRhomOne* inputRhomTwo;
    const totalRhombusCalculation=document.getElementById('total-rhom-calculation');
    totalRhombusCalculation.innerText=RhombusArea;

 })
 document.getElementById('convert-rhom-button').addEventListener('click',function(){
    const totalRhombusCalculation=document.getElementById('total-rhom-calculation');
    const totalRhombusCalculationString=totalRhombusCalculation.innerText;
    const totalRhomCalculationInt=parseFloat(totalRhombusCalculationString);
    const finalRHom= 0.0001*totalRhomCalculationInt;
    const finalRhomvaluedeci= finalRHom.toFixed(3)
    totalRhombusCalculation.innerText=finalRhomvaluedeci;

 })
 document.getElementById('button-six').addEventListener('click',function(){
    const inputelliOne=forInputs('input-one-elli');
    const inputelliTwo=forInputs('input-two-elli');
    const ellipsArea=3.1416* inputelliOne* inputelliTwo;
    const totalellipsCalculation=document.getElementById('total-calculation-elli');
    totalellipsCalculation.innerText=ellipsArea;
 })
 document.getElementById('convert-ellips-button').addEventListener('click',function(){
    const totalellipsCalculation=document.getElementById('total-calculation-elli');
    const totalellipsCalculationString=totalellipsCalculation.innerText;
    const totalellipsCalculationInt=parseFloat(totalellipsCalculationString);
    const finalellips= 0.0001*totalellipsCalculationInt;
    const finalellipsvaluedeci= finalellips.toFixed(3)
    totalellipsCalculation.innerText=finalellipsvaluedeci;
 })










   
