let book = [
  {
    id: 1,
    nameBook: "Sức mạnh tiềm thức",
    author: "Dr. Joseph Murphy",
    publish: 1963,
  },
  {
    id: 2,
    nameBook: "từ tốt đến vĩ đại",
    author: "Jim Collns",
    publish: 2024,
  },
  {
    id: 3,
    nameBook: "bí mật tư duy triệu phú",
    author: "T. Harv Eker",
    publish: 2005,
  },
  {
    id: 4,
    nameBook: "người giàu có nhất thành BABYLON",
    author: "George Samuel Clason",
    publish: 2021,
  },
  {
    id: 5,
    nameBook: "the MAGIC phép màu",
    author: "Rhonda Byrne",
    publish: 2012,
  },
  {
    id: 6,
    nameBook: "The art of the deal",
    author: "Donald J. Trump",
    publish: 1987,
  },
];
let menu = `
    -------------- menu quản lý sách----------------
    1. thêm danh sách mới
    2. hiển thị tất cả sách có trong menu
    3. tìm kiếm sách theo tên
    4. xoá sách theo ID
    5. thoát khỏi ứng dụng`;

function showBooklist() {
  for (let i = 0; i < book.length; i++) {
    console.log(`
    id: ${i + 1}
    nameBook: ${book[i].nameBook}
    author: ${book[i].author}
    publish: ${book[i].publish} 
            `);
  }
  console.log(
    "$$$-----------------------------------------------------------$$$"
  );
}
function findByNameBook(bookToFind) {
  let findIndex = -1;
  for (let i = 0; i < book.length; i++) {
    if (bookToFind.toLowerCase() === book[i].nameBook.toLowerCase()) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
function findByIdBook(bookIdToFind) {
  let findIdIndex = -1;
  for (let i = 0; i < book.length; i++) {
    if (+bookIdToFind === book[i].id) {
      findIdIndex = i;
      break;
    }
  }
  return findIdIndex;
}
let loop = true;
while (loop) {
  let choice = +prompt(menu);
  switch (choice) {
    case 1:
      let newName = prompt("nhập tên sách bạn muốn thêm");
      let newAuthor = prompt("nhập tên tác giả của sách bạn vừa thêm");
      let newPublish = prompt("nhập năm xuẩ bản sách bạn vừa thêm");
      let newBook = {
        id: book.length + 1,
        nameBook: newName,
        author: newAuthor,
        publish: newPublish,
      };
      book.push(newBook);
      showBooklist();
      break;
    case 2:
      showBooklist();
      break;
    case 3:
      let findBook = prompt("tìm sách theo tên");
      let bookSreach = findByNameBook(findBook);
      if (bookSreach === -1) {
        alert("không tìm thấy sách bạn nhập vào");
        console.log("không tìm thấy sách bạn nhập vào");
      } else {
        console.log(book[bookSreach]);
        alert("đã tìm thấy sách bạn cần tìm ");
      }
      break;
    case 4:
      let delIdBook = +prompt(" nhập id sách muốn xoá");
      let dellIndex = findByIdBook(delIdBook);
      if (dellIndex === -1) {
        alert("sách không tồn tại trong list sách");
        showBooklist();
      } else {
        book.splice(dellIndex, 1);
        showBooklist();
      }
      break;
    case 5:
    //   showBooklist();
      loop = false;
      break;
    default:
        alert(" lựa chọn bạn nhập không tồn tại");
        console.log(" lựa chọn bạn nhập không hợp lệ");
        break;
  }
}

// tớ đã làm được rồi nè!!!! những gì tớ thích tớ đều làm được rồi nha!!!
