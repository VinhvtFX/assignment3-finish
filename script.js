// Lắng nghe sự kiện submit của form
document
  .querySelector(".form-email")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc reload trang khi submit form

    // Lấy giá trị email từ input
    let email = document.getElementById("exampleInputEmail1").value;

    // Kiểm tra định dạng email
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Kiểm tra email và hiển thị các phần tử ẩn
    if (email == "vinhvtFX27140@funix.edu.vn" && regex.test(email)) {
      document.querySelector(".hide").style.display = "block";
    }
  });

//TẠO VIEW MORE VÀ TẠO VIEW LESS.
/* let block = document.querySelectorAll(".block");

// Thiết lập cho từng lớp block.
block.forEach(function (block) {
  let listContent = block.querySelector(".list-content");
  let viewMore = block.querySelector(".view-more");
  let hideList = block.querySelector(".hide-list");

  // Duy chuyển chuột vào block.
  block.addEventListener("mouseover", function () {
    viewMore.style.display = "block";
  });
  // Duy chuyển chuột ra khỏi block.
  block.addEventListener("mouseout", function () {
    viewMore.style.display = "none";
  });

  // click chuột vào.
  viewMore.addEventListener("click", function (event) {
    event.preventDefault(); // không load lại trang.
    if (hideList.style.display === "none") {
      hideList.style.display = "block";
      viewMore.textContent = "View less";
    } else {
      hideList.style.display = "none";
      viewMore.textContent = "View more";
    }
  });
});
*/

let blocks = document.querySelectorAll(".block");

blocks.forEach(function (block) {
  let listContent = block.querySelector(".list-content");
  let viewMore = block.querySelector(".view-more");
  let hideList = block.querySelector(".hide-list");
  let isHidden = true; // Biến trạng thái ban đầu

  // Duy chuyển chuột vào block.
  block.addEventListener("mouseover", function () {
    viewMore.style.display = "inline-block";
  });

  // Duy chuyển chuột ra khỏi block.
  block.addEventListener("mouseout", function () {
    viewMore.style.display = "none";
  });

  // Click vào view more, view less.
  viewMore.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn reload trang.

    if (isHidden) {
      hideList.style.display = "block";
      viewMore.textContent = "View less";
    } else {
      hideList.style.display = "none";
      viewMore.textContent = "View more";
    }

    isHidden = !isHidden; // Đảo ngược giá trị trạng thái
  });
});
