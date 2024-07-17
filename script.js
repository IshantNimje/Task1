document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const namePattern = /^[a-zA-Z\s]+$/;
    const mobilePattern = /^(?!1|2|3|4|5)\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const usernamePattern = /^[a-zA-Z0-9._-]{5,15}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!namePattern.test(fullName)) {
        alert('Please enter a valid full name.');
        return;
    }

    if (!mobilePattern.test(mobileNo)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!usernamePattern.test(username)) {
        alert('Username must be 5-15 characters long and can contain letters, numbers, dots, and underscores.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
        return;
    }

    alert('Registration successful!');
});


const pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password");

pwShowHide.forEach(eyeIcon =>{
eyeIcon.addEventListener("click", ()=>{
    pwFields.forEach(pwField =>{
        if(pwField.type ==="password"){
            pwField.type = "text";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("fa-eye-slash", "fa-eye");
            })
        }else{
            pwField.type = "password";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("fa-eye", "fa-eye-slash");
            })
        }
    })
})
})