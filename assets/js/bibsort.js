document.addEventListener('DOMContentLoaded', function() {
	var bbtn = document.getElementById("bsort-toggle");
	var bspan = document.getElementById("bsort-span");
	var initspan = document.getElementById("binit-text");
	window.addEventListener("load", function() {
	    localStorage.setItem("sortby", "Y");
	});
	bbtn.addEventListener("click", function() {
	    var iText = 'Sort by type';
	    var is = localStorage.getItem("sortby");
	    if(!is) 
		    is = "Y"; 
	    if (bspan.textContent.toLowerCase().includes(iText.toLowerCase())) {
			toggleBSort(is);
	     		bspan.textContent = 'Sort by year';
			initspan.textContent = 'Publications ordered by type. Click this button to change. ';
	    } else {
			toggleBSort(is);
	      		bspan.textContent = iText;
			initspan.textContent = 'Publications ordered by year. Click this button to change. ';
	    }
		// alert('Sortby set to'+localStorage.getItem("sortby"));
    	});
});

let toggleBSort = (sortby) => {
  if (sortby == "Y") {
    setBSort("K");
    document.getElementById("div-by-year").style.display = 'none';
    document.getElementById("div-by-kind").style.display = 'block';
  } else {
    setBSort("Y");
    document.getElementById("div-by-year").style.display = 'block';
    document.getElementById("div-by-kind").style.display = 'none';
  }
}

let setBSort = (sortby) =>  {
  localStorage.setItem("sortby", sortby);
};

function closeyeardiv(token) {
	var disp = document.getElementById("papers-"+token);
	var yicon = document.getElementById("bsec-toggle-"+token);
	if (disp.style.display != 'none')
	{
		disp.style.display = 'none';
		yicon.className = "fas fa-angle-left";
	}
	else
	{
		disp.style.display = 'block';
		yicon.className = "fas fa-angle-down";
	}
}




