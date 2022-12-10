function validate(){
var _email = document.contact.email.value;
var checkemail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ok = true;
if (!_email.match(checkemail)){
    document.getElementById("loiemail").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiemail").style.display = "none";
}
if (ok) {
    console.log("thanh cong")
    return ok;
} else return ok;
}
