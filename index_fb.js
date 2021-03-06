import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		const db = getDatabase();
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			if(data.quaynon == 1){
				cnkd.QuayNon(data.dr,data.f,data.du);
				update(ref(db), { quaynon : 0, dr : index_dr });
			}
			if(data.canh == 1){
				cnkd.ChuyenCanh(1);
			}
			if(data.canh == 2){
				cnkd.ChuyenCanh(2);
			}
			if(data.lam_c == 1){
				$('.ochu_cot, .ochu_nho').html('');
				$('.ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
        update(ref(db), { lam_c : 0 });
			}
			if(data.lam_c == 2){
				$('.ochu_cot, .ochu_nho').html('');
				$('.ochu_cot').css('background-image', "url('ochuluc.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
        update(ref(db), { lam_c : 0 });
			}
			if(data.vong_tieu_de == 1){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('1');
        update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 2){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('2');
        update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 3){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('ochutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('3');
        update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 4){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('ochulam.png')");
				$('.ochu_nho').css('background-image', "url('ochuluc.png')");
				$('#cot_5, #cot_6, #cot_7, #cot_9, #cot_10, #cot_11, #cot_12').css('background-image', "url('ochutrang.png')");
				$('#cot_5').html('Đ');
				$('#cot_6').html('Ặ');
				$('#cot_7').html('C');
				$('#cot_9').html('B');
				$('#cot_10').html('I');
				$('#cot_11').html('Ệ');
				$('#cot_12').html('T');
        update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.doandungochu == 1){
				for(var i = 0; i <= 47; i++){
					if(trang_thai[i] == 1 || trang_thai[i] == 2 || trang_thai[i] == 3){
						$('#nho_' + (i+1)).css('background-image', "url('ochutrang.png')").html(co_dau[i]);
					}
				}
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Letters%20Solved.mp3?v=1651285880323", 2);
        update(ref(db), { doandungochu : 0 });
			}
			if(data.non_c == 1){
				$('.chiecnon').css('background-image', "url('chiecnon.png')");
			}
			if(data.non_c == 2){
				$('.chiecnon').css('background-image', "url('chiecnon_db.png')");
			}
			if(data.obimat_c == 1){
				$('.chiecnon').css('background-image', "url('chiecnon.png')");
			}
			if(data.obimat_c == 2){
				$('.chiecnon').css('background-image', "url('obm2.png')");
			}
			if(data.doidiem_c == 1){
				$('.chiecnon').css('background-image', "url('chiecnon.png')");
			}
			if(data.doidiem_c == 2){
				$('.chiecnon').css('background-image', "url('dd.png')");
			}
			// Nhac
			if(data.hienochu == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Reveal%20the%20Letters.mp3?v=1651285886396", 2);
				update(ref(db), { hienochu : 0 });
			}
			if(data.dung_nhac == 1){
				cnkd.DungHetAmThanh();
				update(ref(db), { dung_nhac : 0 });
			}
			if(data.intro == 1){
				cnkd.ChoiAmThanh("Opening Titles.mp3", 1);
				update(ref(db), { intro : 0 });
			}
			if(data.he == 1){
				cnkd.ChoiAmThanh("Host Entrance.mp3", 1);
				update(ref(db), { he : 0 });
			}
			if(data.ncd == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Main%20Theme.mp3?v=1651290471721", 1);
				update(ref(db), { ncd : 0 });
			}
			if(data.tt == 1){
				cnkd.ChoiAmThanh("Tien thuong.mp3", 1);
				update(ref(db), { tt : 0 });
			}
			if(data.sai == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Wrong.mp3?v=1651285889468", 2);
				update(ref(db), { sai : 0 });
			}
			if(data.s30 == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/30s.mp3?v=1651285869356", 5);
				update(ref(db), { s30 : 0 });
			}
			if(data.s10 == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/10s.mp3?v=1651285868247", 5);
				update(ref(db), { s10 : 0 });
			}
			if(data.nn1 == 1){
				cnkd.ChoiAmThanh("Bed 1.mp3", 3);
				update(ref(db), { nn1 : 0 });
			}
			if(data.nn2 == 1){
				cnkd.ChoiAmThanh("Bed 2.mp3", 3);
				update(ref(db), { nn2 : 0 });
			}
			if(data.nn3 == 1){
				cnkd.ChoiAmThanh("Bed 3.mp3", 3);
				update(ref(db), { nn3 : 0 });
			}
			if(data.bc == 1){
				cnkd.ChoiAmThanh("Bam chuong.mp3", 2);
				update(ref(db), { bc : 0 });
			}
			if(data.md == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Bankrupt.mp3?v=1651285871834", 4);
				update(ref(db), { md : 0 });
			}
			if(data.ml == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Lose%20a%20Turn.mp3?v=1651285881372", 4);
				update(ref(db), { ml : 0 });
			}
			if(data.cd == 1){
				cnkd.ChoiAmThanh("Chia doi.mp3", 4);
				update(ref(db), { cd : 0 });
			}
			if(data.tl == 1){
				cnkd.ChoiAmThanh("Them luot.mp3", 4);
				update(ref(db), { tl : 0 });
			}
			if(data.mm == 1){
				cnkd.ChoiAmThanh("May man.mp3", 4);
				update(ref(db), { mm : 0 });
			}
			if(data.nd == 1){
				cnkd.ChoiAmThanh("Nhan doi.mp3", 4);
				update(ref(db), { nd : 0 });
			}
			if(data.cchx == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/A%20Letter%20gets%20Highlighted.mp3?v=1651285870083", 2);
				update(ref(db), { cchx : 0 });
			}
			if(data.mcc == 1){
				cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Open%20a%20Letter.mp3?v=1651286543459", 2);
				update(ref(db), { mcc : 0 });
			}
		})
		onValue(ref(db, 'khong-dau'), (snapshot) => {
			const data = snapshot.val();
			khong_dau = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
		})
		onValue(ref(db, 'co-dau'), (snapshot) => {
			const data = snapshot.val();
			co_dau = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
		})
		onValue(ref(db, 'trang-thai'), (snapshot) => {
			const data = snapshot.val();
			trang_thai = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
			for(var i = 0; i <= 47; i++){
				if(trang_thai[i] == 0){
					$('#nho_' + (i+1)).css('background-image', "url('ochuluc.png')").html('');
				}
				else if(trang_thai[i] == 1){
					$('#nho_' + (i+1)).css('background-image', "url('ochutrang.png')").html('');
				}
				else if(trang_thai[i] == 2){
					$('#nho_' + (i+1)).css('background-image', "url('ochuxanhdam.png')").html('');	
				}
				else if(trang_thai[i] == 3){
					$('#nho_' + (i+1)).css('background-image', "url('ochutrang.png')").html(khong_dau[i]);
				}
			}
		})
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});

