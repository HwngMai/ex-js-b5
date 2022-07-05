document.getElementById('btnBai1').onclick = function() {
    //input
    var diemChuanEl = Number(document.getElementById('diemChuan').value);
    console.log('diemChuanEl: ', diemChuanEl);
    var diem1El = Number(document.getElementById('diem1').value);
    console.log('diem1El: ', diem1El);
    var diem2El = Number(document.getElementById('diem2').value);
    console.log('diem2El: ', diem2El);
    var diem3El = Number(document.getElementById('diem3').value);
    console.log('diem3El: ', diem3El);
    var khuVucEl = document.getElementById("khuVuc").value;
    console.log('khuVucEl: ', khuVucEl);
    var doiTuongEl = document.getElementById("doiTuong").value;
    console.log('doiTuongEl: ', doiTuongEl);
    var diemVung = 0;
    var diemDoiTuong = 0;
    var tongDiem = 0;
    //process
    if (khuVucEl == 'A'){
        diemVung = 2;
    }
    if (khuVucEl == 'B'){
        diemVung = 1.5;
    }
    if (khuVucEl == 'C'){
        diemVung = 0.5;
    }
    if (khuVucEl == 'X'){
        diemVung = 0;
    }
    if (doiTuongEl == '1'){
        diemDoiTuong = 2.5;
    }
    if (doiTuongEl == '2'){
        diemDoiTuong = 1.5;
    }
    if (doiTuongEl == '3'){
        diemDoiTuong = 1;
    }
    if (doiTuongEl == '0'){
        diemDoiTuong = 0;
    }
    tongDiem = diem1El + diem2El + diem3El + diemDoiTuong + diemVung;
    console.log('tongDiem: ', tongDiem);
    if ( diem1El == 0 || diem2El == 0 || diem3El == 0 ) {
    document.getElementById('ketQuaBai1').innerHTML = ' 0 điểm còn bày đặt coi kết quả. Rớt!!!';
    }
    else {
        if ( tongDiem >= diemChuanEl && diemChuanEl != 0) {
        document.getElementById('ketQuaBai1').innerHTML = ' Chúc mừng!!! Nhóc có tổng điểm là: '+ tongDiem + '. Đậu rùi nhá!'
        }
        else {
        if (diemChuanEl == 0) {
        document.getElementById('ketQuaBai1').innerHTML = ' Nhập điểm chuẩn chưa ông nọi ??? :D ???'
        }
        else {
                document.getElementById('ketQuaBai1').innerHTML = ' Nhóc có tổng điểm là: '+ tongDiem + '. mà điểm chuẩn lại là: ' + diemChuanEl + ' Xin chia pùn!'
           }
        }
    }
}
//BÀI 2:
document.getElementById('btnBai2').onclick = function(){
    var soKW = document.getElementById('soKW').value * 1;
    var soTienDien = 0;
    if ( soKW <= 50) {
        soTienDien = soKW * 500;
    }   else if ( soKW <= 100) {
            soTienDien = 50 * 500 + (soKW - 50)* 650;
    }       else if ( soKW <= 200){
                soTienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;     
    }               else if ( soKW <= 350){
                    soTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 250) * 1100;
    }                   else if ( soKW > 350){
                        soTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 100 * 1100 + (soKW - 350)* 1300; 
    }
    document.getElementById('ketQuaBai2').innerHTML = 'Tổng tiền phải trả là: ' + soTienDien.toLocaleString() + ' vnđ';
}


