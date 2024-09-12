var form = document.getElementById('resumeform');
var output = document.getElementById("resumeoutput");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("School").value;
    var education1 = document.getElementById("University").value;
    var education2 = document.getElementById("Graduation").value;
    var works = document.getElementById("works").value;
    var skills = document.getElementById("skills").value;
    var resumeHtml = "\n    <h2>Resume</h2>\n\n    <h3>Personal Information</h3>\n    <p>Name: ".concat(name, "</p>\n    <p>Age: ").concat(age, "</p>\n    \n    <h3>Contact</h3>\n    <p>Address: ").concat(address, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <p>Email: ").concat(email, "</p>\n    <h3>Education</h3>\n    <p>School: ").concat(education, "</p>\n    <p>University: ").concat(education1, "</p>\n    <p>Graduation: ").concat(education2, "</p>\n    <h3>Work Experience</h3>\n    <p>Work: ").concat(works, "</p>\n    <h3>Skills</h3>\n    <p>Skill: ").concat(skills, "</p>");
    if (output) {
        output.innerHTML = resumeHtml;
    }
    else {
        console.log("Resume preview not found");
    }
});
