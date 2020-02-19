function makeTiles(){
    console.log("iet")
    let divs = document.createElement("DIV");
    divs.setAttribute("class","tile");
    let tile = document.createElement("DIV");
    tile.style = "text-align: center";
    tile.innerHTML = "tile";
    tile.type = "button";
    tile.onclick=()=>{
        tile.parentNode.remove();
    }
    divs.appendChild(tile);
    document.getElementById("forma").appendChild(divs);
}