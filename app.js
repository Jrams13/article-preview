const popUp = document.getElementById("popup-container");
const shareButton = document.getElementById("button");

shareButton.addEventListener("click", function() {

    popUp.classList.add("show");

})





document.addEventListener('click', function(e) {

    if (!popUp.contains(e.target)&& e.target != shareButton)  popUp.classList.remove("show");
    
   });


