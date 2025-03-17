let products = [];
let choice;
function inputProduct() {
  let inputName = prompt(` Mời bạn nhập tên sản phẩm`);
  let inputPrice = +prompt(` Mời bạn nhập giá :`);
  let inputCategory = prompt(` Mời nhập danh mục: `);
  let inputQuantity = +prompt(` Mời bạn nhập số lượng sản phẩm`);
  let NewArrProduct = {
    id: Math.ceil(Math.random() * 1000),
    nameProduct: inputName,
    price: inputPrice,
    category: inputCategory,
    quantity: inputQuantity,
  };
  products.push(NewArrProduct);
}
function displayProductId() {
  let seachIdIndex = +prompt(` Mời bạn nhập id :`);
  let listProduct = products.filter((product) => product.id === seachIdIndex);

  if (listProduct !== 0 && listProduct.length > 0) {
    console.log(` danh sách sản phẩm tìm thấy theo ID`);
    console.table(listProduct);
  } else {
    console.log(` không thấy sản phẩm nào theo ID tìm kiếm`);
  }
}
function updateProducts() {
    let seachIdIndex = +prompt(` Mời bạn nhập ID :`);
    let findProduct = products.findIndex(
      (product) => product.id === seachIdIndex
    );
    if (findProduct !== -1) {
      let inputUpdateName = prompt(` Mời bạn nhập tên mới :`);
      let inputUpdatePrice = +prompt(` Mời bạn nhập giá mới :`);
      let inputUpdateCategory = prompt(` Mời bạn nhập tên danh mục :`);
      let inputUpdateQuatity = +prompt(` Mời bạn nhập số lượng sản phẩm mới: `);
      products[findProduct].nameProduct = inputUpdateName;
      products[findProduct].price = inputUpdatePrice;
      products[findProduct].category = inputUpdateCategory;
      products[findProduct].quantity = inputUpdateQuatity;
      console.log(` Cập nhật thành công`);
    } else {
      console.log(` Không tìm thấy ID sản phẩm`);
    }
}
function deleteProduct() {
  let seachIdIndex = +prompt(` Mời bạn nhập id cần tìm`);
  let findIdProduct = products.findIndex(
    (products) => products.id === seachIdIndex
  );
  if (findIdProduct !== -1) {
    let confirmDelete = confirm(`Bạn có chắc xoá không`);
    if (confirmDelete) {
      products.splice(findIdProduct, 1);
      console.log(` Xoá sp thành công`);
    }
  } else {
    console.log(` Không tìm thấy id  `);
  }
}
function filterProduct() {
  let firstPrice = +prompt(` Mời bạn nhập giá đầu :`);
  let lastPrice = +prompt(` mời bạn nhập giá cuối :`);

  let findProduct = products.filter(
    (product) => product.price >= firstPrice && product.price <= lastPrice
  );

  if (findProduct !== 0 && findProduct.length > 0) {
    console.table(findProduct);
  } else {
    console.log(` Không tìm thấy sản phẩm nào trong tầm giá :`);
  }
}
do {
  choice = +prompt(` Mời bạn nhập lựa chọn : `);
  console.log(`
    1 Thêm sản phẩm vào danh sách sản phẩm.
    2 Hiển thị danh sách sản phẩm.
    3 Hiển thị chi tiết sản phẩm theo id.
    4 Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5 Xóa sản phẩm theo id
    6 Lọc sản phẩm theo khoảng giá
    7 thoát
    `);

  switch (choice) {
    case 1:
      inputProduct();
      break;
    case 2:
      console.table(products);
      break;
    case 3:
      displayProductId();
      break;
    case 4:
      updateProducts();
      break;
    case 5:
      deleteProduct();
      break;
    case 6:
      filterProduct();
      break;
    case 7:
      console.log(` Đã thoát chương trinh`);
      break;
    default:
      console.log(` Lựa chọn không hợp lệ`);
      break;
  }
} while (choice !== 7);
