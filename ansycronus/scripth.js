let nama = document.getElementById("nama");
let id = document.getElementById("id");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let image = document.createElement("img");
function ambil (){
    fetch("https://api.github.com/users/mhafidu")
    .then((response) => response.json())
    .then((result) => {
        
        nama.innerHTML = result.login;
        id.innerHTML = result.id;
        followers.innerHTML = result.followers;
        following.innerHTML = result.following;
        
    });
}
ambil();
console.log(nama);