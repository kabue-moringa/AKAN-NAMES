var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
var akanMale  =  ["Kwasi", "Kwadwo", "Kwabena", "Yaw", "Kofi", "Kwame"];
var dayOfTheWeek = ["sunday", "monday","tuesday", "wednesday", "thursday", "friday", "saturday"];
function results () {
    var day = parseInt( document.getElementById("day").value);
    var month = parseInt( document.getElementById("month").value);
    var year = parseInt( document.getElementById("year").value);
    var date = new Date(day + "/" + month + "/" + year);
    var gender = print();
    var day1 = date.getDay();
    var akan;

if(day < 1 || day > 31){
    alert("invalid date");

}

if(month < 1 || month > 12 ){
    alert("invalid month");

}


if(year < 1989 || year > 2050 ){
    alert("invalid year");

}
if(gender ==="female"){
    akan = akanFemale[day1];

}else{akan = akanMale[day1]
}
alert("You were born on " + dayOfTheWeek[day1] + " and your akan name is" + akan )
}
function print(){
var gender = document.getElementsByName("gender");

for(i= 0; i <gender.length; i++){
    if(gender[i].checked){
        alert(gender[i].value)
    }
}
}