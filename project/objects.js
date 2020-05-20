var a_r_Library = new Library();

var b1 = new Book(111, "the boy", "chayim v", 2009, 200);
var b2 = new CookingBook(222, "kal levashel", "avigail m", 2018, 100, "easy");
var b3 = new TeachingBook(333, "maslulim", "chaya", 1999, 100, "math", 4);
var b4 = new ChildrenBook(444, "dudi & udi", "lion", 2017, 200, true, 10);

a_r_Library.objBooks.addBook(b1);
a_r_Library.objBooks.addBook(b2);
a_r_Library.objBooks.addBook(b3);
a_r_Library.objBooks.addBook(b4);


var m1 = new Member(2094, "אביגיל", 5);
var m2 = new Member(2080, "רות", 2);
var m3 = new Member(2088, "ריבי", 3);
var m4 = new Member(3155, "נועה", 4);

a_r_Library.objMembers.addMember(m1);
a_r_Library.objMembers.addMember(m2);
a_r_Library.objMembers.addMember(m3);
a_r_Library.objMembers.addMember(m4);
console.log(a_r_Library.objMembers.membersArr());

var booky = a_r_Library.objBooks.booksArr();

var memy = a_r_Library.objMembers.membersArr();

