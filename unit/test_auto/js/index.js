﻿

summerready = function(){
    // here is your code...	
    var y = $summer.offset($summer.byId('header')).h;
    var width = $summer.offset(document.getElementsByTagName("body")[0]).w;		
    var height = $summer.offset($summer.byId('main')).h;

    summer.openFrame({
        id: 'main',
        url: 'html/main.html',
        bounces: true,
        position: {
            left: 0,
            top: y,
            //width: width,
            width: 'auto',
            //height: 'auto'
            height: height
        }
    });
   
}