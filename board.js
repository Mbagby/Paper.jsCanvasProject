var cup = function(){
	collecter = Path.Rectangle(new Point(10,10), new Size (100,50));
	collecter.style= {
	    fillColor: "pink",
	    strokeColor: "aqua",
	    strokeWidth: 20
	};
}; cup();
function onFrame(event){
	if(Key.isDown("d")){
		collecter.translate(5,0);
	}
	if (Key.isDown("a")){
		collecter.translate(-5,0);
	}
	if (Key.isDown("w")){
		collecter.translate(0,-5);
	}
	if (Key.isDown("s")){
		collecter.translate(0,5);
	};
};

//  1)
// function onMouseMove(event){
// 		collecter.position = event.point;
// }; //Will follow the mouse

//  2)
// function onFrame(event){
// 		collecter.translate(5,2);
// }; //Will move the object right (x,y) when the page loads

//  3)
// function onFrame(event){
// 	if(Key.isDown("d")){
// 		collecter.translate(5,0);
// 	}
// 	if (Key.isDown("a")){
// 		collecter.translate(-5,0);
// 	}
// 	if (Key.isDown("w")){
// 		collecter.translate(0,-5);
// 	}
// 	if (Key.isDown("s")){
// 		collecter.translate(0,5);
// 	};
// };












