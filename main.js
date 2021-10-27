var mouseevent="empty";
canvas.ducument.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="red";
Width_Of_Line="2";

canvas.addEventListener(mousedown,my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value
    Width_Of_Line= document.getElementById("Width_Of_Line").value
    radius= document.getElementById("radius").value
    mouseevent="mousedown";
}
canvas.addEventListener(mousemove,my_mousemove);
function my_mousemove(e){
   var current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
   var current_position_of_mouse_y= e.clientY - canvas.offsetTop;
   if(mouseevent == mousedown){
console.log("Current_Position_X And Y coordinate=" )
console.log("x =  " "current_position_of_mouse_x + " , Y="+current_position_of_mouse_y");
ctx.beginPath();
ctx.strokestyle=color;
ctxlineWidth= Width_Of_Line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2 *Math.PI);
ctx.stroke;
   }
  
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    Mouseevent="mouseleave";
}
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
