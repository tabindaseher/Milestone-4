var Form = document.getElementById('form');
var resume_display = document.getElementById('generate-resume');
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var year = document.getElementById('years').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var response = document.getElementById('respons').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <hr>\n\n    <h3>Education</h3>\n    <p><b>Degree:</b><span contenteditable=\"true\">").concat(degree, "</span></p>\n    <p><b>University:</b><span contenteditable=\"true\">").concat(university, "</span></p>\n    <p><b>Year:</b><span contenteditable=\"true\">").concat(year, "</span></p>\n    <hr>\n\n     <h3>Experience</h3>\n    <p><b>Company:</b><span contenteditable=\"true\">").concat(company, "</span></p>\n    <p><b>Position:</b><span contenteditable=\"true\">").concat(position, "</span></p>\n    <p><b>Respnsibility:</b><span contenteditable=\"true\">").concat(response, "</span></p>\n    <hr>\n\n     <h3>Skills</h3>\n      <p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n       ");
    if (resume_display) {
        resume_display.innerHTML = resume;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
