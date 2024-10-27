console.clear("");

function tinhTienDien() {
  let nhapHoTenEle = document.getElementById("nhaphoten").value;

  console.log(nhapHoTenEle);

  let nhapSoKWEle = Number(document.getElementById("nhapsokw").value);

  console.log(nhapSoKWEle);

  let tienDien = 0;

  if (isNaN(nhapSoKWEle) || nhapSoKWEle < 0) {
    alert("Vui lòng nhập số KW hợp lệ!");
    return;
  } else if (nhapSoKWEle <= 50) {
    tienDien = nhapSoKWEle * 500;
  } else if (nhapSoKWEle <= 100) {
    tienDien = 50 * 500 + (nhapSoKWEle - 50) * 650;
  } else if (nhapSoKWEle <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (nhapSoKWEle - 100) * 850;
  } else if (nhapSoKWEle <= 200) {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (nhapSoKWEle - 150) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (nhapSoKWEle - 200) * 1300;
  }

  let tongTienDienEle = document.getElementById("tongtiendien");

  tongTienDienEle.innerHTML =
    "Họ Tên : " + nhapHoTenEle + " ; Tiền Điện : " + tienDien + " VND";
}
