let chuot = function (ten, tocDo, tinhTrang, kichThuoc) {
    this.ten = ten;
    this.tocDo = tocDo;
    this.tinhTrang = tinhTrang;
    this.kichThuoc = kichThuoc;

    this.getTinhTrang = function () {
        return tinhTrang;
    };
    this.setTinhTrang = function (newTinhTrang) {
        this.tinhTrang = newTinhTrang;
    };
    this.keu = function (chuotKeu) {
        if (conchuot.tinhTrang) {
            console.log(chuotkeu);
        }
    }
};

let chuot1 = new chuot("chuot1", 5, true, 2);

let meo = function (ten, tocDo, kichThuoc) {
    this.ten = ten;
    this.tocDo = tocDo;
    this.kichThuoc = kichThuoc;
    this.keu = function (meoKeu) {
        console.log(meoKeu);
    };
    this.duoi = function (chuot) {
        if (this.tocDo > chuot.tocDo) {
            console.log('meo bat duoc chuot');
            chuot.tinhTrang = false;
        } else {
            console.log('meo ko bat duoc chuot');
        }
    };
    this.an = function (chuot) {
        if (chuot.tinhTrang) {
            console.log('chuot song se bi meo an ')
        } else {
            console.log('chuot chet meo ko an')
        }
    }
};
let meo1 = new meo('meo1', 10, 15);