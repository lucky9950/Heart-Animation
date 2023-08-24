const bodyE1 = document.querySelector("body");

function infinity()
{
   const xPos = Math.random() * window.innerWidth;
   const yPos = Math.random() * 999;
   const spanE1 = document.createElement("span");
   spanE1.style.left =xPos + "px";
   spanE1.style.top = yPos + "px";
   const size = Math.random()*100;
   spanE1.style.width = size + "px";
   spanE1.style.height = size + "px";
   bodyE1.appendChild(spanE1);
   setTimeout(()=>{
    spanE1.remove();
   },3000);
};

setInterval(() => {
   infinity();
}, 30);