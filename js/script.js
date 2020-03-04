let divs;
let l = 3;                                  //l ir speles laukuma malas garums (blokos)
let row;
let m1 = [[]];                                     //Masivs 1 (Galvenais)
let m2 = [];                                     //Masivs 2
let m3 = [];                                     //Masivs 3

function startGame(){                       // izsauc šo, kad uzspiež pogu start
    l = document.getElementById("quantity").value;
    divs = document.createElement("DIV");
    if(l>1 && l<=10){
        while (document.getElementById("forma").hasChildNodes()) {
            console.log("iet");
            document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
        }
        while (m1.length > 0){
            m1.pop();
        }
        divs.setAttribute("class","tile");
        for (let i = 0; i < l; i++) {
            makeRow(i);
        } 

        document.getElementById("forma").appendChild(divs);
        //te saliek tile vertibas...
    }
    else{
        while (document.getElementById("forma").hasChildNodes()) {
            console.log("iet");
            document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
        }
        divs.innerHTML = "Ievadi skaitli no divi līdz desmit!";
        divs.style = "color: red; font-size: 20px;";
        document.getElementById("forma").appendChild(divs);
    }
}

function makeRow(e){                         // izveido jaunu rindu
    row = document.createElement("div");
    for(let i = 0; i<l ;i++){
        let tile = document.createElement("DIV");
        tile.style = "text-align: center; display: inline-block; padding: 50px;  border-style: solid; border-color: black; border-width: 2px;";
        tile.onclick=()=>{
            onClick(tile);
        };
        m1[e][i] = tile;
        row.appendChild(tile);
    }
    divs.appendChild(row);
}

function onClick (tile){
    //tile.innerHTML = " ";
    tile.src = "images/f1.jpg";
}