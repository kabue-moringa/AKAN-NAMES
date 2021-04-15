var dayNames = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function results () {
    var day = parseInt( document.getElementById("day").value);
    var month = parseInt( document.getElementById("month").value);
    var year = parseInt( document.getElementById("year").value);
    var date = new Date(day + "/" + month + "/" + year);
    var gender = document.getElementById("gender").value;
    var day1 = date.getDay();

if(day < 1 || day > 31){
    alert("invalid date");

}

if(month < 1 || month > 12 ){
    alert("invalid month");

}