// function for value
function getInputValueId(id){
    let inputValue = document.getElementById(id).value;
    let inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// function for text
function getTextInputValueId(id){
    let textValue = document.getElementById(id).innerText;
    let textNumber = parseFloat(textValue);
    return textNumber;
}

// show section with button
function showSectionId(id){
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("donate-section").classList.add("hidden");
    // document.getElementById("transaction-form").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");

}