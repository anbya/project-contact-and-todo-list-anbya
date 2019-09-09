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
    loadTodo();
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
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                        <div class="card-body" style="min-height: 20vh;">
                            <div class="row">
                                <div class="col-4 text-center">
                                <figure>
                                <i class="fa fa-user-circle fa-5x" aria-hidden="true"></i>
                                </figure>
                                </div>
                                <div class="col-8 align-self-center">
                                <h5>Name : ${parseJsonContactData[0]}</h5>
                                <h5>Phone : ${parseJsonContactData[1]}</h5>
                                </div>
                            </div>
                            <div class="row collapse" id="${prmContactData}">
                                <div class="col-12 align-self-center">
                                <h5>Email : ${parseJsonContactData[2]}</h5>
                                <h5>Website : ${parseJsonContactData[3]}</h5>
                                <h5>Birth Date : ${parseJsonContactData[4]}</h5>
                                <h5>Address : ${parseJsonContactData[5]}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <a class="btn btn-block btn-primary" style="color: white;" data-toggle="collapse" data-target="#${prmContactData}" >See Detail</a>
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

function loadTodo(){
    if(localStorage.getItem("todo1") === undefined || localStorage.getItem("todo1") === null){
        document.getElementById("prmAddTodo").value = "todo1";
        document.getElementById("todoDataWrap").innerHTML = ``;
        let innerTodoDataWrap = document.getElementById("todoDataWrap").innerHTML;
        document.getElementById("todoDataWrap").innerHTML = `${innerTodoDataWrap}
        <div class="col-12 text-center">
            <h1>No Data Found</h1>
        </div>
        `;
    }
    else{
        document.getElementById("todoDataWrap").innerHTML = ``;
        for(i=1;i>=1;i++){
            let prmTodoData = "todo"+i;
            let cekTodoData = localStorage.getItem(prmTodoData);
            if(cekTodoData === undefined || cekTodoData === null){
                document.getElementById("prmAddTodo").value = prmTodoData;
                i=-99;
            }
            else{
                let parseJsonTodoData = JSON.parse(cekTodoData);
                let innerTodoDataWrap = document.getElementById("todoDataWrap").innerHTML;
                if(parseJsonTodoData[1]=="DONE"){
                    todoClass=` class="gristengah"`;
                }
                else{
                    todoClass=``;
                }
                document.getElementById("todoDataWrap").innerHTML = `${innerTodoDataWrap}
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="card-body" style="min-height: 3vh;">
                            <div class="row">
                                <div class="col-11 align-item-center">
                                    <h5${todoClass}>Name : ${parseJsonTodoData[0]}</h5>
                                </div>
                                <div class="col-1 align-item-center">
                                    <a class="pointercsr" onclick="doneTodo('${prmTodoData}')"><i class="fa fa-dot-circle-o" aria-hidden="true"></i></a>
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
$(document).ready(function() { 
    $("#todoAddForm").submit(function(e) { 
        e.preventDefault();
        let prmAddTodo = document.getElementById("todoAddForm").prmAddTodo.value;
        let whatTodo = document.getElementById("todoAddForm").whatTodo.value;
        let todoDetail = [whatTodo,"NOTDONE"];
        let stringtodoDetail = JSON.stringify(todoDetail);
        localStorage.setItem(prmAddTodo, stringtodoDetail);
        alert("New To do has been added.");
        resetTodoForm();
        $('#modalAddTodo').modal("hide");
        loadTodo();
    }); 
});

function resetTodoForm(){
    document.getElementById("todoAddForm").whatTodo.value = "";
}
function doneTodo(todoId){
    let todoToDone = localStorage.getItem(todoId);
    let parseJsonTodoToDone = JSON.parse(todoToDone);
    let todoUpdate = [parseJsonTodoToDone[0],"DONE"];
    let stringtodoUpdate = JSON.stringify(todoUpdate);
    localStorage.setItem(todoId, stringtodoUpdate);
    loadTodo();
}