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
    if(userInfo === null){
        window.location = "login.html";
    }
    else{
        let userBarName = userInfo;
        document.getElementById("userBarName").innerHTML = userBarName;
        document.getElementById("userBarNamePanel").innerHTML = `<h1>Hello ${userBarName}</h1>`;
        loadContact();
    }
});
$("#logOutBtn").click(function(e) {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    window.location = "login.html";
});
$(document).ready(function() { 
    document.getElementById("indexPanel").classList.remove("mainpanel");
});
$("#contactBtn").click(function(e) {
    document.getElementById("indexPanel").classList.add("mainpanel");
    document.getElementById("todoPanel").classList.add("mainpanel");
    document.getElementById("contactPanel").classList.remove("mainpanel");
    loadContact();
});
$("#todoBtn").click(function(e) {
    document.getElementById("indexPanel").classList.add("mainpanel");
    document.getElementById("contactPanel").classList.add("mainpanel");
    document.getElementById("todoPanel").classList.remove("mainpanel");
});

function loadContact(){
    if(localStorage.getItem("contact1") === undefined || localStorage.getItem("contact1") === null){
        document.getElementById("prmAddContact").value = "contact1";
        document.getElementById("contactDataWrap").innerHTML = ``;
        let innerContactDataWrap = document.getElementById("contactDataWrap").innerHTML;
        document.getElementById("contactDataWrap").innerHTML = `${innerContactDataWrap}
        <div class="col-12 text-center">
            <h1>No Data Found</h1>
        </div>
        `;
    }
    else{
        document.getElementById("contactDataWrap").innerHTML = ``;
        for(i=1;i>=1;i++){
            prmContactData = "contact"+i;
            cekContactData = localStorage.getItem(prmContactData);
            if(cekContactData === undefined || cekContactData === null){
                document.getElementById("prmAddContact").value = prmContactData;
                i=-99;
            }
            else{
                let parseJsonContactData = JSON.parse(cekContactData);
                let innerContactDataWrap = document.getElementById("contactDataWrap").innerHTML;
                document.getElementById("contactDataWrap").innerHTML = `${innerContactDataWrap}
                <div class="col-4">
                  <div class="card">
                    <div class="card-body" style="min-height: 20vh;">
                      <div class="row">
                        <div class="col-4 text-center">
                          <figure>
                          <i class="fa fa-user-circle fa-5x" aria-hidden="true"></i>
                          </figure>
                        </div>
                        <div class="col-8 align-self-center">
                          <h5>Nama : ${parseJsonContactData[0]}</h5>
                          <h5>Email : ${parseJsonContactData[1]}</h5>
                          <span>website</span></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                `;
            }
        }
    }
}
function resetAddForm(){
    document.getElementById("contactAddForm").contactName.value = "";
    document.getElementById("contactAddForm").contactPhone.value = "";
    document.getElementById("contactAddForm").contactEmail.value = "";
    document.getElementById("contactAddForm").contactWebsite.value = "";
    document.getElementById("contactAddForm").contactBirth.value = "";
    document.getElementById("contactAddForm").contactAddress.value = "";
}
$(document).ready(function() { 
    $("#contactAddForm").submit(function(e) { 
        e.preventDefault();
        let prmAddContact = document.getElementById("contactAddForm").prmAddContact.value;
        let contactName = document.getElementById("contactAddForm").contactName.value;
        let contactPhone = document.getElementById("contactAddForm").contactPhone.value;
        let contactEmail = document.getElementById("contactAddForm").contactEmail.value;
        let contactWebsite = document.getElementById("contactAddForm").contactWebsite.value;
        let contactBirth = document.getElementById("contactAddForm").contactBirth.value;
        let contactAddress = document.getElementById("contactAddForm").contactAddress.value;
        let contactDetail = [contactName,contactPhone,contactEmail,contactWebsite,contactBirth,contactAddress];
        let stringcontactDetail = JSON.stringify(contactDetail);
        localStorage.setItem(prmAddContact, stringcontactDetail);
        alert("New contact has been added.");
        resetAddForm();
        $('#contactAddPanel').collapse("hide");
        loadContact();
    }); 
});