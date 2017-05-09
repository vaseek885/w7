
function checkValues(){
	x = document.getElementById("x_coord").value;
	if(isNaN(x) || x > 4 || x < -4){
		alert("Неверный x");
		return false;
	}

	y = document.getElementById("y_coord").value;
	if(isNaN(y) || y < -5 || y > 5){
    	alert("Неверный y");
   		return false;
	}
	chbox = document.getElementsByTagName('input');
	r = 0;
	for(i = 0; i < chbox.length; i++){
	    if(chbox[i].checked){
	        r = chbox[i].value;
	        break;
	    }
	}

	if(isNaN(r) || r < 1 || r > 3){
			alert("Неверный r");
		return false;
	}

	return true;
}

function doRequest(x, y, r){
	new_data = [];
	$.ajax({
       		 type:"post",
       		 url:"",
       		 data:{
        	    x_coord: JSON.stringify(x),
        	    y_coord: JSON.stringify(y),
       		    chBox: r 
        	},
    	success:onAjaxSuccess
	});
    function onAjaxSuccess(data){
	new_data = JSON.parse(data);
	context = canvas.getContext("2d");
	for(i=0; i < new_data.length; ++i){
		coord_x = x[i] * pixel_transform + 300;
		coord_y = -y[i] * pixel_transform +300;
		drawPoint(context, coord_x, coord_y, new_data[i]);		
	}
    }
}



// function doRequest(x, y, r){

// 	var xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() { // (3)

// 	    if (xhr.readyState == 4 && xhr.status == 200){
// 	    	alert("Something is happening");
// 	        document.getElementById('for_adding').innerHTML = this.responseText;

// 	        new_data = JSON.parse(data);
// 	        context = canvas.getContext("2d");
// 	        for(i=0; i < new_data.length; ++i){

// 	        	coord_x = x[i] * pixel_transform + 300;
// 	        	coord_y = -y[i] * pixel_transform +300;
// 	        	drawPoint(context, coord_x, coord_y, new_data[i]);		
// 	        }
// 	    }
// 	    else{

// 	        document.getElementById('for_adding').innerHTML += xhr.status + ': ' + xhr.statusText;

// 	    }
// 	}

// 	string = "";
// 	string = string.concat("chBox=",r);
// 	string = string.concat("&y_coord=", y.toString(), "&x_coord=", x.toString());

	

// 	xhr.open("POST", "/", true);
// 	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// 	xhr.send(string);

	
// 	// // $.ajax({
//  // //       		 type:"post",
//  // //       		 url:"",
//  // //       		 data:{
//  // //        	    x_coord: JSON.stringify(x),
//  // //        	    y_coord: JSON.stringify(y),
//  // //       		    chBox: r 
//  // //        	},
//  // //    	success:onAjaxSuccess
// 	// // });
//  //    function onAjaxSuccess(data){
	
//  //    }
// }


function radioImitation(num) {
r = 0;
checkBoxes = document.getElementsByTagName('input');
for(i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].value != num){
        checkBoxes[i].checked = false;
    }
    else{
    	checkBoxes[i].checked = true;
    }
    if(checkBoxes[i].checked){
        r = checkBoxes[i].value;
    }
}
canvasFill();
// doRequest(x_val, y_val, r);
}

function canvasFill(){


	checkBoxes = document.getElementsByTagName('input');
	r = 0;
    for(i = 0 ; i < checkBoxes.length; ++i){
        if(checkBoxes[i].checked){
            r = checkBoxes[i].value;
        }
    }

	canvas = document.getElementById("graph");

    context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(r > 0){
        drawFigure(context);
    }
    drawCoordinates(context);
}

function setPoint(event){
	canvas = document.getElementById("graph");
	pixel_transform = 50;
    rect = canvas.getBoundingClientRect();
    offset = (rect.width - canvas.width)/2 + 1;
    x = event.clientX - rect.left - offset;
    y = event.clientY - rect.top - offset;

    chbox = document.getElementsByTagName('input');
    r = 0;
    for(i = 0; i < chbox.length; i++){
        if(chbox[i].checked){
            r = chbox[i].value;
            break;
        }
    }
    if(r == 0){
        alert("Установите радиус");
    } else {
        real_x = (x-300)/pixel_transform;
        real_y = -(y-300)/pixel_transform;
			doRequest(real_x, real_y, r);
    }
}
function drawPoint(context, x, y, isInside){
    context.beginPath();
    if(isInside){
        context.fillStyle = "Green";
    } else {
        context.fillStyle = "Black";
    }
    context.arc(x, y, 3, 0*Math.PI, 2*Math.PI);
    context.fill();
}

function drawCoordinates(context){
	pixel_transform = 50;
    context.beginPath();
    /*Draw coordianates*/
    context.moveTo(300, 600);
    context.lineTo(300, 0);
    context.lineTo(305, 5);
    context.moveTo(300, 0);
    context.lineTo(295, 5);
    context.moveTo(0,300);
    context.lineTo(600,300);
    context.lineTo(595, 305);
    context.moveTo(600,300);
    context.lineTo(595,295);
    if(r > 0){
        pix = r * pixel_transform;
        /*Draw measures*/
        for(i = 300 + pix; i >= (300 - pix); i-=pix/2){
            context.moveTo(295, i);
            context.lineTo(305, i);
            context.moveTo(i,295);
            context.lineTo(i,305);
        }
    }
    context.strokeStyle="black";
    context.stroke();
    /*Draw coordinates text*/
    context.font = "16px Georgia";
    context.textBaseline="top";
    context.textAlign="left";
    context.fillStyle="black";
    context.fillText("Y", 310, 0);
    context.textAlign="right";
    context.textBaseline="bottom";
    context.fillText("X", 600, 290);
}

function drawFigure(context){
	pixel_transform = 50;
    pix = r * pixel_transform;
    /*Arc fill*/
    context.beginPath();
    context.arc(299,301,(r/2)*pixel_transform,0.5*Math.PI,Math.PI);
    context.moveTo((299 - (r/2) * pixel_transform),301);
    context.lineTo(299,301);
    context.lineTo(299,(301 + (r/2)*pixel_transform));
    /*Triangle fill*/
    context.moveTo((299 + r/2 *pixel_transform), 299);
    context.lineTo(299, 299);
    context.lineTo(299, (299 + r *pixel_transform));
    context.lineTo((299 + r/2 *pixel_transform), 299);
    /*Rectangle fill */
    context.rect(301,301, r/2*pixel_transform, -r*pixel_transform );
    context.closePath();
    context.fillStyle="#5c99ED";
    context.fill();
    /*Figure Draw End*/
}
window.onload = function() {
  canvasFill();
};


