console.info("DOM EVENTS");

/*
    EVENTS != EVEN
    1. event pada javascript merepresentasikan sebuah kejadian yang terjadi didalam DOM
    2. kejadian tersebut bisa dilakukan user contoh(mouse event,keyboard event dll)
    3. ataupun bisa dilakukan secara otomatis oleh api(animasi selesai dijalankan, halaman selesai di load, dll)

    CARA 'MENDENGARKAN' (menjalankan) EVENT
    1. EVENT HANDLER
        - INLINE HTML ATTRIBUTE (lansung simpan di html line)
        - ELEMENT METHOD
    2. addEventListener()

    CATATAN PENTING
    1. JIKA MENGGUNAKAN EVENT HANDLER, JIKA MEMBUAT EVENT LAGI DIBAWAHNYA MAKA EVENT SEBELUMNYA TIDAK AKAN DIEKSEKUSI
    2. JIKA MENGGUNAKAN ADDEVENT BERBEDA DENGAN EVENT HANDLER, JIKA MENGGUNAKAN ADDEVENT FUNGSI ATAU EVENT SEBELUMNYA TETAP BISA TERJALANKAN

    MOUSE EVENT
    1. CLICK
    2. DBLCLICK
    3. MOUSEOVER
    4. MOUSEENTER
    5. MOUSEUP
    6. WHEEL
    7. MOUSELEAVE
    DLL

    KEYBOARD EVENT
    1. KEYDOWN
    2. KEYPRESS
    3. KEYUP

    VIEW EVENT
    1. RESIZE
    2. SCROLL

    FORM EVENT
    1. RESET
    2. SUBMIT
*/

 //event handler

    //inline html

     const p3 = document.querySelector(".p3");

     //kita panggil dan menyimpan function kedalam element di html
     function ubahWarna(value) {
         p3.style.backgroundColor = "blue";
     }
     function ubahWarna2(value) {
         p2.style.backgroundColor = "blue";
     }

    //element method

     const p2 = document.querySelector(".p2");
     p2.onclick = ubahWarna2;

//addEventListener
     const p4 = document.querySelector("section#b p");
     p4.addEventListener("click", function() {
         const ul = document.querySelector("section#b ul");
         const li = document.createElement("li");
         const textLi = document.createTextNode("Item Baru");
         
         li.appendChild(textLi);
         ul.appendChild(li);
     });