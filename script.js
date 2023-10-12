$(document).ready(function () {

    const names = [
        "juju_1.jpg",
        "juju_movie.jpg",
        "juju_2_1.jpg",
        "juju_2_2.jpg",
    ];

    //gallery-list
    const list = document.getElementById("gallery-list");
    //popUpSection
    const popUpSection = document.getElementById("popUpSection");

    for (let i = 0; i < names.length; i++) {
        //gallery-list
        const liGallery = document.createElement("li");
        const aGallery = document.createElement("a");
        const imgGallery = document.createElement("img");

        //li
        liGallery.className = "col-1 gallery-link";
        liGallery.id = `gal-${i + 1}`;


        //Img
        imgGallery.src = `img/${names[i]}`;
        imgGallery.alt = `jujutsu_kaisen_${i + 1}`;

        //a
        aGallery.href = "#";


        aGallery.appendChild(imgGallery);
        liGallery.appendChild(aGallery);
        list.appendChild(liGallery);

        //popUpSection
        const section = document.createElement("section");
        const div = document.createElement("div");
        const a = document.createElement("a");
        const img = document.createElement("img");

        //section
        section.className = "popUp"
        section.id = `img-${i + 1}`
        console.log(section);

        //div
        div.className = "popUpImg"

        //a
        a.className = "close"
        a.innerHTML = "X"

        //img
        img.src = `img/${names[i]}`
        img.alt = `jujutsu_kaisen_${i + 1}`;


        div.appendChild(a);
        div.appendChild(img);
        section.appendChild(div);
        popUpSection.appendChild(section);
        console.log(popUpSection)
    }


    $(".popUp").hide();

    // Iterate over elements with the class "gallery-link"
    $('.gallery-link').each(function (index) {

        // Get the gallery number from the element's ID
        let galleryNumber = index + 1;

        // Define the selector for the corresponding pop-up image element
        let popupSelector = '#img-' + galleryNumber;

        // Assign the click event handler
        $(this).click(function () {
            $(popupSelector).slideDown(500);
        });
    });

    $('.close').click(function () {
        $(".popUp").slideUp(500);
    })

});




