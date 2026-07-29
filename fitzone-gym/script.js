console.log("FitZone Gym Website Loaded Successfully!");
const joinButton = document.getElementById("joinBtn");
const contactButton = document.getElementById("contactBtn");

joinButton.addEventListener("click", function () {
    alert("Welcome to FitZone Gym!");
});
contactButton.addEventListener("click", function () {
    alert("Contact Us");
});
// Contact Form Validation

let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name==="" || email==="" || phone==="" || message===""){
        alert("⚠ Please fill all fields!");
    }
    else{
        alert("✅ Thank You! Your message has been sent.");

        form.reset();
    }

});