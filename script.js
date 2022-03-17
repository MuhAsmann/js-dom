console.info("DOM MANIPULATION");

/*
1. Manipulasi Element
    -element.innerHTML = merubah isi
    -element.style.<property css> = style
    -element.setAttribute()
        -setAttribute()
        -getAttribute()
        -removeAttribute() 
    -element.classList
        -classList.add()
        -classList.remove()
        -classList.toggle() jika belum ada maka akan dibuatkan, dan jika sudah ada akan dihapus
        -classList.item() untuk mengetahui kelas tertentu 
        -classList.contains() ngecek dalam sebuah element punya apa tidak kelas terntu
        -classList.replace() mengganti
    -.....
2. Manipulasi Node
    - document.createElement()
    - document.createTextNode()
    - node.appendChild()
    - node.insertBefore()
    - parentNode.removeChild()
    - parentNode.replaceChild()
    -......
*/

//contoh menambahkan paragraf baru
{
    const pBaru = document.createElement("p");//membuat paragraf baru

    //membuat isi paragraf
    const textPBaru = document.createTextNode("Paragraf Baru Dari Js");

    //simpan tulisan ke dalam paragraf
    pBaru.appendChild(textPBaru);

    //simpan di akhir section a
    const sectionA = document.getElementById("a");

    // sectionA.akan_dimasukan_nilai(pBaru)
    // pBaru akan disimpan di akhir sectionA
    sectionA.appendChild(pBaru);
    pBaru.style.backgroundColor = "Green"; 

    
}
//menggunakan insertBefore
{
    //contoh lain
    const liBaru = document.createElement("li");
    const textLi = document.createTextNode("Item dari js");
    liBaru.appendChild(textLi);

    const ul = document.querySelector("section#b ul");
    const liBefore = ul.querySelector("li:nth-child(2)");
    //element parent.insertBefore (yang ingin dimasukan, element sebelum)
    ul.insertBefore(liBaru, liBefore);
    liBaru.style.backgroundColor = "Green"; 

}


//remove
{
    const sectionA = document.getElementById("a");
    const link = document.getElementsByTagName("a")[0];
    // element parent.removechild(apa yang dihapsus)
    sectionA.removeChild(link);

}

//replace
{
    const sectionB = document.getElementById("b");
    const p4 = sectionB.querySelector("p");//pasti yang diambil yang pertama dari sectionB karna dibatasi scopenya

    const h2Baru = document.createElement("h2");
    const textH2 = document.createTextNode("Judul Dari Js");

    h2Baru.appendChild(textH2);

    // element parent.replaceChild(element baru, element yang diganti)
    sectionB.replaceChild(h2Baru , p4);

    h2Baru.style.backgroundColor = "Green"; 

}