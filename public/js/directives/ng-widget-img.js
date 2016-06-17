'use strict';

angular.module('eternalSunsetApp')
    .directive('ngWidgetImg', function () {
        return {
            scope: {
                box: '='
            },
            link: function postLink(scope, element, attrs) {
                scope.$watch('box', function(image) {
                    if (image) {
                        var img = new Image();
                        img.onload = function() {
                            $('.box .img').removeClass('live');
                            element.addClass('live');
                            element.fadeOut(400, function() {
                                element.parent().css('background-image', "url(" + image + ")");
                                element.fadeIn(400);
                            });
                        };
                        img.src = image;
                    }
                });
            }
        };
    });
