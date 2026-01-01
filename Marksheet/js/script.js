let s_name = prompt("Enter Your Name:");
let div = prompt("Enter Division:");
let semester = prompt("Enter Semester:");
let enrollment_no = prompt("Enter Enrollment No:");
let seat_no = prompt("Enter Seat No:");
let sub_1 = parseInt(prompt("Enter Marks Of Subject 1:"));
let sub_2 = parseInt(prompt("Enter Marks Of Subject 2:"));
let sub_3 = parseInt(prompt("Enter Marks Of Subject 3:"));
let sub_4 = parseInt(prompt("Enter Marks Of Subject 4:"));
let sub_5 = parseInt(prompt("Enter Marks Of Subject 5:"));


let total = sub_1 + sub_2 + sub_3 + sub_4 + sub_5;
let average = total / 5;
let percentage = (total / 500 )* 100;

let grade;
let result;
if (percentage >= 90) {
    result = "PASS";
    grade = "A+";
}
else if (percentage >= 80) {
    result = "PASS";
    grade = "A";
}
else if (percentage >= 70) {
    result = "PASS";
    grade = "B";
}
else if (percentage >= 55) {
    result = "PASS";
    grade = "C";
}
else if (percentage >= 45) {
    result = "PASS";
    grade = "D";
}
else if (percentage >= 35) {
    result = "PASS";
    grade = "PASS";
}
else {
    result = "FAIL";
    grade = "FAIL";
}

document.getElementById('s_name').innerText = s_name;
document.getElementById('div').innerText = div;
document.getElementById('semester').innerText = semester;
document.getElementById('enrollment_no').innerText = enrollment_no;
document.getElementById('seat_no').innerText = seat_no;
document.getElementById('sub_1').innerText = sub_1;
document.getElementById('sub_2').innerText = sub_2;
document.getElementById('sub_3').innerText = sub_3;
document.getElementById('sub_4').innerText = sub_4;
document.getElementById('sub_5').innerText = sub_5;
document.getElementById('total').innerText = total;
document.getElementById('average').innerText = average;
document.getElementById('percentage').innerText = percentage;
document.getElementById('grade').innerText = grade;
document.getElementById('result').innerText = result;


