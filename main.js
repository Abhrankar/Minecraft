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
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });

        canvas.add(blockImageObject);
        
    });

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("p+Shift");
        blockImageWidth = blockImageWidth+10;
        blockImageHeight = blockImageHeight+10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("m+Shift");
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (keyPressed == "37") {
        left();
    }

    if (keyPressed == "38") {
        up();
    }

    if (keyPressed == "40") {
        down();
    }

    if (keyPressed == "39") {
        right();
    }

    if (keyPressed == "84") {
        newImg("trunk.jpg");
    }

    if (keyPressed == "68") {
        newImg("dark_green.png");
    }

    if (keyPressed == "76") {
        newImg("light_green.png");
    }

    if (keyPressed == "71") {
        newImg("ground.png");
    }

    if (keyPressed == "87") {
        newImg("wall.jpg");
    }

    if (keyPressed == "89") {
        newImg("yellow_wall.png");
    }

    if (keyPressed == "82") {
        newImg("roof.jpg");
    }

    if (keyPressed == "67") {
        newImg("cloud.jpg");
    }

    if (keyPressed == "85") {
        newImg("unique.png"); 
    }
}

function left() {
    if (playerX >= 0) {
        playerX = playerX-blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("left");
    }
    
}

function up() {
    if (playerY >= 0) {
        playerY = playerY-blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("up");  
    }
    
}

function down() {
    if (playerY <= 500) {
        playerY = playerY+blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("down");
    }
    
}

function right() {
    if (playerX <= 900) {
        playerX = playerX+blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
        console.log("right"); 
    }
    
}