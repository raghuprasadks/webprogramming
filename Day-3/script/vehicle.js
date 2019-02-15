var vehicle = 
{ 
	make:'Maruti',
	yom:2017,
	price:650000,
	color:'red',
	speed : 0, 
	start:
	function(){	
		speed = 0;
		console.log('vehicle is started : Speed ',speed);

	},

	move:
	function(){	
		speed = speed +5;
		console.log('vehicle is moved : Speed ',speed);
		return speed;
		
	},
	stop:
	function(){	
		speed = 0;
		console.log('vehicle is stopped : Speed ',speed);
	}
}

function startVehicle()
{
	console.log('start Vehicle');
	vehicle.start();
	document.getElementById('divid').innerHTML = 'Vehicle Started :Speed -' +vehicle.speed;	
}

function moveVehicle()
{
	console.log('Move Vehicle');
	var currspeed = vehicle.move();
	document.getElementById('divid').innerHTML = 'Vehicle Moved :Speed -' +currspeed;	
}

function stopVehicle()
{
	console.log('Stop Vehicle');
	vehicle.stop();
	document.getElementById('divid').innerHTML = 'Vehicle Stopped :Speed -' +vehicle.speed;	
}