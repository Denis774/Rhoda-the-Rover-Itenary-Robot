var data;
 function preload() {
 	data = loadJSON('js/itinerary.json');
 }

 function setup(){
	 noCanvas();
	 
	var trips = data.trips;
	var list = document.querySelector(".test") ;
	
	// for (let i=0; i<trips.length; i++){
	// 	var iDiv = document.createElement('UL');
	// 	iDiv.className = 'block';
	// 	iDiv.textContent = trips[i].itinerary;
	// 	// iDiv.textContent = trips.sort((a, b) => (b.rating)-(a.rating));
	// 	list.appendChild(iDiv);
		
		
		// console.log(iDiv.textContent);
		
	let arraySorted = trips.sort((a, b) => (b.rating)-(a.rating))
	for (let i =0; i<3;i++){
		console.log(arraySorted[i].itinerary);
		var iDiv = document.createElement('UL');
		iDiv.className = 'block';
		iDiv.textContent = arraySorted[i].itinerary;
		// iDiv.textContent = trips.sort((a, b) => (b.rating)-(a.rating));
		list.appendChild(iDiv);
		
	}
	}
		
//  }
// Rating stars JS//
