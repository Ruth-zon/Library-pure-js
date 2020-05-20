class Book {
    constructor(id, name, auther, yearCreate, numLoansPossible) {
        this.id = id;
        this.name = name;
        this.auther = auther;
        this.loanDate = null;
        this.isFree = true;
        this.yearCreate = yearCreate;
        this.isAvailable = true;
        this.numLoansPossible = numLoansPossible;
    }
    BookDetails() {
        return ("id: " + this.id + ", name: " + this.name + ", auther: " + this.auther + ", isFree: " + this.isFree + ", loanDate: " + this.loanDate + ", yearCreate: " + this.yearCreate + ", isAvailable: " + this.isAvailable + ", numLoansPossible: " + this.numLoansPossible);
    }
    loanBook() {
        this.isFree = false;
        this.loanDate = new Date().niceShow();
    }
    returnBook() {
        this.isFree = true;
    }
}
class CookingBook extends Book {
    constructor(id, name, auther, yearCreate, numLoansPossible, kategory) {
        super(id, name, auther, yearCreate, numLoansPossible);
        this.kategory = kategory;
    }
    BookDetails() {
        return (super.BookDetails() + ", kategory: " + this.kategory);
    }
}
class ChildrenBook extends Book {
    constructor(id, name, auther, yearCreate, numLoansPossible, isComics, forAge) {
        super(id, name, auther, yearCreate, numLoansPossible);
        this.isComics = isComics;
        this.forAge = forAge;
    }
    BookDetails() {
        return (super.BookDetails() + ", isComics: " + this.isComics + ", forAge " + forAge);
    }
}
class TeachingBook extends Book {
    constructor(id, name, auther, yearCreate, numLoansPossible, forGrade, profession) {
        super(id, name, auther, yearCreate, numLoansPossible);
        this.forGrade = forGrade;
        this.profession = profession;
    }
    BookDetails() {
        return (super.BookDetails() + ", forGrade: " + this.forGrade + ", profession " + profession);
    }
}


class Member {
    constructor(id, name, numLoansPossible) {
        this.id = id;
        this.name = name;
        this.numLoansPossible = numLoansPossible;
        this.books = [];
        this.history = [];
    }
    loanBook(book) {
        if (this.books.length < this.numLoansPossible) {
            this.books.push(book);
            this.history.push(book);
            book.loanBook();
        }
    }
    returnBook(book) {
        function check(b)
        { return b.id != book.id }
        this.books = this.books.filter(check);
        book.returnBook();

    }
    checkLate() {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].loanDate + 30 > Date())
                return ("book " + i + " is late");
        }
    }
    checkInHistory(book) {
        if (this.history.includes(book))
            return true;
        return false;

    }
}


class Library {
    constructor() {
        this.objBooks = (function () {
            var books = [];
            return {
                booksArr: function () {
                    return books;
                },
                addBook: function (b) {
                    books.push(b);
                },
                countForClass: function (cls) {
                    var count = 0;
                    for (var i = 0; i < books.length; i++) {
                        if (books[i] instanceof cls)
                            count++;
                    }
                },
                deleteBook: function (b) {
                    for (var i = 0; i < books.length; i++)
                        if (books[i] == b)
                            books[i].isAvailable = false;
                },
                getDetailsById: function (id) {
                    for (var i = 0; i < books.length; i++)
                        if (books[i].id == id)
                            books[i].BookDetails();
                }
            }

        })();
        this.objMembers = (function () {
            var members = [];
            return {
                membersArr: function () {
                    return members;
                },
                addMember: function (m) {
                    members.push(m);
                },
                ChangeNumBooks: function (id, num) {
                    for (var i = 0; i < members.length; i++)
                        if (members[i].id == id)
                            members[i].numLoansPossible = num;
                },
                numMembers: function () {
                    return members.length;
                }
            }
        })();
        this.counter = (function () {
            var cnt = 0;
            return {
                showCount: function () {
                    return cnt;
                },
                incriseCount:function () {
                    cnt++;
                }
            }
        })();
    }

}