jQuery(document).ready(function($) {

	
	$(window).scroll(function() {
	    if($(window).scrollTop() > 0){
			$("header:not('.black_bg')").addClass('fixed');
			$(".main_logo img").attr("src","../img/logo_black.png");
		}
		else{
			$("header:not('.black_bg')").removeClass('fixed');
			$(".main_logo img").attr("src","../img/logo.png");
		}
	});
	
	$('.type_item').click(function(event) {
		$('.type_item').removeClass('active');
		$(this).addClass('active');
		$('.types_content_item').hide();
		$('.types_content_item[data-type-item = ' + $(this).data("type") + ']').fadeToggle(250);
	});
	$('.type_item.all').click(function(event) {
		$('.types_content_item').fadeIn();
	});
	$('.menu_icon_block i').click(function(event) {
		$('.responsive_menu_block').fadeToggle(100);
	});
	$('.responsive_menu_close').click(function(event) {
		$('.responsive_menu_block').fadeToggle(100);
	});
	$('.responsive_menu_overlay').click(function(event) {
		$('.responsive_menu_block').fadeToggle(100);
	});
	$('.reset a').click(function(event) {
  		$(".checkbox").prop("checked", "checked");
	});
	$('.more_btn').click(function(event) {
		$('.more_info').slideToggle(250);
	});
});
var myPos;

var initMap = function(){
  var element = document.getElementById('map');
  var options = {
    zoom: 15,
    disableDefaultUI: true,
    styles: [

	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.country",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.locality",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#181818"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#1b1b1b"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#2c2c2c"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8a8a8a"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#373737"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#3c3c3c"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#4e4e4e"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#000000"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#3d3d3d"
	      }
	    ]
	  }
		

    ],
    center: {lat: 41.250071, lng: 69.301581}

  };

  var myMap = new google.maps.Map(element, options);
   
}