
    var canvas = new fabric.Canvas('can');

    $('#button_circle').click(function(){
      canvas.add(new fabric.Circle({
        radius : 50,
        fill : '#ff0',
        left : 20,
        top : 20
      }));
    });
    $('#get_triangle1').click(function(){
      canvas.add(new fabric.Triangle({
        fill : '#f00',
        left : 20,
        top : 20,
        width : 15,
        height : 30
      }));
    });
    $('#get_rectangle').click(function(){
      canvas.add(new fabric.Rect({
        left : 200,
        top : 250,
        fill : '#989',
        width : 20,
        height : 20
      }));
    });
    $('#get_triangle2').click(function(){
      canvas.add(new fabric.Triangle({
        fill : '#746',
        left : 100,
        top : 200,
        width : 50,
        height : 15
      }));
    });
    $('#get_image1').click(function(){
      canvas.add(new fabric.Circle({
        radius : 35,
        fill : '#820',
        left : 400,
        top : 298
      }));
    });


// script begins
  $('#img1').click(function(){
    var imgElement = document.getElementById('img1');
    canvas.add(new fabric.Image(imgElement, {
      left : 5,
      top : 5,
      height : 500,
      width : 500
  }));
  });
  $('#img2').click(function(){
    var imgElement = document.getElementById('img2');
    canvas.add(new fabric.Image(imgElement, {
      left : 5,
      top : 5,
      height : 500,
      width : 500
  }));
  });
  $('#img3').click(function(){
    var imgElement = document.getElementById('img3');
    canvas.add(new fabric.Image(imgElement, {
      left : 5,
      top : 5,
      height : 500,
      width : 500
  }));
  });
  $('#img4').click(function(){
    var imgElement = document.getElementById('img4');
    canvas.add(new fabric.Image(imgElement, {
      left : 100,
      top : 200,
      height : 500,
      width : 500
  }));
  });
  $('#img5').click(function(){
    var imgElement = document.getElementById('img5');
    canvas.add(new fabric.Image(imgElement, {
      left : 5,
      top : 5,
      height : 20,
      width : 10
  }));
  });
  $('#img6').click(function(){
    var imgElement = document.getElementById('img6');
    canvas.add(new fabric.Image(imgElement, {
      left : 5,
      top : 5,
      height : 20,
      width : 10
  }));
  });
  $('#img7').click(function(){
    var imgElement = document.getElementById('img7');
    canvas.add(new fabric.Image(imgElement, {
      left : 250,
      top : 250,
      height : 100,
      width : 50
  }));
  });
  $('#img8').click(function(){
    var imgElement = document.getElementById('img8');
    canvas.add(new fabric.Image(imgElement, {
      left : 250,
      top : 250,
      height : 100,
      width : 50
  }));
  });
  $('#img9').click(function(){
    var imgElement = document.getElementById('img9');
    canvas.add(new fabric.Image(imgElement, {
      left : 250,
      top : 250,
      height : 100,
      width : 50
  }));
  });
  $('#img10').click(function(){
    var imgElement = document.getElementById('img10');
    canvas.add(new fabric.Image(imgElement, {
      left : 250,
      top : 450,
      height : 100,
      width : 50
  }));
  });
  $('#img11').click(function(){
    var imgElement = document.getElementById('img11');
    canvas.add(new fabric.Image(imgElement, {
      left : 750
      top : 50
      height : 50
      width : 50
  }));
  });
  $('#img12').click(function(){
    var imgElement = document.getElementById('img12');
    canvas.add(new fabric.Image(imgElement, {
      left : 750
      top : 50
      height : 50
      width : 50
  });
