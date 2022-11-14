function formValidation() {
    var uid = document.getElementById("username").value;
    var password = document.getElementById("userPasswords").value;
    var retype = document.getElementById("retypepassword").value;
    var email = document.getElementById("email").value;
    var usermale = document.getElementById("male")
    var userfemale = document.getElementById("female")
    var others = document.getElementsById("different")
        //email username 
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    x = 0;

    if (uid == "") {
        alert("Please enter a username.")
    } else if (!letters.test(uid)) {
        alert('Tên đăng nhập không được có ký tự đặc biệt nào')

    } else if (password = "") {
        alert("Please enter a password.")
    } else if (retype == '') {
        alert("Xác nhận mật khẩu")
    } else if (!pwd_expression.test(password)) {
        alert('Mật khẩu không được có ký tự đặc biệt')
    } else if (password != retype) {
        alert('Mật khẩu không khớp')
    } else if (document.getElementById(userPasswords).value.length < 6) {
        alert('Mật khẩu tối thiểu phải có 6 ký tự')
    } else if (document.getElementById(userPasswords).value.length > 12) {
        alert('Mật khẩu tối đa phải có 12 ký tự')
    } else if (email == '') {
        alert('Vui lòng nhập email')
    } else if (!filter.test(email)) {
        alert('Email không hợp lệ');
    } else if (usermale) {
        x++;
    } else if (userfemale) {
        x++;
    } else if (others) {
        x++;
    } else if (x == 0) {
        alert('Vui lòng xác nhận giới tính');
        usermale.focus();
        return false;
    } else {
        alert('Cảm ơn bạn đã đăng ký')
    }
}

function clearFunc() {
    document.getElementById(username).value == "";
    document.getElementById(userPasswords).value == "";
    document.getElementById(retypepassword).value == "";
    document.getElementById(email).value == "";
}

function myFunction() {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("")
        const loginForm = document.querySelector("#login");
        const createAccountForm = document.querySelector("#createAccount");

        // document.querySelector("#linkCreateAccount").addEventListener("Click", (e) => {
        //     e.preventDefault();
        //     loginForm.classList.add("form--hidden");
        //     createAccountForm.classList.remove("form--hidden");
        // })
        // document.querySelector("#linkLogin").addEventListener("Click", (e) => {
        //     e.preventDefault();
        //     loginForm.classList.remove("form--hidden");
        //     createAccountForm.classList.add("form--hidden");
        // })
        document.getElementById("linkLogin").onclick = (e) => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
        }
    });

}