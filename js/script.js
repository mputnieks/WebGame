let divs;
let l = 4;                                  //l ir speles laukuma malas garums (blokos)
let row;
let m1 = [];                                                                    //Masivs 1 (Galvenais)
let m2 = [];                                                                    //Masivs 2
let m3 = [];                          						//Masivs 3                                                                 
let c1 = -1;
let t2 = 0;
let count = 0;
let active = 0;

function startGame(){                       // izsauc šo, kad uzspiež pogu start
    l = document.getElementById("quantity").value;
    divs = document.createElement("DIV");
    if(l>1 && l<=10 && l%2 !== 1){
        while (document.getElementById("forma").hasChildNodes()) {
            document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
        }
        while (m1.length > 0){
            m1.pop();
        }
        while (m2.length > 0){
            m2.pop();
        }
        while (m3.length > 0){
            m3.pop();
        }
        rand();
        divs.setAttribute("class","tile");
        for (let i = 0; i < l; i++) {
            makeRow(i);
        }
        document.getElementById("forma").appendChild(divs);
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
        let tile = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
        tile.classList.add("tile_style");
        p.classList.add("p_style");
        tile.id = (e*l+i).toString();
        tile.onclick=()=>{
            console.log("click!");
            tileFunction(tile);
        };
        tile.appendChild(p);
        row.appendChild(tile);
    }
    divs.appendChild(row);
}

function tileFunction (t){
    if (c1 === -1 && m1[t.id].done !== 1 && active !== 1){
        t.firstChild.innerHTML = m1[t.id].html;
        c1 = m1[t.id].nr;
        t2 = t;
    }
    else if (m1[t.id].done !== 1 && active !== 1){
        t.firstChild.innerHTML = m1[t.id].html;
        if(c1 !== m1[t.id].nr){     // ja abas nav vienadas
            t.style = "background-color: red;";
            t2.style = "background-color: red;";
            active = 1;
            setTimeout(function(){ t.firstChild.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"; t2.firstChild.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"; t2.style = "background-color: lightgrey;"; t.style = "background-color: lightgrey;"; active = 0; }, 1000);
        }
        else if (t2 !== t){         // ja abas ir vienadas
            m1[t.id].done = 1;
            m1[t2.id].done = 1;
            t.style = "background-color: green;";
            t2.style = "background-color: green;";
            count = count + 2;
            if(count === l*l){
                let d = document.createElement("P");
                d.classList.add("uzvara");
                d.innerHTML = "Tu uzvarēji!";
                document.getElementById("forma").appendChild(d);
                count = 0;
            }
        }
        c1 = -1;
    }
}

function rand (){
    for(let i=0; i<(l*l)/2; i++){   // ieliek vertības m2
            m2.push({html: i+3, nr: i+3, done: 0});
    }
    for(let i=0; i<(l*l)/2; i++){   // ieliek m1 atbilstošos logoritmus
            m3.push({html: getBaseLog(Math.E, i+3).toFixed(3), nr: i+3, done: 0});
    }
    
    for(let i=0; i<(l*l)/2; i++){   //ieliek m2 un m3 m1
        m1.push(m2[i]);
    }
    for(let i=0; i<(l*l)/2; i++){
        m1.push(m3[i]);
    }
    
    m1 = shuffle(m1);
    for(let i=0; i<m1.length; i++){
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}