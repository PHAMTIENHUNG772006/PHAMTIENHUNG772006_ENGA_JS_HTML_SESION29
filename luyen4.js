let job = [];
let choice;
function inputJobs() {
  let inputNamejob = prompt(` Mời bạn nhập tên công việc : `);
  let inputDescription = prompt(` Mời bạn nhập mô tả công việc :`);
  let timeStartJob = prompt(` Mời bạn nhập thời gian bắt đầu công việc :`);
  let isAvailableInput = prompt(` Mời bạn nhập trạng thái công việc (true/false)`).toLowerCase() === "true";// đảy kiểu dữ liệu nhập vào sang boolean

  let NewArrJob = {
    id: Math.ceil(Math.random() * 1000),
    nameJob: inputNamejob,
    description: inputDescription,
    isAvaible: isAvailableInput,
    timeStartJob,
  };
  job.push(NewArrJob);
}
function displayJob() {
  console.log(` Bảng công việc của bạn `);

  console.table(job);
}
function updateIsvaibleById() {
  let indexUpdate = +prompt(` Mời bạn nhập id để cần cập nhật : `);
  let findIdJob = job.findIndex((job) => job.id === indexUpdate);

  if (findIdJob !== -1) {
    let inputUpdateIvaible = prompt(` Mời bạn nhập trạng thái mới :`);
    job[findIdJob].isAvaible = inputUpdateIvaible;
    console.log(` Cập nhận trạng thái thành công`);
  } else {
    console.log(` không tìm thấy id cần tìm`);
  }
}
function filterIsvailable() {
    let trueIsAvaible = job.filter((task) => task.isAvaible);
    let falseIsAvaible = job.filter((task) => !task.isAvaible);
  
    console.log(`Số công việc đã hoàn thành:`);
    console.table(trueIsAvaible);
    console.log(`Số công việc chưa hoàn thành:`);
    console.table(falseIsAvaible);
  }
  
  function sortIsvailable() {
    job.sort((a, b) => b.isAvaible - a.isAvaible);
    console.log(`Danh sách công việc sau khi sắp xếp:`);
    console.table(job);
  }
do {
  choice = +prompt(` Mời bạn nhập lựa chọn`);
  console.log(`
        1. Thêm công việc mới.
        2. Hiển thị tất cả các công việc.
        3. Cập nhật trạng thái công việc theo id.
        4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5. Sắp xếp các công việc theo trạng thái công việc.
        6. Thoát.
        `);

  switch (choice) {
    case 1:
      inputJobs();
      break;
    case 2:
      displayJob();
      break;
    case 3:
      updateIsvaibleById();
      break;
    case 4:
        filterIsvailable();
      break;
    case 5:
        sortIsvailable();
      break;
    case 6:
      break;
    default:
      console.log(` Lựa chọn không hợp lệ`);

      break;
  }
} while (choice !== 6);
