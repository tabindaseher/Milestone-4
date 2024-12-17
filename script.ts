const Form = document.getElementById('form') as HTMLFormElement;
const resume_display =document.getElementById('generate-resume') as HTMLDivElement

Form.addEventListener('submit' , (event: Event) =>{
    event.preventDefault();

    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const degree =(document.getElementById('degree') as HTMLInputElement).value
    const university =(document.getElementById('university') as HTMLInputElement).value
    const year =(document.getElementById('years') as HTMLInputElement).value
    const company =(document.getElementById('company') as HTMLInputElement).value
    const position =(document.getElementById('position') as HTMLInputElement).value
    const response =(document.getElementById('respons') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value

    const resume = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <hr>

    <h3>Education</h3>
    <p><b>Degree:</b><span contenteditable="true">${degree}</span></p>
    <p><b>University:</b><span contenteditable="true">${university}</span></p>
    <p><b>Year:</b><span contenteditable="true">${year}</span></p>
    <hr>

     <h3>Experience</h3>
    <p><b>Company:</b><span contenteditable="true">${company}</span></p>
    <p><b>Position:</b><span contenteditable="true">${position}</span></p>
    <p><b>Respnsibility:</b><span contenteditable="true">${response}</span></p>
    <hr>

     <h3>Skills</h3>
      <p><b>Skills:</b><span contenteditable="true">${skills}</span></p>
       `;

      if(resume_display){
        resume_display.innerHTML = resume;
      }else{
        console.error('The resume display element is missing.')
      }
    
});