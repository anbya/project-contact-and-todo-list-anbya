localStorage.clear();
let contact = [
    ["anbya", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"],
    ["army", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"],
    ["ali", "+628119298089", "anbyaalibia@gmail.com", "armyali.netlify.com", "1990-12-31", "Kemanggisan Jakarta Barat"]
];

myJSON = JSON.stringify(contact);
localStorage.setItem("testJSON", myJSON);
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
let abcd = obj[1][0];
console.log(abcd);
document.getElementById("testDom").innerHTML = obj;