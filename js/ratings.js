let data;
 function preload() {
 	data = loadJSON('js/itinerary.json');
 }

 function setup(){
	 noCanvas();
	 
	let trips = data.trips;
	let list = document.querySelector(".test") ;
	let list1 = document.querySelector(".tripsToRate")
	// sorting of top most itinerary
	let arraySorted = trips.sort((a, b) => (b.rating)-(a.rating))
	for (let i =0; i<3;i++){
		
		let iDiv = document.createElement('UL');
		iDiv.className = 'block';
		iDiv.textContent = arraySorted[i].itinerary;
		list.appendChild(iDiv);
	}
	
	function iter (){
	for (let j=0;j<trips.length;j++){
		let iDiv = document.createElement('DIV');
		iDiv.className = 'block1';
		iDiv.innerHTML = trips[j].itinerary;
		// let valueApp = trips[j];
		
		iDiv.addEventListener('click', itemSingle);
		list1.appendChild(iDiv);
		// counter =0;
		iDiv.appendChild = trips.itinerary[j];
		// counter += 1;

	}
}
setInterval(iter,2000 );
	}
	
const itemSingle = (jsonP) => {
	console.log('object value', jsonP.target);
	}

const incrementRating = () => {
	itinerary = loadJSON('js/itinerary.json');
	let currentRating=itinerary.rating;
	currentRating =+ currentRating;
	console.log(currentRating);

}

