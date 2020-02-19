function maketiles(){
    let i = document.getElementByClassName("tile").length;
    let divs = document.createElement("DIV"); 
    divs.setAttribute("class","tile");
    divs.innerHTML = (i+1)+")";
    let tile = document.createElement("DIV");
    tile.style = "text-align: center";
}