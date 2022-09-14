
const intial = document.querySelector("#intial");
const qty = document.querySelector("#qty");
const current = document.querySelector("#current");
const checkBtn = document.querySelector("#checkBtn");
const opDiv = document.querySelector("#opDiv");


function calcProfitLoss(){
    var intialPrice = intial.value;
    var unitQty = qty.value;
    var currentPrice = current.value;

    var calcDiff = (currentPrice - intialPrice) * unitQty;
    var calcPercentages = Math.round(((calcDiff / intialPrice)*100 )) ;


    if(calcDiff > 0){
        opDiv.innerText = `Hey, the profit is ${calcDiff}, & the percent is ${calcPercentages} %  `
    }else{
        opDiv.innerText = `Hey, the loss is ${Math. abs(calcDiff)} & the percent is ${Math. abs(calcPercentages)} %  `
    }
    
    console.log(calcDiff);
    console.log(calcPercentages);
}

checkBtn.addEventListener("click", calcProfitLoss);
