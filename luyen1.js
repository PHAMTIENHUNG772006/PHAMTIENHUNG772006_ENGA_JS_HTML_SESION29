let contacts = [];
let choice;
function inputContact() {
  let inputName = prompt(` Mời bạn nhập tên liên hệ `);
  let inputEmail = prompt(` Mời bạn nhập email :`);
  let inputPhone = +prompt(` Mời nhập số điện thoại`);
  let NewArrContact = {
    id: Math.ceil(Math.random() * 1000),
    nameContact: inputName,
    email: inputEmail,
    phone: inputPhone,
  };
  contacts.push(NewArrContact);
}
function findIdContactPhone() {
  let seachPhoneNumber = +prompt(
    ` Mời bạn nhập số điện thoại nhân viên cần tìm :`
  );

  let findPhoneContact = contacts.filter(
    (contact) => contact.phone === seachPhoneNumber
  );
  if (findPhoneContact !== 0 && findPhoneContact.length > 0) {
    console.table(findPhoneContact);
  } else {
    console.log(` Không tìm thấy thông tin cần tìm `);
  }
}
function updateContact() {
  let seachIdIndex = +prompt(` Mời bạn nhập id cần tìm`);
  let findIdContact = contacts.findIndex(
    (contacts) => contacts.id === seachIdIndex
  );
  if (findIdContact !== -1) {
    let inputUpdateName = prompt(` Mời bạn nhập tên mới :`);
    let inputUpdateEmail = prompt(` Mời bạn nhập em mail mới :`);
    let inputUpdatephone = +prompt(` Mời bạn nhập số điện thoại mới :`);
    contacts[findIdContact].nameContact = inputUpdateName;
    contacts[findIdContact].email = inputUpdateEmail;
    contacts[findIdContact].phone = inputUpdatephone;
    console.log(` Cập nhật thành công`);
  } else {
    console.log(` Không tìm thấy id cần tìm`);
  }
}
function deleteContact(){
    let seachIdIndex = +prompt(` Mời bạn nhập id cần tìm`);
      let findIdContact = contacts.findIndex(
        (contacts) => contacts.id === seachIdIndex
      );
      if(findIdContact!== -1){
  
        let confirmDelete = confirm(`Bạn có chắc xoá không`);
        if(confirmDelete){
            contacts.splice(findIdContact,1);
            console.log(` Xoá liên hệ thành công`);
          }
        }else{
            console.log(` Không tìm thấy id  `); 
        }
}
do {
    console.log(`
        1 Thêm đối tượng Contact vào danh sách liên hệ.
        2 Hiển thị danh sách danh bạ.
        3 Tìm kiếm thông tin Contact theo số điện thoại.
        4 Cập nhật thông tin Contact(name, email, phone) theo id.
        5 Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6 thoát
        `);
  choice = +prompt(` Mời bạn nhập lựa chọn : `);
  switch (choice) {
    case 1:
      inputContact();
      break;
    case 2:
      console.table(contacts);
      break;
    case 3:
      findIdContactPhone();
      break;
    case 4:
      updateContact();
      break;
    case 5:
      deleteContact();
      break;
    case 6:
      console.log(` Đã thoát chương trinh`);
      break;
    default:
      console.log(` Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 6);
