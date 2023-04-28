function renderTime() {
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "AM";
if( hr > 12 ) {
    hr -= 12;
    ampm = "PM";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
document.getElementById('clockDisplay').innerHTML = day + " " + month + " " + date + " " + hr + ":" + min  + " " + ampm + " ";
setTimeout(renderTime, 1000);

}