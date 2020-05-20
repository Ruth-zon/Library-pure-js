var lab = document.createElement("label");
lab.innerHTML = "הכנס שם מנוי";
document.getElementsByTagName("body")[0].appendChild(lab);

var br = document.createElement("br");
document.getElementsByTagName("body")[0].appendChild(br);

var inp = document.createElement("input");
inp.id = "mem";
inp.addEventListener("change", showMember, false);
document.getElementsByTagName("body")[0].appendChild(inp);

var br = document.createElement("br");
document.getElementsByTagName("body")[0].appendChild(br);

var butt = document.createElement("button");
butt.id = "but";
butt.innerHTML = "הצג את רשימת המנויים";
butt.addEventListener("click", showListMem, false);
document.getElementsByTagName("body")[0].appendChild(butt);

var div = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(div);

createBookTable(booky);

    //var dateHe = new Intl.DateTimeFormat("he‐IL");
    //console.log(dateHe.format(new Date())) ;
