// time.js : Hiện hệ thống thời gian. 
// Phương thức getElementById trả về phần tử có thuộc tính ID là giá trị được chỉ định.
var span = document.getElementById('time');

function time() {
  var format ='';
  var d = new Date(); //khai báo thư viện xử lí thời gian 
  var s = d.getSeconds(); // lấy ra số giây
  var m = d.getMinutes(); // lấy ra số phút 
  var h = d.getHours(); // lấy ra số giờ
  // nếu h > 12
 
  
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);
//setInterval là hàm thiết lập độ trễ cho các hàm được thực hiện lặp đi lặp lại