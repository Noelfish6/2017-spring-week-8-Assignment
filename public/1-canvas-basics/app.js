//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
//Store drawing context as a variable
//Hint: use canvas.getContext('2d');
var w = d3.select('.plot').node().clientWidth,
	h = d3.select('.plot').node().clientHeight;

	// console.log(d3.select('.plot').node().clientWidth);
	// console.log(d3.select('.plot'));

var canvas1 = d3.select('#plot1').append('canvas')
				.attr('width',w)
				.attr('height',h)
				.node();

//attr is only available in d3.selection

var ctx = canvas1.getContext('2d');
// console.log(ctx);

//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'
ctx.fillStyle = 'rgb(250,250,250)';
ctx.fillRect(0,0,w,h);


//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops
ctx.strokeStyle = 'rgb(180,180,180)';
ctx.lineWidth = 0.5;
ctx.beginPath();

for(var i=0; i<=h; i+=50){
	ctx.moveTo(0,i);
	ctx.lineTo(w,i);
}

for (var j=0;j<=w;j+=50){
	ctx.moveTo(j,0);
	ctx.lineTo(j,h);
}

ctx.stroke();

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
//Hint: use context2D.fillRect and context2D.strokeRect
ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50,50,50,50);

ctx.strokeStyle = 'rgb(255,0,0)';
ctx.strokeRect(150,50,50,50);



// Part 5: Draw a series of circles and lines using the context2D path commands, as shown
ctx.beginPath();
ctx.arc(100,200,50,0,Math.PI*2);
ctx.save();
ctx.globalAlpha = .5;
ctx.fill();
ctx.restore(); //bring all things back


ctx.beginPath();
ctx.arc(400,200,50,0,Math.PI*2);

ctx.moveTo(750,200);
ctx.arc(700,200,50,0,Math.PI*2);
ctx.strokeStyle = 'rgb(255,0,0)';
ctx.stroke();

// Part 6: Label each circle with coordinates
// Hint: context2D.fillText
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillText('(100,200)',110,190);

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillText('(400,200)',410,190);

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillText('(700,200)',710,190);

ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(250,100,400,200);
ctx.closePath();
ctx.stroke();



ctx.beginPath();
ctx.moveTo(400,200);
ctx.quadraticCurveTo(550,300,700,200);
ctx.closePath();
ctx.stroke();




// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it
var canvas = d3.select('#plot2').append('canvas').attr('width',w).attr('height',h).node();

var ctx2 = canvas.getContext('2d');
ctx2.drawImage(canvas1,0,0);

