console.info("DOM SELECTION METHOD");

/*

getElementById() = element
getElementByTagName() = HTML Collection
getElementByClassName() = HTML Collection
querySelector() = element
querySelectorAll() = nodeList

*/
{
    //by Id
    let nama = "Muhammad Asman"
    let judul = document.getElementById("judul");
    judul.style.color = "red";//merubah style
    judul.style.backgroundColor = "green"; // merubah style
    judul.innerHTML = `Haloo ${nama}`; //merubah isi tulisan
    console.info(judul);
}

{
    //byTagName
    let p = document.getElementsByTagName("p");

    //jika array gunakan index yang ingin di rubah style
    p[1].style.backgroundColor = "green";
    console.info(p);//htmlCollection

    //contoh jika ingin mengambil langsung indexnya
    const h1 = document.getElementsByTagName("h1")[0];
    console.info(p);//htmlCollection
}

{
    //byClassName
    const p1 = document.getElementsByClassName("p1")[0];
    p1.innerHTML = "ini dirubah dari js"
    console.info(p1);//htmlCollection
}

{
    // querySelector, hanya menyeleksi yang pertama dia temukan
    const p4 = document.querySelector("#b p");
    p4.style.color = "green";
    p4.style.fontSize = "30px";
    console.info(p4);

    const li2 = document.querySelector("section#b ul li:nth-child(2)");
    li2.style.color = "blue";
console.info(li2);
}

{
    //querySelectorAll
    let p = document.querySelectorAll("p");
    // p[1].style.color = "blue";
    //jika ingin mewarnai semua bisa gunakan for
    for(let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "blue"
    }
    console.info(p);
}

//mengubah node root
{
    const sectionB = document.getElementById("b");
    const p4 = sectionB.getElementsByTagName("p")[0];
    p4.style.backgroundColor = "yellow";
    console.info(p4)
}