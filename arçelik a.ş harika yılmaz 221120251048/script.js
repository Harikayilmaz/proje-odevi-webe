function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("active");
}

function kontrolEt(){

    let ad=document.getElementById("ad").value;
    let mesaj=document.getElementById("mesaj").value;

    if(ad==="" || mesaj===""){
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    }

    alert("Mesajınız gönderildi.");
    return true;
}
document.getElementById("contactForm").addEventListener("submit", function(event){

    let adsoyad = document.getElementById("adsoyad").value.trim();
    let mesaj = document.getElementById("mesaj").value.trim();

    if(adsoyad === "" || mesaj === ""){
        alert("Ad Soyad ve Mesaj alanları boş bırakılamaz!");
        event.preventDefault();
    }
    else{
        alert("Mesajınız başarıyla gönderildi.");
    }

});
