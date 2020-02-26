let divs = document.createElement("DIV");
let l = 3;                                  //l ir speles laukuma malas garums (blokos)
let row;

function startGame(){                       // izsauc šo, kad uzspiež pogu start
    divs.setAttribute("class","tile");
    for (let i = 0; i < l; i++) {
        makeRow();
    }
    
//    while (document.getElementById("forma").hasChildNodes()) {
//        console.log("iet");
//        document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
//    }
    
    document.getElementById("forma").appendChild(divs);
}

function makeRow(){                         // izveido jaunu rindu
    row = document.createElement("img");
    for(let i = 0; i<l ;i++){
        makeTile();
    }
    divs.appendChild(row);
}

function makeTile(){                        // izveido jaunu bloku (tile)
    var tile = document.createElement("img");
    img.src = "images/f1.jpg";
    //tile.style = "text-align: center; display: inline-block; padding: 10px; background-color: #f4511e; border-style: solid; border-color: black; border-width: 2px;";
    //tile.innerHTML = "tile";
    tile.onclick=()=>{
        img.src='images/f1a.jpg';
        //tile.innerHTML = " ";
    };
    row.appendChild(tile);
}
