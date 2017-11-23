var operator = "";
var total= 0;


//reset de var






function suppr()
{
	var valeur= document.getElementById("resultat").value;
	var longueur= valeur.length;
	var fin=longueur-1;

	valeur=valeur.substring(0,fin);
	document.getElementById("resultat").value= valeur;
}

function zero()
{

	var x= document.getElementById("zero").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function un()
{

	var x= document.getElementById("un").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}
function deux()
{

	var x= document.getElementById("deux").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function trois()
{

	var x= document.getElementById("trois").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function quatre()
{

	var x= document.getElementById("quatre").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function cinq()
{

	var x= document.getElementById("cinq").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function six()
{

	var x= document.getElementById("six").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function sept()
{

	var x= document.getElementById("sept").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function huit()
{

	var x= document.getElementById("huit").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}

function neuf()
{

	var x= document.getElementById("neuf").value;
	console.log(x);
	var valeur=document.getElementById("resultat").value;
	document.getElementById("resultat").value=valeur+x;
}



function addition()
{
	var x= document.getElementById("plus").value;
	var valeur= document.getElementById("resultat").value;
	document.getElementById("resultat").value="";

	operator=x;
	total=valeur;

	console.log(total);


}

function soustraction ()
{
	var x= document.getElementById("moins").value;
	var valeur= document.getElementById("resultat").value;
	document.getElementById("resultat").value="";

	operator=x;
	total=valeur;

	console.log(total);


}

function multiplication ()
{
	var x= document.getElementById("multiplier").value;
	var valeur= document.getElementById("resultat").value;
	document.getElementById("resultat").value="";

	operator=x;
	total=valeur;

	console.log(total);


}

function division ()
{
	var x= document.getElementById("diviser").value;
	var valeur= document.getElementById("resultat").value;
	document.getElementById("resultat").value="";



	operator=x;
	total=valeur;

	console.log(total);


}


function egal()
{

	var x = document.getElementById("resultat").value;

	switch(operator){
		case "+":
		document.getElementById("resultat").value = parseInt(total)+ parseInt(x);

		total=document.getElementById("resultat").value;

		console.log(total);

		break;

		case "-":
		document.getElementById("resultat").value = parseInt(total)- parseInt(x);

		total=document.getElementById("resultat").value;

		console.log(total);
		break;

		case "*":
		document.getElementById("resultat").value = parseInt(total)* parseInt(x);

		total=document.getElementById("resultat").value;

		console.log(total);
		break;

		case "/":

		var valeur =document.getElementById("resultat").value;

		if(valeur==0)

		{
			document.getElementById("resultat").value="Impossible de diviser par 0";
		}
		else{

			document.getElementById("resultat").value = parseInt(total)/ parseInt(x);

			total=document.getElementById("resultat").value;

			console.log(total);
			break;

		}

		

	}
}

function reset()
{
	document.getElementById("resultat").value="";
	total=0;
	operator="";

}



