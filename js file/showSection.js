document.getElementById("donation-btn").addEventListener("click",function(event){
    event.preventDefault;
        showSectionId("donate-section");
        let active = document.getElementById("donation-btn").style.backgroundColor = "bg-[#ffff]";
        return active;
})
document.getElementById("history-btn").addEventListener("click",function(event){
     event.preventDefault;
       showSectionId("history-section");
       let active = document.getElementById("history-btn").style.backgroundColor = "bg-[#B4F461]";
       return active;

})
// document.getElementById("transaction-btn").addEventListener("click",function(event){
//     event.preventDefault;
//       showSectionId("transaction-form");
// })