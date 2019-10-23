let b = true;

function click1() {
    let a = Math.floor(Math.random() * 10) + 1;
    document.getElementById("radom1").value = a;
    let hp1 = parseInt(document.getElementById("HP1").innerText);
    let hp2 = parseInt(document.getElementById("HP2").innerText);
    if (b) {
        document.getElementById("hienthi1").innerHTML = a;
        document.getElementById("hienthi2").innerHTML = "";
        document.getElementById("hKaido").style.color = "blue";
        document.getElementById("hKaido").style.background = "chartreuse";
        document.getElementById("hLuffy").style.color = "black";
        document.getElementById("hLuffy").style.background = "white";
        b = false;
    } else {
        document.getElementById("hienthi2").innerHTML = a;
        document.getElementById("hLuffy").style.color = "blue";
        document.getElementById("hLuffy").style.background = "chartreuse";
        document.getElementById("hKaido").style.color = "black";
        document.getElementById("hKaido").style.background = "white";
        b = true;
        let kaidoo = parseInt(document.getElementById("hienthi1").innerHTML);
        let luffyy = a;
        if (kaidoo > luffyy) {
            document.getElementById("ketQua").innerText = "Luffy thua sẽ bị trừ " + (kaidoo - luffyy) +
                " HP";
            document.getElementById("HP1").innerText = hp1 -( kaidoo - luffyy);
        }else {
            if (kaidoo == luffyy){
                document.getElementById("ketQua").innerText = "kaido và luffy hoà nhau";
            }else {
                document.getElementById("ketQua").innerText = "kaido thua sẽ bị trừ " + (luffyy - kaidoo) +
                    " HP";
                document.getElementById("HP2").innerText = hp2 -(luffyy - kaidoo);
            }
        }
    }
    if (hp1 <= 0){
        alert("Người chiến thắng là Luffy");
        return 0;
    }
    if (hp2 <= 0){
        alert("Người chiến thắng là kaido");
        return 0;
    }
}

