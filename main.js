function getEle(id) {
  return document.getElementById(id);
}

// Bài tập 1:

getEle("btnTinhTong").onclick = function () {
  //input:
  var number = +getEle("nhapSo_1").value;

  //ouput:
  var ketQua = 0;

  //Xử lý
  for (var soHang = 1; soHang <= number; soHang++) {
    if (number < 10000) {
      ketQua += soHang;
    } else {
      alert("vui long nhap lai so");
      break;
    }
  }
  getEle("ketQua1").innerHTML = ketQua;
};

//Bài tập 2:

getEle("tinhTong2").onclick = function () {
  //input:
  var number = +getEle("nhapSo_2").value;

  //ouput:
  var ketQua = 0;

  //Xử lý
  for (var x = 1; x <= number; x++) {
    ketQua = ketQua + x * x;
  }
  getEle("ketQua2").innerHTML = ketQua;
};

//Bài tập 3:

getEle("btnTinh").onclick = function () {
  //input:
  var number = +getEle("nhapSo_3").value;

  //output
  var giaiThua = 1;

  //xu ly
  for (var i = 1; i <= number; i++) {
    giaiThua *= i;
  }
  getEle("ketQua3").innerHTML = giaiThua;
};

//Bài tập 4:
getEle("btnClick").onclick = function () {
  //input
  var number = +getEle("nhapSo_4").value;

  //output:
  var ketQua = "";

  //xy ly
  for (var i = 1; i <= number; i++) {
    var divRed = "<div class='bg-danger text-white text-center'><div/>" + i;
    var divBlue = "<div class='bg-primary text-white text-center'><div/>" + i;
    if (i % 2 === 0) {
      ketQua += divRed;
    } else {
      ketQua += divBlue;
    }
  }
  getEle("ketQua4").innerHTML = ketQua;
};

//Bài tập 5:

getEle("btnKiemTraSNT").onclick = function () {
  //input
  var number = +getEle("nhapSo_5").value;

  //ouput:
  var ketQua = "";

  //xu ly
  for (var i = 2; i <= number; i++) {
    var checkSNT = kiemTraSNT(i);
    if (checkSNT) {
      ketQua += i + ", ";
    }
  }
  getEle("ketQua5").innerHTML = ketQua;
};

function kiemTraSNT(number) {
  var checkSNT = true;
  for (var n = 2; n <= Math.sqrt(number); n++) {
    if (number % n === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}
