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
*/

//innerHTML
{
    // const judul = document.getElementById("judul");
    // judul.innerHTML = "<em>Dirubah Lewat Js</em>";//bisa masukan tag seperti pada biasanya

    // const sectionA = document.querySelector("section#a");
    // sectionA.innerHTML = "Hello World Dari JS";
}

//style.<properti>
{
    const judul = document.getElementById("judul");
    judul.style.color = "green";
    judul.style.backgroundColor = "salmon";

}

//setAttribute
{
    //hati hati menggunakan set attribute, karna akan menimpa/menganti kelas yang ada
    const judul = document.getElementsByTagName("h1")[0];
    judul.setAttribute("name", "Asman");
    console.info(judul.getAttribute("name"));//milhat isi attribute name
}

//classList
{
    const p2 = document.querySelector(".p2");
    p2.classList.add("label");//menambah

    p2.classList.remove("label");//menghapus
    
    p2.classList.toggle("label");//jika belum ada maka akan dibuatkan, dan jika sudah ada akan dihapus 
    
    p2.classList.toggle("label");//jika belum ada maka akan dibuatkan, dan jika sudah ada akan dihapus
    
    console.log(p2.classList.item(0));//akan mencari isi kelas sesuai dengna index
    
    console.log(p2.classList.contains("p2"));//akan bertanya ada apa tidak
    
    p2.classList.replace("p2", "asman");//akan mengganti
    
    console.log(p2.classList);

}

