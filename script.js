pics = document.getElementById("pics");

CreatePicsHolders();
createAapImages();


function CreatePicsHolders() {


    for (var i = 0; i < 9; i++){

        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);

    }

}
function createAapImages(){
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0 ; i < pictureHolders.length; i++){
        favorite = document.createElement("div");
        favorite.className = "favorite";
        monkeyPicture = document.createElement("img");
        monkeyPicture.src = "img/aap" + i;
        monkeyPicture.id = i;

        favorite.id = i;

        monkeyPicture.addEventListener("click", function(){
            makeFavorite(this.id)
        })

        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(monkeyPicture);
    }

}
function makeFavorite(id){

    notSoFavorite = document.getElementsByClassName("favorite");
    for (var i = 0; i < notSoFavorite.length; i++){
        notSoFavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById(id);

    favorite.style.backgroundImage = "url('img/hartje.png')";
}