let users = [];
function isValidEmail(email) {
    return email.includes(`@`) && (email.endsWith(`.com`) || email.endsWith(`.vn`));
}

function isValidPassword(password) {
    return /(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}/.test(password);
}

function inputUserData(action) {
    let inputName = prompt(`Nhập tên của bạn:`);
    let inputEmail = prompt(`Nhập email của bạn:`);
    let inputPassword = prompt(`Nhập mật khẩu của bạn:`);
    
    if (!inputName || !inputEmail || !inputPassword) {
        console.log(`Bạn chưa nhập đầy đủ thông tin!`);
        return;
    }
    if (!isValidEmail(inputEmail)) {
        console.log(`Email không hợp lệ!`);
        return;
    }
    if (!isValidPassword(inputPassword)) {
        console.log(`Mật khẩu không hợp lệ! Phải có ít nhất 6 ký tự, 1 chữ hoa và 1 ký tự đặc biệt.`);
        return;
    }
    
    let account = {
        id: Math.ceil(Math.random() * 1000),
        name: inputName,
        email: inputEmail,
        password: inputPassword
    };
    
    switch (action) {
        case `register`:
            register(account);
            break;
        case `login`:
            login(inputEmail, inputPassword);
            break;
        default:
            console.log(`Hành động không hợp lệ!`);
    }
}

function register(account) {
    if (users.some(user => user.email === account.email)) {
        console.log(`Tài khoản đã tồn tại!`);
        return;
    }
    
    users.push(account);
    console.log(`Đăng ký thành công!`);
}

function login(email, password) {
    let user = users.find(user => user.email === email && user.password === password);
    console.log(user ? `Đăng nhập thành công! Chào mừng ${user.name}` : `Email hoặc mật khẩu không đúng!`);
}

let choice;
do {
    choice = parseInt(prompt(`Chọn chức năng:\n1. Đăng ký\n2. Đăng nhập\n3. Thoát`));
    
    switch (choice) {
        case 1:
            inputUserData(`register`);
            break;
        case 2:
            inputUserData(`login`);
            break;
        case 3:
            console.log(`Thoát chương trình!`);
            break;
        default:
            console.log(`Lựa chọn không hợp lệ! Vui lòng chọn lại.`);
    }
} while (choice !== 3);