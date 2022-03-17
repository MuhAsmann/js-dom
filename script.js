const tombol = document.getElementById("tombol");

// const body = document.body;

tombol.onclick = function () {
    // document.body.style.backgroundColor = "lightblue";
    // document.body.setAttribute("class","warna-biru");
    document.body.classList.toggle("warna-biru");
}