$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// localStorage.clear();
// let contact = [
//     ["anbya", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"],
//     ["army", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"],
//     ["ali", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"]
// ];

// myJSON = JSON.stringify(contact);
// localStorage.setItem("testJSON", myJSON);
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// let abcd = obj[1][0];
// console.log(abcd);
// document.getElementById("testDom").innerHTML = obj;


$(document).ready(function() { 
    $("#loaderwarp").hide();
}); 
$(document).ajaxStart(function(){
    // Show image container
    $("#loaderwarp").show();
  });
$(document).ajaxComplete(function(){
    // Hide image container
    $("#loaderwarp").hide();
});
  //sign up start

//cek user info
$(document).ready(function() { 
    let userInfo  = localStorage.getItem("userInfo");
    console.log(userInfo);
    if(userInfo === null){
        window.location = "login.html";
    }
    else{
        jsonData = JSON.parse(userInfo);
        let userBarName = jsonData[0][0];
        document.getElementById("userBarName").innerHTML = userBarName;
    }
});
$("#logOutBtn").click(function(e) {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    window.location = "login.html";
});
// $("#contactBtn").click(function(e) {
//     document.getElementById('testScroll').scrollIntoView({
//         behavior: 'smooth'
//     });
// });