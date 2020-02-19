function makeTiles(){
    let divs = document.createElement("DIV"); 
    divs.setAttribute("class","tile");
    let tile = document.createElement("DIV");
    tile.style = "text-align: center";
    tile.value = "tile";
    tile.type = "button";
    tile.onclick=()=>{
        tile.parentNode.remove();
    }
    divs.appendChild(tile);
    document.getElementById("forma").appendChild(divs);
}