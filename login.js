function validate(){
    var _email = document.login.email.value;
    var _pass = document.login.pass.value;
    var ok = true;

    var checkemail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var checkpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(!_email.match(checkemail)){
        document.getElementById("loiemail").style.display="block";
        ok=false;
    }else{
        document.getElementById("loiemail").style.display = "none";
    }
    if(!_pass.match(checkpass)){
        document.getElementById("loipass").style.display="block";
        ok=false;
    }else{
        document.getElementById("loipass").style.display = "none";
    }
    if (ok) {
        alert("thanh cong");
        return ok;
    } else return ok;
}