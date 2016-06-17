'use strict';

angular.module('eternalSunsetApp')
    .directive('ngWidgetMap', function () {
        return {
            scope: {
                box: '='
            },
            link: function postLink(scope, element, attrs) {
                var mapObj;
                var refreshDNO = 60000;
                var dno;

                element.append('<div id="map"></div>');
                var styleGM = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"elementType": "labels","stylers": [{ "visibility": "off" }]},{"featureType": "administrative.country","elementType": "geometry","stylers": [{ "visibility": "off" }]},{"featureType": "water","elementType": "labels","stylers": [{ "visibility": "off" }]}];

                mapObj = new google.maps.Map(document.getElementById('map'), {
                    zoom:1,
                    center: new google.maps.LatLng(39,0),
                    disableDefaultUI: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: styleGM,
                    scrollwheel: false,
                    draggable: false,
                    disableDoubleClickZoom: true
                });

                dno = new DayNightOverlay({
                    map: mapObj
                });
                calcSunsetLngNow();

                function refreshDayNight() {
                    var d = new Date();
                    dno.setDate(d);
                    calcSunsetLngNow();
                }

                function calcSunsetLngNow() {
                    var time = new Date();
                    var hourUTC = time.getUTCHours();
                    var minutesUTC = time.getUTCMinutes();

                    var nbMinutesUTCNow = 60*hourUTC+minutesUTC;
                    if (nbMinutesUTCNow == 1080) {
                        var newCenterLng = 0;
                    } else if (nbMinutesUTCNow < 1080) {
                        var newCenterLng = (1080-nbMinutesUTCNow)*360/1440;
                    } else {
                        var newCenterLng = (nbMinutesUTCNow-1080)*360/1440;
                    }
                    mapObj.setCenter(new google.maps.LatLng(39,newCenterLng));
                }

                setInterval(refreshDayNight, refreshDNO);
            }
        };
    });
