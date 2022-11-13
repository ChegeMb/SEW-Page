changeThisPageFunc = function() {
    var myMain;
    myMain = document.querySelector('main');
    myMain.innerHTML = "<h3>© 2023 AP Comp Sci Rosslyn Academy. All Rights Reserved.<h3>";
    myMain.style.height = "50px";
    myMain.style.width = "50%";
 }
 clickon = function() {
    alert("Hello!");
}
savetime = function() {
   t = document.querySelector("#timetable");
   trow = document.createElement("tr");
   td = document.createElement("td");
   contents = document.createTextNode(Date());
   td.appendChild(contents);
   td.onclick = clickon;
   trow.appendChild(td);
   t.appendChild(trow);
}