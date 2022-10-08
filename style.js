<!--V 1.2-->
<p>
<script type="text/javascript">// <![CDATA[
  
var x = document.getElementsByClassName('active');
for (var i = 0; i < x.length; i++) {
	x[i].style.fontStyle = 'italic';
	x[i].style.fontWeight = 'bold';
}

var ex = document.getElementsByClassName('banner');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.color = "#ffffff";
	ex[i].style.backgroundColor = "#5097c9";
	ex[i].style.padding = "10px";
	ex[i].style.borderRadius = "7px 7px 0px 0px";
	ex[i].style.fontSize = "large";
	ex[i].style.marginTop = "10px";
	ex[i].style.marginBottom = "10px";
	ex[i].style.fontWeight = "bold";
	ex[i].style.width = "100%";
	ex[i].innerHTML += "&nbsp;&nbsp;&nbsp;<a href='#' onClick='goto(\"menu\");return false;' style='font-size:small;font-variant: small-caps;color:#ffff00;' >TOP</a>";
}

var ex = document.getElementsByClassName('exercisebanner');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.color = "#ffffff";
	ex[i].style.backgroundColor = "#999999";
	ex[i].style.padding = "10px";
	ex[i].style.border = "solid";
	ex[i].style.borderWidth = "3px";
	ex[i].style.borderColor = "#999999";
	ex[i].style.borderRadius = "7px 7px 0px 0px";
	ex[i].style.fontWeight = "bold";
	ex[i].style.width = "80%";
}

var ex = document.getElementsByClassName('exercise');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.padding = "10px";
	ex[i].style.border = "solid";
	ex[i].style.borderWidth = "3px";
	ex[i].style.borderColor = "#999999";
	ex[i].style.borderRadius = "0px 0px 7px 7px";
	ex[i].style.backgroundColor = "#eeeeee";
	ex[i].style.width = "80%";
}

var ex = document.getElementsByClassName('navigation');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.padding = "10px";
	ex[i].style.width = "80%";
	ex[i].style.margin = "left";
}


var ex = document.getElementsByClassName('navlink');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.padding = "5px";
	ex[i].style.border = "solid";
	ex[i].style.width = "150px";
	ex[i].style.backgroundColor = "#5097c9";
	ex[i].style.color = "#ffffff";
	ex[i].style.display = "inline-block";
	ex[i].style.textAlign = "center";
}

var ex = document.getElementsByTagName('h2');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.fontSize = "x-large";
	ex[i].style.fontWeight = "bold";
	ex[i].style.color = "#5097c9";
}

var ex = document.getElementsByTagName('h3');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.fontSize = "large";
	ex[i].style.fontWeight = "bold";
	ex[i].style.color = "#5097c9";
}

var ex = document.getElementsByTagName('ul');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.marginBottom = "1rem";
}

var ex = document.getElementsByTagName('ol');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.marginBottom = "1rem";
}

var ex = document.getElementsByClassName('activity');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.padding = "0";
	ex[i].style.border = "0";
}

var ex = document.getElementsByClassName('activity-information');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.float = "right";
	ex[i].style.marginRight = "4.3em";
}


var ex = document.getElementsByClassName('contentwithoutlink');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.float = "left";
	ex[i].style.width = "100%";
	ex[i].style.marginBottom = "20px";
	for (var x = 0; x < ex[x].children.length; x++) {
		if (ex[i].children[0].children[0].children[0].classList.contains("due-date-table")) {
			ex[i].style.marginBottom = "0";
			ex[i].style.marginTop = "-20px";
		}
	}
}

var ex = document.getElementsByClassName('availabilityinfo');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.margin = "0";
}

var ex = document.getElementsByClassName('badge-info');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.backgroundColor = "aliceblue";
	ex[i].style.fontWeight = "inherit";
}

var ex = document.getElementsByClassName('mod-indent-outer');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.padding = "0 0 0 20px";
}

var ex = document.querySelectorAll("[data-region=activity-information]");
for (var i = 0; i < ex.length; i++) {
	ex[i].style.float = "right";
}

var ex = document.querySelectorAll("[data-region=completionrequirements]");
for (var i = 0; i < ex.length; i++) {
	ex[i].style.fontSize = "0.8em";
}

var ex = document.getElementsByTagName("table");
for (var i = 0; i < ex.length; i++) {
	if (ex[i].classList.length == 0) {
		ex[i].classList.add("table");
	}
}

var ex = document.getElementsByClassName('due-date-table');
for (var i = 0; i < ex.length; i++) {
	ex[i].style.marginTop = "-10px";
	var current = ex[i]
	current.getElementsByTagName('tr')[0].style.background = "linear-gradient(360deg, #f2f2f2, transparent)";
	for (var e = 0; e < current.getElementsByTagName('td').length; e++) {
		current.getElementsByTagName('td')[e].style.padding = "5px";
		current.getElementsByTagName('td')[e].style.fontSize = "0.9em";
	}
}

var ex = document.getElementsByClassName('ishidden');
for (var i = 0; i < ex.length; i++) {
	if (ex[i].parentElement.children[0].classList.contains('contentwithoutlink')) {
		ex[i].style.paddingBottom = "20px";
	}
}

function goto(where) {
	document.getElementById(where).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}
// ]]></script>
</p>
