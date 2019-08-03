var data;
 function preload() {
 	data = loadJSON('js/itinerary.json');
 }

 function setup(){
 	noCanvas();
	var trips = data.trips;
	var list = document.querySelector(".test") ;
	
	for (let i=0; i<trips.length; i++){
		var iDiv = document.createElement('UL');
		iDiv.className = 'block';
		iDiv.textContent = trips[i].itinerary
		list.appendChild(iDiv);
		
		
		// console.log(iDiv.textContent);
	}	
 }
// Rating stars JS//
