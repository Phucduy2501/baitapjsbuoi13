let ketqua = document.getElementById("ketqua");

function tinhTong() {
  console.log("hello");

  let diemChuanEle = Number(document.getElementById("diemchuan").value);

  console.log(diemChuanEle);

  let khuVucEle = document.getElementById("khuvuc").value;

  let khuVuc;

  if (khuVucEle === "A") {
    khuVuc = 2;
  } else if (khuVucEle === "B") {
    khuVuc = 1;
  } else if (khuVucEle === "C") {
    khuVuc = 0.5;
  } else {
    khuVuc = 0;
  }

  console.log(khuVuc);

  let doiTuongEle = document.getElementById("doituong").value;

  console.log(doiTuongEle);

  let doiTuong;
  if (doiTuongEle === "1") {
    doiTuong = 2.5;
  } else if (doiTuongEle === "2") {
    doiTuong = 1.5;
  } else if (doiTuongEle === "3") {
    doiTuong = 1;
  } else {
    doiTuong = 0;
  }

  console.log(doiTuong);

  let monThu1Ele = Number(document.getElementById("monthu1").value);

  console.log(monThu1Ele);

  let monThu2Ele = Number(document.getElementById("monthu2").value);

  console.log(monThu2Ele);

  let monThu3Ele = Number(document.getElementById("monthu3").value);

  console.log(monThu3Ele);

  let ketQua = khuVuc + doiTuong + monThu1Ele + monThu2Ele + monThu3Ele;

  console.log(ketQua);

  let tongEle = document.getElementById("tong");

  tongEle.innerText = "Tổng:" + ketQua;

  let ketQuaEle = document.getElementById("ketqua");
  if (ketQua > diemChuanEle) {
    ketQuaEle.innerText = "kết quả: bạn đã đậu";
  } else {
    ketQuaEle.innerText = "kết quả: bạn đã rớt";
  }
}
