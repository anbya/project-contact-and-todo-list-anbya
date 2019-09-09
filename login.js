$("#signInBtn").click(function(e) {
    e.preventDefault();
    let userName = document.getElementById("signInName").value;
    let userPass = document.getElementById("signInPass").value;
    if(userName === "" || userPass === "")
    {
        alert("User name atau password tidak boleh kosong")
    }
    else{
        for(i=1;i>=1;i++){
            cekIdUser = localStorage.getItem(i);
            if(cekIdUser=== undefined || cekIdUser=== null){
                alert("Sorry we couldn't find your user name");
                i=-99;
                console.log(parseJsonIdUser[0]);
                console.log(parseJsonIdUser[1]);
                console.log(userNAme);
                console.log(userPass);
            }
            else{
                let userName = document.getElementById("signInName").value;
                parseJsonIdUser = JSON.parse(cekIdUser);
                if(parseJsonIdUser[0] == userName)
                {
                    let userPass = document.getElementById("signInPass").value;
                    if(parseJsonIdUser[1] == userPass){
                        i=-99;
                        let userName = document.getElementById("signInName").value;
                        localStorage.setItem("userInfo", userName);
                        window.location = "index.html";
                        console.log(parseJsonIdUser[0]);
                        console.log(parseJsonIdUser[1]);
                        console.log(userNAme);
                        console.log(userPass);
                    }
                    else{
                        alert("Please input right password");
                        i=-99;
                        console.log(parseJsonIdUser[0]);
                        console.log(parseJsonIdUser[1]);
                        console.log(userNAme);
                        console.log(userPass);
                    }
                }
            }
        }
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