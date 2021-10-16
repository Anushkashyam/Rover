canvas =document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_imagea_array=["bg1.jpg", "nasa_image_1.jpg", "nasa_image_3.jpg"];
random_numder=Math.floor(Math.random()*4);
console.log(random_numder);
background_image=nasa_mars_imagea_array[random_numder];
console.log("background_image= " + background_image);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src =background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload=uploadrover;
rover_imgTag.src =rover_image;
}
function uploadrover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("uper key is pressed");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down key is pressed");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left key is pressed");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right key is pressed");
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed" + rover_x + "and y= " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed" + rover_x + "and y= " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed" + rover_x + "and y= " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x <=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed" + rover_x +"and y= " +rover_y);
        uploadBackground();
        uploadrover();
    }
}