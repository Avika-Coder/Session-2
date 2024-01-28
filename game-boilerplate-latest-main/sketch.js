var bg_img;
var playButton,aboutButton;
var gameState="wait";

function preload(){
    bg_img = loadImage("assets/Jungle.gif");
    bg1=loadImage("assets/background-1.jpg")

}


function setup(){
    createCanvas(850,825)
    playButton = createImg("assets/play_button.png");
    playButton.position(440, 400);
    playButton.size(550, 600);
    playButton.hide();

    aboutButton = createImg("assets/About_button.png");
    aboutButton.position(-140, 400);
    aboutButton.size(550, 600);
    aboutButton.hide();

}

function draw(){
    if (gameState=="wait"){
        background(bg_img)
        playButton.show()
        aboutButton.show()

        aboutButton.mousePressed(() => {
            playButton.hide();
            aboutButton.hide();
            gameState = "about";
        })

        playButton.mousePressed(() => {
            playButton.hide();
            aboutButton.hide();
            gameState = "play";
        })
    }

    if (gameState=="about"){
        aboutGame();
        
    }

    if (gameState=="play"){
        background(bg1);
    }


}

function aboutGame() {
    swal({
        title: "About Game = How to Play!!",
        text: "Welcome to the jungle!. To save the animals there you have to shoot the enemy. \n Use Arrow keys to move and Space Bar to jump!",
        textAlign: "center",
        imageUrl: "assets/Jungle.gif",
        imageSize: "250x250",
        confirmButtonText: "Lets save the wilderness",
        confirmButtonColor: "brown",
    },
    function () {
        gameState = "wait"
    }
)
}
