let divs;
let l = 3;                                  //l ir speles laukuma malas garums (blokos)
let row;

function startGame(){                       // izsauc šo, kad uzspiež pogu start
    l = document.getElementById("quantity").value;
    divs = document.createElement("DIV");
        while (document.getElementById("forma").hasChildNodes()) {
            console.log("iet");
            document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
        }
        divs.setAttribute("class","tile");
        for (let i = 0; i < l; i++) {
            makeRow();
        }   

        document.getElementById("forma").appendChild(divs);
}

function makeRow(){                         // izveido jaunu rindu
    row = document.createElement("DIV");
    for(let i = 0; i<l ;i++){
        makeTile();
    }
    divs.appendChild(row);
}

function makeTile(){                        // izveido jaunu bloku (tile)
    let tile = document.createElement("DIV");
    tile.style = "text-align: center; display: inline-block; padding: 50px;  border-style: solid; border-color: black; border-width: 2px;";
    //tile.innerHTML = "tile";
    tile.onclick=()=>{
        //tile.innerHTML = " ";
        tile.src = "images/f1.jpg";
    };
    row.appendChild(tile);
}