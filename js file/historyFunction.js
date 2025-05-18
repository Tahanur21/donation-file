
// donation addEventListener firs-btn
document.getElementById("first-btn").addEventListener("click",function(event){
    event.preventDefault;

    
        let firstInput = document.getElementById("first-input").value;


        let historyItem = document.createElement("div");
        historyItem.className = "bg-white border border-gray-200 rounded-xl p-4 mt-4";

        historyItem.innerHTML = `
            <p class= "text-xl text-black font-bold p-2">${firstInput} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p class= "text-sm text-black p-2">Date : ${new Date().toLocaleDateString()}</p>
        `
        let historyList = document.getElementById("history-list");
        historyList.appendChild(historyItem);
        console.log(historyList);
})

// second donation
document.getElementById("second-btn").addEventListener("click",function(event){
    event.preventDefault;

    let secondInput = getInputValueId("second-input");


        let historyItem = document.createElement("div");
        historyItem.className = "bg-white border border-gray-200 rounded-xl p-4 mt-4";

        historyItem.innerHTML = `
            <p class= "text-xl text-black font-bold p-2">${secondInput} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p class= "text-sm text-black p-2">Date : ${new Date().toLocaleDateString()}</p>
        `
        let historyList = document.getElementById("history-list");
        historyList.appendChild(historyItem);
        console.log(historyList);
})

// Third donation
document.getElementById("third-btn").addEventListener("click",function(event){
    event.preventDefault;

    let thirdInput = getInputValueId("third-input");

        let historyItem = document.createElement("div");
        historyItem.className = "bg-white border border-gray-200 rounded-xl p-4 mt-4";

        historyItem.innerHTML = `
            <p class= "text-xl text-black font-bold p-2">${thirdInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class= "text-sm text-black p-2">Date : ${new Date().toLocaleDateString()}</p>
        `
        let historyList = document.getElementById("history-list");
        historyList.appendChild(historyItem);
        console.log(historyList);
})