var form = document.getElementById('resumeform') as HTMLFormElement;
var output = document.getElementById("resumeoutput") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const age = (document.getElementById("age") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const education = (document.getElementById("School") as HTMLInputElement).value;
  const education1 = (document.getElementById("University") as HTMLInputElement).value;
  const education2 = (document.getElementById("Graduation") as HTMLInputElement).value;
  const works = (document.getElementById("works") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeHtml = `
    <h2>Resume</h2>

    <h3>Personal Information</h3>
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
    
    <h3>Contact</h3>
    <p>Address: ${address}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <h3>Education</h3>
    <p>School: ${education}</p>
    <p>University: ${education1}</p>
    <p>Graduation: ${education2}</p>
    <h3>Work Experience</h3>
    <p>Work: ${works}</p>
    <h3>Skills</h3>
    <p>Skill: ${skills}</p>`;

   if (output) {
    output.innerHTML = resumeHtml;
    
   }else{
    console.log("Resume preview not found");
   }
  
});





