canvas = new fabric.Canvas("myCanvas");
playerX = 10;
playerY = 10;
blockImageWidth = 30;
blockImageHeight = 30;
playerObject = "";
blockImageObject = "";
function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });

        canvas.add(playerObject);

    });

}

function newImg(getImg) {
    fabric.Image.fromURL(getImg, function(Img)
    {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(150);
        blockImageObject.scaleToHeight(150);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });

        canvas.add(blockImageObject);
        
    });

}