




function wacomMouseMoving(option) {

    var event = option.e;
    var pointer = canvas.getPointer(event);
    var x = pointer.x;
    var y = pointer.y;

    var plugin = document.getElementById('wtPlugin');
    var penAPI = plugin.penAPI;

//    console.log("penAPI:");
//    console.log(penAPI);

    if (penAPI) {



        var pressure = 0.0;
        var isEraser;

        if (penAPI) {
            pressure = 150.0 * penAPI.pressure;
            isEraser = penAPI.isEraser;
        } else {
            pressure = 2;
            isEraser = false;
        }

        console.log("pressure: " + pressure);

//        canvas.freeDrawingBrush.width = pressure;

        if (!canvas.theCircle) {
            var circle = new fabric.Circle({
                radius: 1, fill: 'green', left: 100, top: 100
            });
            canvas.add(circle);
            canvas.theCircle = circle;
        }


        canvas.theCircle.radius = pressure;
        canvas.theCircle.setCoords();
        canvas.renderAll();




    } else {

        console.log("Pen API not detected");

    }




}