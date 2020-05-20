function createBookTable(books) {
    myTable = document.createElement("table");
    myTable.style.setProperty("id", "myTable")
    var myTr = document.createElement("tr");
    var count = 0;
    for (var prop in books[0]) {
        count++;
        if (count == 7)
            break;
        var myTd = document.createElement("td");
        myTd.addEventListener("click", sort1, false);
        myTd.id = prop;
        myTd.innerHTML = prop;
        myTr.appendChild(myTd);
    }
    var myTd = document.createElement("td");
    myTd.innerHTML = "special properties";
    myTr.appendChild(myTd);
    myTable.appendChild(myTr);
    for (var i = 0; i < books.length; i++)
        if (books[i].isAvailable == true) {
            var myTr = document.createElement("tr");
            var count = 0;
            for (var prop in books[i]) {
                count++;
                if (count == 7)
                    break;
                var myTd = document.createElement("td");
                myTd.innerHTML = books[i][prop];
                myTr.appendChild(myTd);
            }
            if (books[i] instanceof CookingBook) {
                var myTd = document.createElement("td");
                myTd.innerHTML = "CookingBook, " + books[i].kategory;
                myTr.appendChild(myTd);
            }
            else if (books[i] instanceof TeachingBook) {
                var myTd = document.createElement("td");
                myTd.innerHTML = "TeachingBook, " + books[i].forGrade + ", " + books[i].profession;
                myTr.appendChild(myTd);
            }
            else if (books[i] instanceof ChildrenBook) {
                var myTd = document.createElement("td");
                myTd.innerHTML = "ChildrenBook, " + books[i].isComics + ", " + books[i].forAge;
                myTr.appendChild(myTd);
            }
            else {
                var myTd = document.createElement("td");
                myTr.appendChild(myTd);
            }
            var myTd = document.createElement("td");
            if (books[i].isFree == true) {
                myTd.innerHTML = "השאל ספר";
                let c = i;
                myTd.addEventListener("click", function () { loan(books[c]) }, false);

            }
            else {
                myTd.innerHTML = "החזר ספר";
                let c = i;
                myTd.addEventListener("click", function () { ret(books[c]) }, false);
            }
            myTr.appendChild(myTd);
            var myTd = document.createElement("td");
            myTd.innerHTML = "מחק";
            let c = i;
            myTd.addEventListener("click", function () { del(books[c]) }, false);
            myTr.appendChild(myTd);

            myTable.appendChild(myTr);
        }
    document.getElementsByTagName("div")[0].appendChild(myTable);
}

function createT(bok) {
    document.getElementsByTagName("div")[0].removeChild(myTable);
    createBookTable(bok);
}

function createMemTable(mems) {
    myMemTable = document.createElement("table");
    myMemTable.style.setProperty("id", "myMemTable")
    var myTr = document.createElement("tr");
    var count = 0;
    for (var prop in mems[0]) {
        if (count ==3)
            break;
        var myTd = document.createElement("td");
        myTd.innerHTML = prop;
        myTr.appendChild(myTd);
        count++;
    }
    myMemTable.appendChild(myTr);

    for (var i = 0; i < mems.length; i++) {
        var myTr = document.createElement("tr");
        let c = mems[i].name;
        myTr.addEventListener("click", function () { currentMem(c) }, false);
        var count = 0;
        for (var prop in mems[i]) {
            if (count < 3) {
                var myTd = document.createElement("td");
                myTd.innerHTML = mems[i][prop];
                myTr.appendChild(myTd);
                count++;
            }
        }
        myMemTable.appendChild(myTr);
    }
    document.getElementsByTagName("body")[0].appendChild(myMemTable);
}

function sort1() {
    type = this.id;
    if (type == "id")
        booky.sort(id);
    else if (type == "name")
        booky.sort(name);
    else if (type == "auther")
        booky.sort(auther);
    else if (type == "yearCreate")
        booky.sort(yearCreate);
    else if (type == "loanDate")
        booky.sort(loanDate);
    createT(booky);
}
function id(b, b1) { return b.id - b1.id }
function name(b, b1) { return b.name.localeCompare(b1.name) }
function auther(b, b1) { return b.auther.localeCompare(b1.auther) }
function yearCreate(b, b1) { return b.yearCreate - b1.yearCreate }
function loanDate(b, b1) { return b.loanDate - b1.loanDate }

function loan(bk) {
    var nm = localStorage.getItem("name");
    var mmb = a_r_Library.objMembers.membersArr();
    for (var i = 0; i < mmb.length; i++) {
        if (mmb[i].name == nm && !mmb[i].checkInHistory(bk))
            mmb[i].loanBook(bk);
        a_r_Library.counter.incriseCount();
    }
   console.log(a_r_Library.counter.showCount());
    createT(booky);
}

function ret(bk) {
    var nm = localStorage.getItem("name");
    var mmb = a_r_Library.objMembers.membersArr();
    for (var i = 0; i < mmb.length; i++) {
        if (mmb[i].name == nm)
            mmb[i].returnBook(bk);
    }
    createT(booky);
}

function del(bk) {
    a_r_Library.objBooks.deleteBook(bk);
    createT(booky);
}

Date.prototype.niceShow = function () {
    return this.getDate() + "/" + this.getMonth() + "/" + this.getFullYear();
}

function showMember() {
    var k = document.getElementById("mem").value;
    localStorage.setItem("name", k);
}
function currentMem(c)
{
    document.getElementById("mem").value = c;
    localStorage.setItem("name", c);
}
function showListMem() {
    createMemTable(memy);
}