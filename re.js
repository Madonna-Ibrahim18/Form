for(let i=1;i<=31;i++){
day.innerHTML+=`<option>${i}</option>;` 
}

let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

for(let m of months){
month.innerHTML+= `<option>${m}</option>` ;
}

for(let y=1980;y<=2026;y++){
year.innerHTML+= `<option>${y}</option> `;
}

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();

let first=document.getElementById("firstName").value;
let last=document.getElementById("lastName").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let pass=document.getElementById("password").value;
let confirm=document.getElementById("confirm").value;

document.querySelectorAll("small").forEach(x=>x.innerHTML="");

if(first.length<2){
firstError.innerHTML="Please enter valid first name";
}

if(last.length<2){
lastError.innerHTML="Please enter valid last name";
}

if(!email.endsWith("@gmail.com")){
emailError.innerHTML="Please enter Gmail";
}

if(phone.length!==11){
phoneError.innerHTML="Phone must be 11 digits";
}

let regex=/^(?=.[A-Za-z])(?=.\d).{8,}$/;

if(!regex.test(pass)){
passError.innerHTML="Password must contain letters, numbers and 8 characters";
}

if(pass!==confirm){
confirmError.innerHTML="Password doesn't match";
}

});