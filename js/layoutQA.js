// functions for building initial Q & A page

// hide/show
function toggle_show(id) {
	var e = document.getElementById(id);
	e.style.display = ((e.style.display!='none') ? 'none' : 'block');
	}

function loadTopic(topicQ,topic) {
	// remove unused divisions of previous page
	document.getElementById("topicsListNB").remove();
	document.getElementById("tableDiv1").remove();
	document.getElementById("notifyTopic").remove();
	document.getElementById("chooseTotalQ").remove();
	// build up the Q# button list
	listQ = '';
	for (var ind = 0; ind < topic.length; ind++) {
		jnd = ind + 1; // for printed item number
		listQ += '<li><a href="#" onclick="iqn =  ' + ind + '; genQ(' + ind +',dat);">' + jnd +'</a></li>';
	}
	// create Q# button
	document.getElementById("main").innerHTML += '<div class="btn-group" id="Q"><button type="button" class="btn btn-primary">Q#</button><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a>Questions</a></li>' + listQ +'</li></ul></div><label for="Q"><h4>&nbsp;&nbsp; On ' +  topicQ +'</h4></label>';
	// create initial Q & A page
	document.getElementById("main").innerHTML += '<p id="instructions"><a href=#><b><u>Instructions</u></a>&thinsp;<button id="show" type="button" onclick="$(' + "'#guide'" + ').show(); $(' + "'#hide'" + ').show(); $(' + "'#show'" + ').hide();">Show</button><button id="hide" onclick="$(' + "'#guide'" + ').hide(); $(' + "'#hide'" + ').hide(); $(' + "'#show'" + ').show();">Hide</button>:</b>  <span id="guide">Click on <a onclick="genQ(iqn,dat);iqn+=1;"><b>Next Question</b></a> below or <a><b>Q#</b></a> above to choose a particular question; click on answer choice then click the <a href="#"><b>Submit Answer</b></a> link for the correct answer.</span></p><div id="qa"><div id="question"><a id="qlabel" href="#" onclick="genQ(iqn,dat);"><b><u>Question</u>:</b></a></div><div id="answer"><div id="ansInfo"></div></div><br><br><button id="next" type="button" class="btn btn-primary" onclick="ansDat = genQ(iqn,dat);">Next Question</button></div><div id="end"><div id="endInfo"></div></div>';
}
