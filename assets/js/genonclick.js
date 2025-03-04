function changearr(iconnm) {
	var aicon = document.getElementById(iconnm);
	if (aicon.className == "fas fa-angle-down")
	{
		aicon.className = "fas fa-angle-left";
	}
	else
	{
		aicon.className = "fas fa-angle-down";
	}
}

function changeplus(nm) {
	// var alink = document.getElementById(nm);
	var buticon = document.getElementById(nm+"icon");
	// alert(alink.style.backgroundColor);
	if (buticon.className == "fas fa-plus")
	{
		// alink.style.backgroundColor = shadeColor('Red', 10%);
		buticon.className = "fas fa-minus";
	}
	else
	{
		// alink.style.backgroundColor = lighten(#053B08, 25%);
		// alink.style.backgroundColor = shadeColor(#053B08, 25);
		buticon.className = "fas fa-plus";
	}
}