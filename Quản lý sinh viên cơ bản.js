let student = [
  { id: 1, name: "dora", studentNumber: 1231243, age: 19 },
  { id: 2, name: "nobita", studentNumber: 124572, age: 20 },
  { id: 3, name: "shizuka", studentNumber: 123098, age: 24 },
];
let menu = `
    -----------menu lựa chọn------------
    1.thêm sinh viên mới.
    2.hiện thị danh sách sinh viên
    3.xoá sinh viên theo id
    4. thoát khỏi while`;
function showStudentList() {
  for (let i = 0; i < student.length; i++) {
    console.log(
      `${i + 1}. ${student[i].name}: ${student[i].studentNumber} ${
        student[i].age
      }`
    );
  }
  console.log("---------------------");
}
function findStudent(findByStudentNumber) {
  let findIndex = -1;

  for (let i = 0; i < student.length; i++) {
    if (findByStudentNumber === student[i].studentNumber) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
let loop = true;
while (loop === true) {
  let userInput = +prompt(menu);
  switch (userInput) {
    case 1:
      let newName = prompt(" nhập tên sinh viên mới");
      let newStudentNumber = prompt("nhập mã số sinh viên mới");
      let newAge = prompt("nhập tuổi của sinh viên mới");
      let newStudent = {
        id: student[student.length + 1],
        name: newName,
        studentNumber: newStudentNumber,
        age: newAge,
      };
      student.push(newStudent);
      showStudentList();
      break;
    case 2:
      showStudentList();
      break;
    case 3:
      let dellStudent = +prompt(" nhập mã sinh viên muốn xoá");
      let dellIndex = findStudent(dellStudent);
      if (dellIndex === -1) {
        console.log(" không tìm thấy sinh viên bạn muốn xoá");
        alert(" không tìm thấy sinh viên bạn muốn xoá");
      } else {
        student.splice(dellIndex, 1);
      }
      break;
      showStudentList();
    case 4:
      showStudentList();
      alert(" đã hoàn thành list sinh viên!! thanks");
      loop = false;
      break;
    default:
      alert("bạn nhập sai lựa chọn");
      console.log(" lựa chọn bạn nhập không hợp lệ");
      break;
  }
}
