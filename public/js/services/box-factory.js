'use strict';

angular.module('eternalSunsetApp')
    .factory('boxFactory', function () {

        var _boxs = [
                {
                    "col": "col1",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col2",
                    "row": "row1",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col4",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col5",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col6",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col7",
                    "row": "row1",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col9",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col10",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col11",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col12",
                    "row": "row1",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col1",
                    "row": "row2",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col4",
                    "row": "row2",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col9",
                    "row": "row2",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col10",
                    "row": "row2",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col1",
                    "row": "row3",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col2",
                    "row": "row3",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col3",
                    "row": "row3",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col7",
                    "row": "row3",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col8",
                    "row": "row3",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col1",
                    "row": "row4",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col3",
                    "row": "row4",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col6",
                    "row": "row4",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col7",
                    "row": "row4",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col10",
                    "row": "row4",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col12",
                    "row": "row4",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col6",
                    "row": "row5",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col7",
                    "row": "row5",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col12",
                    "row": "row5",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col1",
                    "row": "row6",
                    "size_x": "size_x1",
                    "size_y": "size_y3",
                    "type": "map"
                },
                {
                    "col": "col2",
                    "row": "row6",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col4",
                    "row": "row6",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col5",
                    "row": "row6",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col10",
                    "row": "row6",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col11",
                    "row": "row6",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col4",
                    "row": "row7",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col7",
                    "row": "row7",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col8",
                    "row": "row7",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col10",
                    "row": "row7",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col2",
                    "row": "row8",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col5",
                    "row": "row8",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col6",
                    "row": "row8",
                    "size_x": "size_x2",
                    "size_y": "size_y2"
                },
                {
                    "col": "col10",
                    "row": "row8",
                    "size_x": "size_x3",
                    "size_y": "size_y2"
                },
                {
                    "col": "col1",
                    "row": "row9",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col5",
                    "row": "row9",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col8",
                    "row": "row9",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                },
                {
                    "col": "col9",
                    "row": "row9",
                    "size_x": "size_x1",
                    "size_y": "size_y1"
                }
            ];

        var gridFull = false;
        var lastRandom = -1;

        var boxFactory = {};

        boxFactory.addTweet = function(tweet) {
            if (!gridFull) {
                for (var i = 0; i < _boxs.length; i++) {
                    if (!_boxs[i].image_url) {
                        _boxs[i].image_url = tweet.image_url;
                        _boxs[i].tags = tweet.tags;
                        break;
                    }
                    if (i == _boxs.length - 1)
                        gridFull = true;
                }
            } else {
                var random = lastRandom;
                while (lastRandom == random) {
                    random = Math.floor((Math.random() * _boxs.length - 1));
                }
                lastRandom = random;
                _boxs[random].image_url = tweet.image_url;
                _boxs[random].tags = tweet.tags;
            }
        };

        boxFactory.getBoxs = function() {
            return _boxs;
        };

        return boxFactory;

    });
