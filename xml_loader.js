$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		cnkd.ResetCauHoi = function () {
			chuoi_cau_hoi = [];
        }
		cnkd.LoadCauHoi = function (a) {
			cnkd.ResetCauHoi();
			var where = '';
			if(a == -1){
				where = 'doan-nhanh-1';
			}
			else if(a == -2){
				where = 'doan-nhanh-2';
			}
			else if(a == 0){
				where = 'khan-gia';
			}
			else if(a == 1){
				where = 'vong-1';
			}
			else if(a == 2){
				where = 'vong-2';
			}
			else if(a == 3){
				where = 'vong-3';
			}
			else if(a == 4){
				where = 'vong-db';
			}
			$.ajax({
				type: "GET",
				url: "questions.xml",
				dataType: "xml",
				async: true,
				success: function (xml) {
					try {
						var x = $($(xml).find(where)).find('chu');
						for(var i = 0; i <= 47; i++){
							chuoi_cau_hoi.push({
								ChuKhongDau: $(x[i]).find("khong-dau")[0].textContent,
								ChuCoDau: $(x[i]).find("co-dau")[0].textContent
							})
						}
					}
					catch (e) {
						console.log(e);
					}
				},
				error: function (e) {
					console.log(e.message || e.Message);
				}
			});
			$.ajax({
				type: "GET",
				url: "questions.xml",
				dataType: "xml",
				async: true,
				success: function (xml) {
					try {
						var y = $(xml).find(where);
						cau_hoi = $(y).find("cau-hoi")[0].textContent
					}
					catch (e) {
						console.log(e);
					}
				},
				error: function (e) {
					console.log(e.message || e.Message);
				}
			});
		}
		cnkd.ChuyenCauHoiVaoOChu = function () {
			var b;
			for(var d = 0; d <= 47; d++){
				b = chuoi_cau_hoi[d];
				if(b.ChuKhongDau != undefined && b.ChuCoDau != undefined){
					//chuoi_cau_hoi.TrangThai.push('1');
				}
				else{
					//chuoi_cau_hoi.TrangThai.push('0');
				}
			}
		}
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});