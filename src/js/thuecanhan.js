console.clear("");

function tinhTienThue() {
  //   console.log("hello");

  let nhapHoTenElec = document.getElementById("nhap-ho-ten").value;

  console.log(nhapHoTenElec);

  let thuNhapNamEle = document.getElementById("thunhapnam").value;

  console.log(thuNhapNamEle);

  let nguoiPhuThuocEle = document.getElementById("nguoiphuthuoc").value;

  console.log(nguoiPhuThuocEle);

  const thuNhapChiuThue = thuNhapNamEle - 4 - nguoiPhuThuocEle * 1.6;

  console.log(thuNhapChiuThue);

  let thueSuat = 0;
  if (thuNhapChiuThue < 0) {
    alert("Tiền thu nhập chưa đủ để thuê phí");
  } else if (thuNhapChiuThue < 60) {
    thueSuat = 5;
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue < 120) {
    thueSuat = 10;
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue < 210) {
    thueSuat = 15;
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue < 384) {
    thueSuat = 20;
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue < 624) {
    thueSuat = 25;
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue < 960) {
    thueSuat = 30;
  } else if (thuNhapChiuThue > 960) {
    thueSuat = 35;
  }

  const thuNhapCaNhapEle = (thuNhapChiuThue * thueSuat) / 100;

  console.log(thuNhapCaNhapEle);

  let tongThueThuNhapEle = document.getElementById("tongthuethunhap");

  tongThueThuNhapEle.innerHTML =
    "Họ tên: " +
    nhapHoTenElec +
    " ; " +
    " Tiền thuế thu nhập cá nhân: " +
    thuNhapCaNhapEle +
    " Triệu ";
}
