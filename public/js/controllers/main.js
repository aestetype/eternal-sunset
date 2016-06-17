'use strict';

angular.module('eternalSunsetApp')
    .controller('MainCtrl', function ($scope, mySocket, boxFactory) {
        $scope.boxs = boxFactory.getBoxs();
        mySocket.on('new:tweet', function(tweet) {
            boxFactory.addTweet(tweet);
        });
    });
