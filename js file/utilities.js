// donation addEventListener firs-btn
document.getElementById("first-btn").addEventListener("click",function(event){
    event.preventDefault;

    let firsInput = getInputValueId("first-input");
    if(firsInput<0){
        alert("Wrong input");
        return;
    }
    if(isNaN(firsInput)){
        alert("Please input a number");
    }
    if(firsInput>0){
        let balance = getTextInputValueId("first-money-screen");
        let headBalance = getTextInputValueId("header-money-screen");
        let newBalance = balance + firsInput;
        let newHeadBalance = balance + firsInput + headBalance;

        document.getElementById("first-money-screen").innerText = newBalance;
        document.getElementById("header-money-screen").innerText = newHeadBalance;

        return;
    }
    else{
        alert("Wrong input");
        return
    }
})
// second btn
document.getElementById("second-btn").addEventListener("click",function(event){
    event.preventDefault;

    let secondInput = getInputValueId("second-input");
    if(secondInput<0){
        alert("Wrong input");
        return;
    }
    if(isNaN(secondInput)){
        alert("Please input a number");
    }
    if(secondInput>0){
        let balance = getTextInputValueId("second-money-screen");
        let headBalance = getTextInputValueId("header-money-screen");
        let newBalance = balance + secondInput;
        let newHeadBalance = secondInput + headBalance;

        document.getElementById("second-money-screen").innerText = newBalance;
        document.getElementById("header-money-screen").innerText = newHeadBalance;
        return;
    }
    else{
        alert("Wrong input");
        return
    }
})

// third btn
document.getElementById("third-btn").addEventListener("click",function(event){
    event.preventDefault;

    let thirdInput = getInputValueId("third-input");
    if(thirdInput<0){
        alert("Wrong input");
        return;
    }
    if(isNaN(thirdInput)){
        alert("Please input a number");
    }
    if(thirdInput>0){
        let balance = getTextInputValueId("third-money-screen");
        let headBalance = getTextInputValueId("header-money-screen");
        let newBalance = balance + thirdInput;
        let newHeadBalance = thirdInput + headBalance;

        document.getElementById("third-money-screen").innerText = newBalance;
        document.getElementById("header-money-screen").innerText = newHeadBalance;
        return;
    }
    else{
        alert("Wrong input");
        return
    }
})