$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		// Âm thanh
		cnkd.ChoiAmThanh = function(filename, n){
			/*try{
				if(n == 1){
					at =  new Audio(filename);
					var resp = at.play();
				}
				else if(n == 2){
					at2 =  new Audio(filename);
					var resp = at2.play();
				}
				else if(n == 3){
					at3 =  new Audio(filename);
					var resp = at3.play();
				}
				else if(n == 4){
					at4 =  new Audio(filename);
					var resp = at4.play();
				}
				else if(n == 5){
					at5 =  new Audio(filename);
					var resp = at5.play();
				}

				if (resp!== undefined) {
					resp.then(_ => {
						// autoplay starts!
					}).catch(error => {
					   //show error
					});
				}
			}
			catch(e){
				// do nothing
			}*/
			if(n == 1){
				at =  new Audio(filename);
				at.play();
        at.volume = 0.2;
			}
			else if(n == 2){
				at2 =  new Audio(filename);
				at2.play();
        at2.volume = 0.2;
			}
			else if(n == 3){
				at3 =  new Audio(filename);
				at3.play();
        at3.volume = 0.2;
			}
			else if(n == 4){
				at4 =  new Audio(filename);
				at4.play();
        at4.volume = 0.2;
			}
			else if(n == 5){
				at5 =  new Audio(filename);
				at5.play();
        at5.volume = 0.2;
			}
		};
		cnkd.DungHetAmThanh = function(){
			at.pause();
			at2.pause();
			at3.pause();
			at4.pause();
			at5.pause();
			at.CurrentTime = 0;
			at2.CurrentTime = 0;
			at3.CurrentTime = 0;
			at4.CurrentTime = 0;
			at5.CurrentTime = 0;
		}
		// Hình ảnh
		$.fn.rotate = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration * 1000, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotate(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		
		cnkd.QuayNon = function(dr,f,du){
			index_dr = (dr + f) % 360;
			cnkd.ChoiAmThanh("https://cdn.glitch.global/85d6f473-7e9d-43ce-bd23-db0d6e78db95/Wheel%20Spinning%20Bed%202012%20short%201.mp3?v=1651285919915", 1);
			$('.chiecnon').rotate(dr + f, du, dr, function(){
				$('.chiecnon').rotate(index_dr, 0, index_dr);
			});
		}
		
		cnkd.ChuyenCanh = function(canh){
			if(canh == 1){
				$('.scenechinh, .scenecancanh, .sceneochu').css('opacity',0);
				$('.scenechinh').css('opacity',1);
			}
			else if(canh == 2){
				$('.scenechinh, .scenecancanh, .sceneochu').css('opacity',0);
				$('.sceneochu').css('opacity',1);
			}			
			else{
				$('.scenechinh, .scenecancanh, .sceneochu').css('opacity',0);
			}
		}
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});