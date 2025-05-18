let historyBtn = document.getElementById("history-btn");

historyBtn.addEventListener("click",function(event){
     event.preventDefault;
        showSectionId("history-section");

        historyBtn.classList.remove("bg-[#ffff]");
        historyBtn.classList.add("bg-[#B4F461]");
        donationBtn.classList.remove("bg-[#B4F461]");
        donationBtn.classList.add("bg-[#ffff]");
})

let donationBtn =  document.getElementById("donation-btn");

donationBtn.addEventListener("click",function(event){
    event.preventDefault;
        showSectionId("donate-section");

        donationBtn.classList.remove("bg-[#ffff]");
        donationBtn.classList.add("bg-[#B4F461]");
        historyBtn.classList.remove("bg-[#B4F461]");
        historyBtn.classList.add("bg-[#ffff]");
})

let blogPage = document.getElementById("blog-button");

blogPage.addEventListener("click", function(event){
    event.preventDefault;
    console.log("Hello");
})