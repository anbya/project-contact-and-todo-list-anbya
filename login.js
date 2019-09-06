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