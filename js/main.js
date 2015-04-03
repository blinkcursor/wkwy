$(function() {

	// fade in content etc. once photo tiles have loaded
	tiles = $(".mosaic");

	tiles.imagesLoaded(function() 
	{
		// fade in header and spin logo
		$(".header").velocity({opacity: 0.8}, {
			duration: 1000,
			complete: function(){
				$(".logo").velocity({ rotateY: "720deg" }, 1600);
			}
		});
		// slide up the photo tiles
		$(".mosaic").velocity("transition.slideUpIn", {
			duration: 1000,
			stagger: 50
		});

		// set-up the logo spin when scrolls into view
		// (if we don't wait till images load can be triggered too soon)
		var logoTarget = $('.js-logo');
		var logoWatcher = scrollMonitor.create( logoTarget );
		logoWatcher.enterViewport(function() {
			$(".js-logo").delay(2000).velocity({ rotateY: "720deg" }, 1600);
		});
	});


	// set up the name switching when scrolls into view
	var names = ["Jack","Jill","Hans","María","Salvador","Aya","Dumitra","Luuk","Astrid","Elöd"];
	function hitTheRoad(nameCounter) {
		nameCounter = typeof nameCounter !== 'undefined' ? nameCounter : 0;
		$(".road-name").html(names[nameCounter]).velocity("fadeIn").delay(1500).velocity("fadeOut", {
			complete: function() {
				nameCounter += 1;
				if (nameCounter == names.length) {
					nameCounter = 0;
				}
				hitTheRoad(nameCounter);
			}
		});
	}
	var nameTarget = $('.road-buttons');
	var nameWatcher = scrollMonitor.create( nameTarget );
	nameWatcher.enterViewport(function() {
		window.setTimeout( hitTheRoad, 1000 );
	});

	// rotate the gallery images
	var gallery = $(".gallery > img");
	function galleryRotate(imgCounter) {
		$(gallery[imgCounter]).velocity("fadeIn", {duration: 1200}).delay(3000).velocity("fadeOut", {
			display: "null",
			complete: function() {
				imgCounter += 1;
				if (imgCounter == gallery.length) {
					imgCounter = 0;
				}
				galleryRotate(imgCounter);
			}	
		});
	}
	galleryRotate(0);
});
