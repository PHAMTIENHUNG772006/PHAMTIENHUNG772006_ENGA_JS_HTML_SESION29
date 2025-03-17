let menu = {};
let choice;
function inputProduct() {
  let category = prompt(` Mời bạn nhập danh mục : `);
  let inputName = prompt(` Mời bạn nhập tên sản phẩm`);
  let inputPrice = +prompt(` Mời bạn nhập giá :`);
  let description = prompt(` Mời nhập mô tả: `);

  if (!menu[category]) {
    menu[category] = [];
  }
  let dish = {
    category,
    id: Math.ceil(Math.random() * 1000),
    nameProduct: inputName,
    price: inputPrice,
    description,
  };
  menu[category].push(dish);
  console.log( ` Thêm sản phẩm thành công `);
}
function displayProductId() {
  let seachIdIndex = +prompt(` Mời bạn nhập id :`);
  let listProduct = dish.filter((product) => product.id === seachIdIndex);

  if (listProduct !== 0 && listProduct.length > 0) {
    console.log(` danh sách sản phẩm tìm thấy theo ID`);
    console.table(listProduct);
  } else {
    console.log(` không thấy sản phẩm nào theo ID tìm kiếm`);
  }
}
function displayProduct() {
  // Nếu menu rỗng sẽ thông báo không có sản phẩm
  if (Object.keys(menu).length === 0) {//Object.keys giúp lấy tất cả danh mục băng dạng mảng nếu = 0 thì retủn
    console.log("Không có sản phẩm nào trong menu.");
    return;
  }
  console.log("Menu của bạn:");
  for (let category in menu) {
    if (menu[category].length > 0) {
      console.table(menu[category]);
    } else {
      console.log(`Menu : Không có món ăn nào`);
    }
  }
}
function filterProductsbyName() {
  let seachNameProduct = prompt(` Mời bạn nhập món ăn cần tìm kiếm :`);
  let foundProducts = [];
  for (let category in menu) {
    let dishMenu = menu[category].filter((dishMenu) =>
      dishMenu.nameProduct.toUpperCase() === seachNameProduct.toUpperCase()
    );
    if (dishMenu.length > 0) {
      dishMenu.forEach((dish) => {
        foundProducts.push({ category, ...dish });
      });
    }
  }
  if (foundProducts.length > 0) {
    console.log("Món ăn được tìm thấy:");
    console.table(foundProducts);
  } else {
    console.log("Không tìm thấy món ăn.");
  }
}
function deleteDishByName() {
  let searchName = prompt("Mời bạn nhập tên món ăn cần xoá:");
  let found = false;

  for (let category in menu) {
    let initialLength = menu[category].length;
    // Lọc ra các món không trùng tên và giữ lại những món chưa bị xóa
    menu[category] = menu[category].filter(
      (dish) => dish.nameProduct.toLowerCase() !== searchName.toLowerCase()
    );
    if (menu[category].length < initialLength) {
      console.log(`Đã xóa món ăn "${searchName}" trong danh mục "${category}".`);
      found = true;
  }

  if (!found) {
    console.log(`Không tìm thấy món ăn "${searchName}" để xoá.`);
  }
}
}

function updateProducts() {
  let seachName = prompt(` Mời bạn nhập tên món ăn cần cập nhật :`);

  for (let category in menu) {
    let index = menu[category].findIndex(
      (dish) => dish.nameProduct.toLowerCase() === seachName.toLowerCase()
    );
    if (index !== -1) {
      let inputUpdateName = prompt(` Mời bạn nhập tên mới :`);
      let inputUpdatePrice = +prompt(` Mời bạn nhập giá mới :`);
      let inputUpdateDescription = prompt(` Mời bạn nhập mô tả mới :`);
      menu[category][index].nameProduct = inputUpdateName;
      menu[category][index].price = inputUpdatePrice;
      menu[category][index].description = inputUpdateDescription;
      console.log(` Cập nhật món ăn thành công`);
      return;
    }
  }

  console.log("Không tìm thấy món ăn để cập nhật.");
  
}

do {
  choice = +prompt(` Mời bạn nhập lựa chọn : `);
  console.log(`
    1 Thêm món ăn vào danh mục.
    2 Hiển thị danh sách sản phẩm.
    3 Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
    4 Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
    5 Tìm kiếm món ăn theo tên trong toàn bộ menu.
    6 thoát
    `);

  switch (choice) {
    case 1:
      inputProduct();
      break;
    case 2:
      deleteDishByName();
      break;
    case 3:
      updateProducts();
      break;
    case 4:
      displayProduct();
      break;
    case 5:
      filterProductsbyName();
      break;
    case 6:
      console.log(` Đã thoát chương trình`);
      break;
    default:
      console.log(` Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 6);
