console.log("Javascript: ");


    var readMoreBtns = document.querySelectorAll(".read-more-btn");

    readMoreBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            console.log("test");
            var parentContent = btn.parentNode;
            console.log(parentContent)

            var extraText = parentContent.querySelector('#extracontent');
    
           extraText.classList.toggle("hidden");

            //Change the button text based on visibility
           if (extraText.classList.contains("hidden")) {
               btn.querySelector("p").innerHTML = "Read More";
           } else {
               btn.querySelector("p").innerHTML = "Read Less";
}
        });
    });

