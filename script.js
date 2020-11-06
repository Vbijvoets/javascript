pics = document.getElementById("pics");

CreatePicsHolders();
createAapImages();


function CreatePicsHolders() {


    for (var i = 0; i < 9; i++){

        pictureHolder = document.createElement("div");
        pictureHolder.className = "aappicture";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);

    }

}
function createAapImages(){
    pictureHolders = document.getElementsByClassName("aappicture");
    for (var i = 0 ; i < pictureHolders.length; i++){
        monkeyPicture = document.createElement("img");
        monkeyPicture.src = "../img/aap" + i + ".jpeg";
    }

}