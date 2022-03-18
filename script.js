const tombol = document.getElementById("tombol");

// const body = document.body;

tombol.onclick = function () {
    // document.body.style.backgroundColor = "lightblue";
    // document.body.setAttribute("class","warna-biru");
    document.body.classList.toggle("warna-biru");
}

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("acak warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tombol.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sBiru = document.querySelector("input[name=sBiru]");
const sHijau = document.querySelector("input[name=sHijau]");

sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});
sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});
sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

document.body.addEventListener("mousemove", function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const YPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = "rgb("+ xPos +","+ YPos +",100)";
})