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
        let userNAme = document.getElementById("userNAme").value;
        let pass1 = document.getElementById("userPass1").value;
        let pass2 = document.getElementById("userPass2").value;
        if(pass1 == pass2){
            for(i=1;i>=1;i++){
                cekIdUser = localStorage.getItem(i);
                if(cekIdUser=== undefined || cekIdUser=== null){
                    var idUser = i;
                    let contactDetail = [userNAme,pass1];
                    let stringcontactDetail = JSON.stringify(contactDetail);
                    localStorage.setItem(idUser, stringcontactDetail);
                    alert("You're data has been added to system, please login.");
                    i=-99;
                }
                else{
                    parseJsonIdUser = JSON.parse(cekIdUser);
                    if(parseJsonIdUser[0] == userNAme)
                    {
                        alert("name already exist !");
                        i=-99;
                    }
                    // else{
                    //     var idUser = i;
                    //     let contactDetail = [userNAme,pass1];
                    //     let stringcontactDetail = JSON.stringify(contactDetail);
                    //     localStorage.setItem(idUser, stringcontactDetail);
                    //     lert("You're data has been added to system, please login.");
                    // }
                }
            }
        }
        else{
            alert("You're password didn't match");
        }
    }); 
}); 

// $(document).ready(function() { 
//     $("#signUp").submit(function(e) { 
//         e.preventDefault();
//         let pass1 = document.getElementById("userPass1").value;
//         let pass2 = document.getElementById("userPass2").value;
//         if(pass1 == pass2){
//             $.ajax({
//                 'type': 'POST',
//                 'url': 'http://transdeal.co.id/eksapi/project_sign_up.php',
//                 'data': $('#signUp').serialize(),
//                 'success': function(){
//                 alert("You've been registered succesfully please login");
//                 $('#modal_sign_up').modal('hide');
//                 }
//             });
//         }
//         else{
//             alert("You're password didn't match");
//         }
//     }); 
// }); 