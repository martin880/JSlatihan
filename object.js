// membuat object
var mhs1 = {
    nama : "Martin",
    nrp : "0987654321",
    email : "martinlumbangaol880@gmail.com",
    umur : 29,
    jurusan : "Sistem Informasi",
    ips : [2.75, 2.80, 3.01],
    alamat : {
        jalan : "Perum Muka Kuning Paradise",
        kota : "Batam",
        provinsi : "Kepri"
    }
};

var mhs2 = {
    nama : "Iska",
    nrp : "0987654322",
    email : "iskajenong880@gmail.com",
    umur : 26,
    jurusan : "Sistem Informasi",
    ips : [2.85, 3.01, 3.20],
    alamat : {
        jalan : "Perum Genta 2 Batuaji",
        kota : "Batam",
        provinsi : "Kepri"
    }
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email,  umur, jurusan, ips) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.umur = umur;
    mhs.jurusan = jurusan;
    mhs.ips = ips;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nartha','0987654323','narthauli27@gmail.com',23,'Manajemen Perbankan',[2.70, 2.90, 3.10]);

// constructor
function Mahasiswa(nama, nrp, email, umur, jurusan, ips){
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.umur = umur;
    this.jurusan = jurusan;
    this.ips = ips;
    // return this;
}

var mhs4 = new Mahasiswa('Putri','0987654324','putrilangkat5@gmail.com',18,'Ekonomi',[2.80, 2.90, 3.15]);