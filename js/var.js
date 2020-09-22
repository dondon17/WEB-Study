$(document).ready(function(){
  'use strict'; // 코드를 엄격하게 처리
  paper.install(window);
  paper.setup(document.getElementById('maincanvas'));

  const inf = Infinity;
  // console.log(inf);
  // alert(inf);
  const max = Number.MAX_SAFE_INTEGER;
  const min = Number.MIN_SAFE_INTEGER;

  const multiline = "line1\n"+"line2\n"+"line3";
  var tool = new Tool();

  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'black';
  text.fontSize = 20;
  text.content = "the current temp is "+min+"\u00b0C";
  text.content = multiline;
  paper.view.draw();
  console.log('var.js loaded successfully');
});
