
document.getElementById("submit").onclick = display;

function check(validate) {
    alert(validate(document.getElementById("email").value));
}

function display() {
    check(function (email) {
            var re = /^\S+@\S+\.\S+$/;
            return re.test(email);
        });
}