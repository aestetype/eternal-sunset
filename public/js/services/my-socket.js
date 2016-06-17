'use strict';

angular.module('eternalSunsetApp')
    .factory('mySocket', function (socketFactory) {
        return socketFactory();
    });
