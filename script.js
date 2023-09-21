document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate-password");
    generateButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const passwordLength = parseInt(document.getElementById("password-length").value);
        const includeUppercase = document.getElementById("include-uppercase").checked;
        const includeLowercase = document.getElementById("include-lowercase").checked;
        const includeNumeric = document.getElementById("include-numeric").checked;
        const includeSpecial = document.getElementById("include-special").checked;

        if (!includeUppercase && !includeLowercase && !includeNumeric && !includeSpecial) {
            alert("Please select at least one character type.");
            return;
        }

        const charset = [];
        if (includeUppercase) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (includeLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
        if (includeNumeric) charset.push("0123456789");
        if (includeSpecial) charset.push("!@#$%^&*()_+[]{}|;:,.<>?");

        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomCharset = charset[Math.floor(Math.random() * charset.length)];
            const randomChar = randomCharset.charAt(Math.floor(Math.random() * randomCharset.length));
            password += randomChar;
        }

        const passwordOutput = document.getElementById("password");
        passwordOutput.textContent = password;
        passwordOutput.parentElement.style.display = "block";
    }
});







Regenerate


