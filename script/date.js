// hàm xử lí ngày tháng năm
var show_date = document.getElementById('day');

// tháng
var thang = ["tháng một", "tháng hai", "tháng ba", "tháng tư", "tháng năm", "tháng sáu", "tháng bảy", "tháng tám", "tháng chín", "tháng mười", "tháng mười một", "tháng mười hai "
];
// thứ
var thu = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

function checkTime() {
    var date = new Date();
var day = date.getDate();
  var month = thang[date.getMonth()];
  var weekday = thu[date.getDay()];
  var year = date.getFullYear();
  show_date.innerHTML =  weekday+ " " + day +" " +month+ "  " + year;
}
setInterval(checkTime(), 1000);