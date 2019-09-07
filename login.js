$("#signInBtn").click(function(e) {
    e.preventDefault();
    let userName = document.getElementById("signInName").value;
    let userPass = document.getElementById("signInPass").value;
    if(userName == "" || userPass == "")
    {
        alert("User name atau password tidak boleh kosong")
    }
    else{
        let detUser = [
            [userName, userPass]
        ];
        myJSON = JSON.stringify(detUser);
        localStorage.setItem("userInfo", myJSON);
        window.location = "index.html";
    }
});

$(document).ready(function() { 
    $("#signUp").submit(function(e) { 
        e.preventDefault();
        let pass1 = document.getElementById("userPass1").value;
        let pass2 = document.getElementById("userPass2").value;
        if(pass1 == pass2){
            $.ajax({
                'type': 'POST',
                'url': 'https://transdeal.co.id/eksapi/project_sign_up.php',
                'data': $('#signUp').serialize(),
                'success': function(html){
                alert("You've been registered succesfully please login");
                $('#modal_sign_up').modal('hide');
                }
            });
        }
        else{
            alert("You're password didn't match");
        }
    }); 
}); 