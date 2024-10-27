console.clear("");

function tinhTienCap() {
  let tienCapEle = document.getElementById("tiencap").value;
  console.log(tienCapEle);

  let maKhachHangEle = document.getElementById("makhachhang").value;

  console.log(maKhachHangEle);

  let kenhCaoCapEle = document.getElementById("kenhcaocap").value;

  console.log(kenhCaoCapEle);

  let xuLyHoaDon = 0;
  let dichVuCoBan = 0;
  let kenhCaoCap = 0;

  let soKetNoiEle = document.getElementById("demo").value;

  if (tienCapEle === "Nhà dân") {
    xuLyHoaDon = 4.5;
    dichVuCoBan = 20.5;
    kenhCaoCap = kenhCaoCapEle * 7.5;
  } else if (tienCapEle === "Doanh nghiệp") {
    xuLyHoaDon = 15;
    dichVuCoBan = soKetNoiEle <= 10 ? 75 : 75 + (soKetNoiEle - 10) * 5;
    kenhCaoCap = kenhCaoCapEle * 50;
  }

  let tongTien = xuLyHoaDon + dichVuCoBan + kenhCaoCap;

  console.log(tongTien);

  let tinhTienCapEle = document.getElementById("tinhtiencap");

  tinhTienCapEle.innerHTML =
    "Mã khách hàng: " + maKhachHangEle + " ; " + "Tiền Cấp: " + tongTien + " $";
}
