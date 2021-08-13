// Tambahkan kode JavaScript kalian di file ini
function getFormData() {
    let obj = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        city: document.getElementById("city").value,
        zipCode: document.getElementById("zip-code").value,
        check: document.getElementById("check").checked
    }
    return obj;
}
function isNumber(string){
    return !isNaN(string)
}
function isLength(string, integer) {
    return string.length == integer;
}
function checkboxIsChecked() {
    return check.checked;
}
function validateFormData(objek) {
    let a = objek
    // let b = a.push(obj)
    // return console.log(a)
    if (isLength(getFormData()) == true && isNumber(a.zipCode) == true && checkboxIsChecked() == true) {
        return true;
    } else {
        return false;
    }
}
let demo = document.getElementById("submit-form-button");
demo.onclick = submit();
demo.onclick = massage();
function massage(){
    alert("TERIMAKASIH");
}
function submit (){
    let a = document.getElementById("warning");
   if(validateFormData(getFormData()) == false){
       a.innerHTML="Periksa form anda sekali lagi";
   }
   else{
        a.innerHTML="";
   }
}
function resetForm() {
    document.forms[0].reset();
}