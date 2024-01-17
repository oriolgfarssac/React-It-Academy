function validate() {
    var err = 0;
    // Get the input fields
    let fName = document.getElementById("fName");
    let fEmail = document.getElementById("fEmail");
    let fLastName = document.getElementById("fLastN");
    let fPassword = document.getElementById("fPassword");
    let fPhone = document.getElementById("fPhone");
    let fAddress = document.getElementById("fAddress");

    // Get the error elements
    let errorName = document.getElementById("errorName");
    let errorLastName = document.getElementById("errorLastN");
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");
    let errorAddress = document.getElementById("errorAddress");
    let errorPhone = document.getElementById("errorPhone");

    // Validate fields entered by the user: name, phone, password, and email
    if (fName.value == "" || /^\d+$/.test(fName.value)) {
        err++;
        console.log(errorName);
        fName.classList.add("is-invalid");
    } else {
        fName.classList.remove("is-invalid");
    }

    if (fLastName.value == "" || /^\d+$/.test(fLastName.value)) {
        err++;
        console.log(errorLastName);
        fLastName.classList.add("is-invalid");
    } else {
        fLastName.classList.remove("is-invalid");
    }

    if (fEmail.value == "" || !/@/.test(fEmail.value)) {
        err++;
        console.log(errorEmail);
        fEmail.classList.add("is-invalid");
    } else {
        fEmail.classList.remove("is-invalid");
    }

    if (fPassword.value == "" || /^\d+$/.test(fPassword.value)) {
        err++;
        console.log(errorPassword);
        fPassword.classList.add("is-invalid");
    } else {
        fPassword.classList.remove("is-invalid");
    }

    if (fAddress.value == "") {
        err++;
        console.log(errorAddress);
        fAddress.classList.add("is-invalid");
    } else {
        fAddress.classList.remove("is-invalid");
    }

    if (fPhone.value == "" || fPhone.value.length < 9 || /[a-zA-Z]/.test(fPhone.value)) {
        err++;
        console.log(errorPhone);
        fPhone.classList.add("is-invalid");
    } else {
        fPhone.classList.remove("is-invalid");
    }


    if (err > 0) {
        alert("Error in the form!");
    } else {
        alert("All correct!");
    } 
}
