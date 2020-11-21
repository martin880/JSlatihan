// Membuat program sederhana pengelolaan angkot
// membuat object angkot
// menggunakan constructor
function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('angkot masih kosong!!');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            // cek nama penumpang ada atau tidak di angkot tsb
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Martin',['Medan','Batam'], [], 0);
var angkot2 = new Angkot('Rossi',['Batam','Medan'], [], 0);
  