let penumpang = [];
let tambahPenumpang, hapusPenumpang;

tambahPenumpang = function (namaP, penumpang) {

    // Jika Angkot Kosong 
    if (penumpang.length == 0) {
        // Tambahkan Penumpang Dari Awal Array
        penumpang.push(namaP);
        // Kembalikan Isi array & keluar dari function
        return penumpang;

    } else {
        // Telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // Jika kursi kosong
            if (penumpang[i] == undefined) {
                // Tambahkan Penumpang di kursi tersebut
                penumpang[i] = namaP;
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }

            // Jika ada nama yang sama
            if (penumpang[i] == namaP) {
                console.log("Nama Penumpang " + namaP + " sudah ada");
                // Kembalikan isi array & keluar dari function
                return penumpang;

            }
            // Jika Seluruh kursi terisi
            if (i == penumpang.length - 1) {
                //tambahkan penumpang di akhir array
                penumpang.push(namaP);
                // Kembalikan isi array & keluar dari function
                return penumpang;   
            }
        }
    }
}

hapusPenumpang = function (namaP, penumpang) {

    // Jika Angkot Kosong
    if (penumpang.length == 0) {
        console.log("Angkot Masih Kosong");
    }

    for (let i = 0; i < penumpang.length; i++) {
        // jika ada penumpang yang namanya sesuai hapus dengan memberi nilai undifined
        if (penumpang[i] == namaP) {
            penumpang[i] = undefined;
            return penumpang;
        } else if(i == penumpang.length - 1) {
            // Jika tidak ada penumpang yang namanya sesuai
            console.log(namaP + " tidak ada dalam angkot");
            return penumpang;
        }

    }
    
    return penumpang;
}
