//Function to redirect to gamePage with the selected level being storaged in local storage
function selectDifficulty(level) {
    localStorage.setItem('difficultyLevel', level);
    window.location.href = 'inboxPage.html';
}

function openEmail(emailId) {
    const emailContent = document.getElementById('email-content');
    emailContent.style.display = 'block';
    switch(emailId) {
        case 1:
            emailContent.innerHTML = `
                <h2>Your account needs verification</h2>
                <p>Dear user,</p>
                <p>Your account needs verification. Please click on the following link to verify your account: <a href="#">Verify Now</a></p>
                <p>Thank you,</p>
                <p>Support Team</p>
            `;
            break;
        case 2:
            emailContent.innerHTML = `
                <h2>Invoice attached</h2>
                <p>Dear user,</p>
                <p>Please find the attached invoice for your recent purchase. If you have any questions, feel free to contact us.</p>
                <p>Thank you,</p>
                <p>Billing Team</p>
            `;
            break;
        case 3:
            emailContent.innerHTML = `
                <h2>Password Reset Request</h2>
                <p>Dear user,</p>
                <p>We received a request to reset your password. If you did not make this request, please ignore this email. Otherwise, click the link below to reset your password: <a href="#">Reset Password</a></p>
                <p>Thank you,</p>
                <p>Support Team</p>
            `;
            break;
        case 4:
            emailContent.innerHTML = `
                <h2>Urgent: Action Required</h2>
                <p>Dear user,</p>
                <p>There has been a security breach on your account. Please click the link below to secure your account: <a href="#">Secure Account</a></p>
                <p>Thank you,</p>
                <p>Admin</p>
            `;
            break;
        default:
            emailContent.innerHTML = `<p>Email content not available.</p>`;
            break;
    }
}


function submitResponse() {
    const selectedPhishing = document.querySelector('input[name="phishing"]:checked');
    const selectedRedFlags = document.querySelectorAll('input[name="redFlags"]:checked');
    let redFlags = [];
    selectedRedFlags.forEach(flag => redFlags.push(flag.value));
    
    if (!selectedPhishing) {
        alert('Please select if the email is a phishing attempt.');
        return;
    }
    
    const response = {
        phishing: selectedPhishing.value,
        redFlags: redFlags
    };

    console.log('User Response:', response);
    // Here I would add logic to check the user's response and provide feedback
    // This could involve comparing the user's response to predefined correct answers


if (response) {
    window.location.href = 'homePage.html';
}

}