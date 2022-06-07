import { getDatabase, ref, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		const db = getDatabase();
		remove(ref(db));
		update(ref(db), { dr : 0, lam_c:2, vong_tieu_de:0, doandungochu:0, hienochu:0, non_c:1 });
		var so;
		for (var i = 0; i <= 47; i++){
			so = 'c' + i;
			update(ref(db, 'khong-dau'), { [so] : '' })
			update(ref(db, 'co-dau'), { [so] : '' })
			update(ref(db, 'trang-thai'), { [so] : 0 })
		}
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			dr = data.dr;
		})
		$('.quaynon').click(function() {
			f = Math.floor(Math.random() * 3000 + 3001);
			update(ref(db), { quaynon : 1, f : f, du : du, dr : dr });
		})
		$('.canhnon').click(function(){
			update(ref(db), { canh : 1});
		})
		$('.canhochu').click(function(){
			update(ref(db), { canh : 2});
		})
		$('.lam_luc').click(function(){
			if(lam_c == 1){
				$('.lam_luc, .ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
				lam_c = 2;
				update(ref(db), { lam_c : 1});
			}
			else if(lam_c == 2){
				$('.lam_luc, .ochu_cot').css('background-image', "url('ochuluc.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
				lam_c = 1;
				update(ref(db), { lam_c : 2});
			}
			$('.ochu_cot, .ochu_nho').html('');
		})
		$('.vong1').click(function(){
			vong_tieu_de = 1;
			$('.ochu_cot').html(''); 
			$('.ochu_cot').css('background-image', "url('ochulam.png')");
			$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
			$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
			$('#cot_6').html('V');
			$('#cot_7').html('Ò');
			$('#cot_8').html('N');
			$('#cot_9').html('G');
			$('#cot_11').html('1');
			update(ref(db), { vong_tieu_de : 1});
		})
		$('.vong2').click(function(){
			vong_tieu_de = 2;
			$('.ochu_cot').html(''); 
			$('.ochu_cot').css('background-image', "url('ochulam.png')");
			$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
			$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
			$('#cot_6').html('V');
			$('#cot_7').html('Ò');
			$('#cot_8').html('N');
			$('#cot_9').html('G');
			$('#cot_11').html('2');
			update(ref(db), { vong_tieu_de : 2});
		})
		$('.vong3').click(function(){
			vong_tieu_de = 3;
			$('.ochu_cot').html(''); 
			$('.ochu_cot').css('background-image', "url('ochulam.png')");
			$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
			$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
			$('#cot_6').html('V');
			$('#cot_7').html('Ò');
			$('#cot_8').html('N');
			$('#cot_9').html('G');
			$('#cot_11').html('3');
			update(ref(db), { vong_tieu_de : 3});
		})
		$('.vongdb').click(function(){
			vong_tieu_de = 4;
			$('.ochu_cot').html(''); 
			$('.ochu_cot').css('background-image', "url('ochulam.png')");
			$('.ochu_nho').css('background-image', "url('ochuluc.png')").html('');
			$('#cot_5, #cot_6, #cot_7, #cot_9, #cot_10, #cot_11, #cot_12').css('background-image', "url('ochutrang.png')");
			$('#cot_5').html('Đ');
			$('#cot_6').html('Ặ');
			$('#cot_7').html('C');
			$('#cot_9').html('B');
			$('#cot_10').html('I');
			$('#cot_11').html('Ệ');
			$('#cot_12').html('T');
			update(ref(db), { vong_tieu_de : 4});
		})
		$('.load_doannhanh1').click(function(){
			cnkd.LoadCauHoi(-1);
		})
		$('.load_doannhanh2').click(function(){
			cnkd.LoadCauHoi(-2);
		})
		$('.load_khangia').click(function(){
			cnkd.LoadCauHoi(0);
		})
		$('.load_vong1').click(function(){
			cnkd.LoadCauHoi(1);
		})
		$('.load_vong2').click(function(){
			cnkd.LoadCauHoi(2);
		})
		$('.load_vong3').click(function(){
			cnkd.LoadCauHoi(3);
		})
		$('.load_vongdb').click(function(){
			cnkd.LoadCauHoi(4);
		})
		$('.hienochu').click(function(){
			for(var d = 0; d <= 47; d++){
				if(chuoi_cau_hoi[d].ChuKhongDau != "" && chuoi_cau_hoi[d].ChuCoDau != ""){
					chuoi_cau_hoi.push({TrangThai:1});
					$('#nho_' + (d+1)).css('background-image', "url('ochutrang.png')");
					$('#nho_' + (d+1)).html(chuoi_cau_hoi[d].ChuCoDau);
				}
				else{
					chuoi_cau_hoi.push({TrangThai:0});
				}
			}
			$('.cauhoi').html(cau_hoi);
			cnkd.ChoDataOChuVaoFirebase();
			update(ref(db), { doandungochu : 0, hienochu:1});
		})
		$('.mo_o_chu').click(function(){
			var str = this.id;
			var num = str.slice(4, str.length);
			var o = chuoi_cau_hoi[parseInt(num) + 47].TrangThai;
			var j = 'c' + (parseInt(num) - 1);
			if(o == 1){
				chuoi_cau_hoi[parseInt(num) + 47].TrangThai = 2;
				update(ref(db, 'trang-thai'), { [j] : 2 })
				update(ref(db), { cchx : 1 })
			}
			else if(o == 2){
				chuoi_cau_hoi[parseInt(num) + 47].TrangThai = 3;
				update(ref(db, 'trang-thai'), { [j] : 3 })
				update(ref(db), { mcc : 1 })
			}
		})
		$('.doandungochu').click(function(){
			update(ref(db), { doandungochu : 1});
		})
		cnkd.ChoDataOChuVaoFirebase = function() {
			var so;
			var kd;
			var cd;
			var tt;
			for (var i = 0; i <= 47; i++){
				so = 'c' + i;
				kd = chuoi_cau_hoi[i].ChuKhongDau;
				cd = chuoi_cau_hoi[i].ChuCoDau;
				tt = chuoi_cau_hoi[i + 48].TrangThai;
				update(ref(db, 'khong-dau'), { [so] : kd })
				update(ref(db, 'co-dau'), { [so] : cd })
				update(ref(db, 'trang-thai'), { [so] : tt })
			}
		}
		$('.chuyennon').click(function(){
			if(non_c == 1){
				$('.chuyennon').css('background-color', 'orange');
				non_c = 2;
				update(ref(db), { non_c : 2});
			}
			else if(non_c == 2){
				$('.chuyennon').css('background-color', '');
				non_c = 1;
				update(ref(db), { non_c : 1});
			}
		})
		$('.obimat').click(function(){
			if(obimat_c == 1){
				$('.obimat').css('background-color', 'orange');
				obimat_c = 2;
				update(ref(db), { obimat_c : 2});
			}
			else if(obimat_c == 2){
				$('.obimat').css('background-color', '');
				obimat_c = 1;
				update(ref(db), { obimat_c : 1});
			}
		})
		$('.doidiem').click(function(){
			if(doidiem_c == 1){
				$('.doidiem').css('background-color', 'orange');
				doidiem_c = 2;
				update(ref(db), { doidiem_c : 2});
			}
			else if(doidiem_c == 2){
				$('.doidiem').css('background-color', '');
				doidiem_c = 1;
				update(ref(db), { doidiem_c : 1});
			}
		})
		$('.cong_vao_total').click(function(){
			diem_1_total += parseInt($('#sdt1').val());
			$('#sdtt1').val(diem_1_total);
			diem_2_total += parseInt($('#sdt2').val());
			$('#sdtt2').val(diem_2_total);
			diem_3_total += parseInt($('#sdt3').val());
			$('#sdtt3').val(diem_3_total);
		})
		$('.nhac').click(function(){
			var nhacid = this.id;
			update(ref(db), { [nhacid] : 1 })
		})
		$('.dung_nhac').click(function(){
			update(ref(db), { dung_nhac : 1 })
		})
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});

