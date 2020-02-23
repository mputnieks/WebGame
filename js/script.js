let divs = document.createElement("DIV");

function startGame(){
    console.log("iet");
    divs.setAttribute("class","tile");
    
    let l = 3;
    for (let i = 0; i < l*l; i++) {
        makeTile();
    }
    
    document.getElementById("forma").appendChild(divs);
}

function makeTile(){
    let tile = document.createElement("DIV");
    tile.style = "text-align: center";
    tile.innerHTML = "tile";
    tile.type = "button";
    tile.onclick=()=>{
        tile.remove();
    };
    divs.appendChild(tile);
}
