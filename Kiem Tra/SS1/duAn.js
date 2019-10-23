let NV = function (name,HP) {
    this.name = name;
    this.HP = HP;
    this.getHP = function () {
        return this.HP;
    };
    this.setHP = function (newHP) {
        this.HP = newHP;
    };
    /*    this.setKetQua = function () {
            return this.setRandom() - kaido.setRandom();
        }*/
    this.Random = function () {
        return Math.floor(Math.random() * 10) + 1;
    }
};
let kaido = new NV("kaido", 50);
let luffy = new NV("luffy", 50);
let b = true;
function click1() {
    // let a = Math.floor(Math.random() * 10) + 1;
    // document.getElementById("radom1").value = a;
    kaido.setHP(parseInt(document.getElementById("HP1").innerText));
    luffy.setHP(parseInt(document.getElementById("HP2").innerText));
    if (b) {
        a = kaido.Random();
        document.getElementById("hienthi1").innerHTML = a;
        document.getElementById("radom1").value = a;
        document.getElementById("hienthi2").innerHTML = "";
        document.getElementById("hKaido").style.color = "blue";
        document.getElementById("hKaido").style.background = "chartreuse";
        document.getElementById("hLuffy").style.color = "black";
        document.getElementById("hLuffy").style.background = "white";
        b = false;
    } else {
        a = luffy.Random();
        document.getElementById("hienthi2").innerHTML = a;
        document.getElementById("radom1").value = a;
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
            document.getElementById("HP2").innerText = (luffy.HP- (kaidoo - luffyy));
        }else {
            if (kaidoo == luffyy){
                document.getElementById("ketQua").innerText = "kaido và luffy hoà nhau";
            }else {
                document.getElementById("ketQua").innerText = "kaido thua sẽ bị trừ " + (luffyy - kaidoo) +
                    " HP";
                document.getElementById("HP1").innerText = (kaido.HP - (luffyy - kaidoo));
            }
        }
    }
    if (kaido.HP <= 0){
        alert("Người chiến thắng là Luffy");
        return 0;
    }
    if (luffy.HP <= 0){
        alert("Người chiến thắng là kaido");
        return 0;
    }
}
