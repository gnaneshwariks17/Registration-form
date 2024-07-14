function validation() {
    var username = document.formfill.Username.value;
    var email = document.formfill.email.value;
    var password = document.formfill.password.value;
    var cpassword = document.formfill.cpassword.value;
    var mobile = document.formfill.mobile.value;
    var result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "Enter Username";
        return false;
    } else if (username.length < 6) {
        result.innerHTML = "Username must be at least six characters";
        return false;
    } else if (email === "") {
        result.innerHTML = "Enter Your Email";
        return false;
    } else if (!email.match(/.+@[a-z]+\.[a-z]+/)) {
        result.innerHTML = "Enter a valid Email";
        return false;
    } else if (password === "") {
        result.innerHTML = "Enter Your Password";
        return false;
    } else if (password.length < 6) {
        result.innerHTML = "Password must be at least 6 characters";
        return false;
    } else if (cpassword === "") {
        result.innerHTML = "Confirm Your Password";
        return false;
    } else if (password !== cpassword) {
        result.innerHTML = "Passwords do not match";
        return false;
    } else if (mobile === "") {
        result.innerHTML = "Enter Mobile Number";
        return false;
    } else if (!mobile.match(/(^[6-9])\d{9}$/)) {
        result.innerHTML = "Enter a valid Mobile Number";
        return false;
    }

    // Show the overlay and popup
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.classList.add("show");
    popup.classList.add("openslide");
    return false;
}

function closeslide() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.classList.remove("show");
    popup.classList.remove("openslide");
}
