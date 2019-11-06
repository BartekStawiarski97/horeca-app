//Bartek Stawiarski
//Applicatie-en Mediaontwikkelaar MBO nieveau 4

var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;
var totaalsnack8 = 0;
var totaalsnack16 = 0;


alert("Welkom bij daVinciCafé!");
alert("Prijskaart:\n fris: €2.50\n bier: €3.00\n wijn €4.50\n bitterballen 8 stuks €6.00\n bitterballen 16 stuks €12.00");

function Order(){
	var bestelling = prompt("Welke bestelling wilt u toevoegen?\n Kies uit: fris, bier, wijn of snack.\n Om uw bestelling te eindigen toets: stop.");
	if (bestelling == "fris"){
		var fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
		alert ("Er is" + " "+ fris + " " + "fris toegevoegd aan uw bestelling");
		totaalfris = Number(totaalfris) + Number(fris);
		Order();

	 }else if (bestelling == "bier"){
		var bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
	 	alert ("Er is" + " " + bier + " " + "bier toegevoegd aan uw bestelling");
		totaalbier = Number(totaalbier) + Number(bier);
		Order();

	 }else if (bestelling == "wijn"){
		var wijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling");
		alert ("Er is" + " "+ wijn + " " + "wijn toegevoegd aan uw bestelling");
		totaalwijn = Number(totaalwijn) + Number(wijn);
		Order();

	 }else if (bestelling == "snack"){
		var snack = prompt("Hoeveel bitterballen wilt u toevoegen aan uw bestelling: (8 of 16)?");
		if (snack == 8) {
			var snack8 = prompt("Hoeveel schalen van 8 bitterballen wilt u toevoegen?");
			alert ("Er zijn" + " " + snack8 + " " + "bitterbalschalen van 8 stuks toegevoegd");
			totaalsnack8 = Number(totaalsnack8) + Number(snack8);
			Order();

		}else if(snack == 16){
			var snack16 = prompt("Hoeveel schalen van 16 bitterballen wilt u toevoegen?");
			alert ("Er zijn" + " " + snack16 + " " + "bitterbalschalen van 16 stuks toegevoegd");
			totaalsnack16 = Number(totaalsnack16) + Number(snack16);
			Order();

		}else{
			alert("U kunt kiezen uit 8 of 16 bitterballen.");
			Order();
		}

	}else if (bestelling == "stop"){

    const fris = 2.50;
    const bier = 3.00;
    const wijn = 4.50;
    const snack8 = 6.00;
    const snack16 = 12.00;

		var prijsfris = (fris * totaalfris);
		var prijsbier = (bier * totaalbier);
		var prijswijn = (wijn * totaalwijn);
		var prijssnack8 = (snack8 * totaalsnack8);
		var prijssnack16 = (snack16 * totaalsnack16);

		document.write("U heeft" + " " + totaalfris + " " + "fris besteld." + "<br>");
		document.write(totaalfris + " " + "x €2,50"+ " " + " = " + "€" + prijsfris + " " + "<br><br>");
		document.write("U heeft" + " " + totaalbier + " " + "bier besteld." + "<br />");
		document.write(totaalbier + " " + "x €3,00"+ " " + " = " + "€" + prijsbier + " " + "<br><br>");
		document.write("U heeft" + " " + totaalwijn + " " + "wijn besteld." + "<br />");
		document.write(totaalwijn + " " + "x €4,50"+ " " + " = " + "€" + prijswijn + " " + "<br><br>");
		document.write("U heeft" + " " + totaalsnack8 + " " + "bitterbalschalen van 8 stuks besteld." + "<br>");
		document.write(totaalsnack8 + " " + "x €6,00"+ " " + " = " + "€" + prijssnack8 + " " + "<br><br>");
		document.write("U heeft" + " " + totaalsnack16 + " " + "bitterbalschalen van 16 stuks besteld." + "<br>");
		document.write(totaalsnack16 + " " + "x €12,00"+ " " + " = " + "€" + prijssnack16 + " " + "<br><br>");
		document.write("totaal prijs: €" + " " + (prijsfris + prijsbier + prijswijn + prijssnack8 + prijssnack16)+ " " + "<br><br><br><br>");
    document.write("U werd geholpen door Bartek.")


	}else{
		alert("U kunt bij ons een keuze maken uit: fris, bier, wijn en-of bitterballen.");
		Order();
	}
}

Order();
