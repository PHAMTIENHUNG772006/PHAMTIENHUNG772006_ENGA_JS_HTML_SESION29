// Mảng lưu danh sách người dùng
let users = [];

function isValidEmail(email) {
    return email.includes(`@`) && (email.endsWith(`.com`) || email.endsWith(`.vn`));
}

function isValidPassword(password) {
    return /(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}/.test(password);
}

function inputUserData() {
    let inputName = prompt(`Mời nhập tên của bạn:`);
    let inputEmail = prompt(`Mời nhập email của bạn:`);
    let inputPassword = prompt(`Mời nhập mật khẩu của bạn:`);
    
    if (!inputName || !inputEmail || !inputPassword) {
        console.log(`Bạn chưa nhập đầy đủ thông tin`);
        return;
    }
    if (!isValidEmail(inputEmail)) {
        console.log(`Email không hợp lệ!`);
        return;
    }
    if (!isValidPassword(inputPassword)) {
        console.log(`Mật khẩu không hợp lệ Phải có ít nhất 6 ký tự, 1 chữ hoa và 1 ký tự đặc biệt.`);
        return;
    }
    
    return {
        id: Math.ceil(Math.random() * 1000),
        name: inputName,
        email: inputEmail,
        password: inputPassword
    };
}

function register() {
    let account = inputUserData();
    if (!account) return;
    
    if (users.some(user => user.email === account.email)) {
        console.log(`Email tài khoản đã tồn tại!`);
        return;
    }
    
    users.push(account);
    console.log(`Đăng ký thành công`);
}

function login() {
    let inputEmail = prompt(`Nhập email của bạn:`);
    let inputPassword = prompt(`Nhập mật khẩu của bạn:`);
    
    let user = users.find(user => user.email === inputEmail && user.password === inputPassword);
    console.log(user ? `Đăng nhập thành công Chào mừng ${user.name.toUpperCase()}` : `Email hoặc mật khẩu không đúng!`);
}

let choice;
do {
    choice = +prompt(` Mời bạn chọn chức năng :`);
    console.log(`
     =======Menu=======
        1. Đăng ký
        2. Đăng nhập
        3. Thoát
        `);
    
    switch (choice) {
        case 1:
            register();
            break;
        case 2:
            login();
            break;
        case 3:
            console.log(`Thoát chương trình!`);
            break;
        default:
            console.log(`Lựa chọn không hợp lệ! Vui lòng chọn lại.`);
    }
} while (choice !== 3);
