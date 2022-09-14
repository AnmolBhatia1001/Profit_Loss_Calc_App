

function calcProfitLoss(){
    var intialPrice = 1000;
    var unitQty = 1;
    var currentPrice = 1111;

    var calcDiff = (currentPrice - intialPrice);
    var calcPercentages = Math.round((calcDiff / intialPrice)*100);

    console.log(calcDiff);
    console.log(calcPercentages);
}

calcProfitLoss()
