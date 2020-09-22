
$(document).ready(function(){
  'use strict'; // 코드를 엄격하게 처리
  paper.install(window);
  paper.setup(document.getElementById('maincanvas'));

  // var c = Shape.Circle(100,100,10);
  /* canvas element에 바둑판 형식 원 그리기
  var c;
  for(var x=0; x<500; x+=25){
    for(var y=0; y<500; y+=25){
      c = Shape.Circle(x,y,10);
      c.fillColor = 'red';
    }
  }
  */

  var tool = new Tool();

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello';
  
  tool.onMouseDown = function(event){
    // var c = Shape.Circle(event.point.x, event.point.y, 10);
    var c = Shape.Circle(event.point, 10); // 윗 줄 코드와 동일
    c.fillColor = 'black';
  }

  paper.view.draw();
  console.log('main.js loaded successfully');
});
