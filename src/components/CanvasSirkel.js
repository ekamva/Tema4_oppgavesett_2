import React from "react"

function CanvasSirkel(){
    
    return(        
        <div>
            <canvas className ="canvasSirkel"></canvas>
        </div>    
    )
}


const canSir = document.getElementById("circleCanvas");
const ctx = canSir.getContext("2d");


ctx.arc(120, 140, 100, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

export default CanvasSirkel