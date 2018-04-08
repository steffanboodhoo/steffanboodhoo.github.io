jQuery(document).ready(function(){
	get_elems();
	
})

function code_spacing(elem){
	// id = 'test';
	// let elem = document.getElementById(id)
	let lines = elem.innerText.split('\n')
	let space_count=0, line_count=0;
	//find first none empty line
	while(lines[line_count]=="")
		line_count++;
	//find number of spaces indented => number of spaces before first character
	while(lines[line_count][space_count]==' ')
		space_count++;

	let new_lines = [];
	lines.forEach(function(line){
		if(line!=""){
			line = line.split("")
			console.log(typeof(line))
			line.splice(0,space_count)
			line = line.join('')
			line = line.replace('<','&lt;')
			line = line.replace('>','&gt;')
			line = line.replace('"','&quot;')
		}
		new_lines.push(line);
	})

	new_lines = new_lines.join('\n');
	elem.innerHTML = new_lines;
	/*$.getScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js", function() {
    	console.log("Script loaded and executed.");
    // here you can use anything you defined in the loaded script
	});*/
}

function get_elems(){
	let elems = document.getElementsByClassName("code-space");
	console.log(elems)
	Array.prototype.forEach.call(elems, function(e){
		code_spacing(e);
		// console.log(e.innerText);
	})
}