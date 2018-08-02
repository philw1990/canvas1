var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var random = function(){

    c.clearRect(0, 0, canvas.width, canvas.height);

for(var i = 0; i < 10; i++){
    
    c.beginPath();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var w = Math.random() * 300;
    var h = Math.random() * 300;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
c.fillStyle = "#"+randomColor;
c.fillRect(x,y,w,h);
}
}

