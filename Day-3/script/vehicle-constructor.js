/**
public class vehicle
{
	String make;
	int yom;
	int price;

	public vehicle (String make,int yom,int price)
	{
		this.make = make;
		this.yom = yom;
		this.price = price;
	}


	public static void main(String args[])
	{
		vehicle raghuvehicle = new vehicle ('maruti',2017,70000);
		vehicle sunilvehicle = new vehicle ('Ford',2018,70000);
	}
}
**/


var vehicle = function (make,yom,price,color,speed)
{ 
	this.make = make;
	this.yom=yom;
	this.price = price;
	this.color = color;
	this.speed = speed;
}
console.log('in the script');
myvehicle = new vehicle('maruti',2017,650000,'white',120);
document.getElementById('vehicle1').innerHTML = 'Make :' +myvehicle.make + ' YOM :' +myvehicle.yom;