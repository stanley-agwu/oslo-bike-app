getStations()

async function getStations(){

	const searchButton=document.querySelector('form');
	const searchInput=document.querySelector('input');

	const station=document.getElementById('station');
	const address=document.getElementById('address');
	const bike=document.getElementById('bike');
	const dock=document.getElementById('dock');
	const station_ID=document.getElementById('station_ID');

	const station1=document.getElementById('station1');
	const address1=document.getElementById('address1');
	const bike1=document.getElementById('bike1');
	const dock1=document.getElementById('dock1');
	const station_ID1=document.getElementById('station_ID1');

	const station2=document.getElementById('station2');
	const address2=document.getElementById('address2');
	const bike2=document.getElementById('bike2');
	const dock2=document.getElementById('dock2');
	const station_ID2=document.getElementById('station_ID2');

	const station3=document.getElementById('station3');
	const address3=document.getElementById('address3');
	const bike3=document.getElementById('bike3');
	const dock3=document.getElementById('dock3');
	const station_ID3=document.getElementById('station_ID3');

	const station4=document.getElementById('station4');
	const address4=document.getElementById('address4');
	const bike4=document.getElementById('bike4');
	const dock4=document.getElementById('dock4');
	const station_ID4=document.getElementById('station_ID4');

	const station5=document.getElementById('station5');
	const address5=document.getElementById('address5');
	const bike5=document.getElementById('bike5');
	const dock5=document.getElementById('dock5');
	const station_ID5=document.getElementById('station_ID5');

	try{
		const response = await fetch('/info')
		const data= await response.json();

		const status_response = await fetch('/status')
		const status_data=await status_response.json()

		const r=Math.floor(Math.random() * (data.length-7))

		for (let i=0; i<data.length; i++){

			station.textContent = data[r].name;
			station1.textContent = data[r+1].name;
			station2.textContent = data[r+2].name;
			station3.textContent = data[r+3].name;
			station4.textContent = data[r+4].name;
			station5.textContent = data[r+5].name;

			address.textContent = data[r].address;
			address1.textContent = data[r+1].address;
			address2.textContent = data[r+2].address;
			address3.textContent = data[r+3].address;
			address4.textContent = data[r+4].address;
			address5.textContent = data[r+5].address;

			station_ID.textContent = data[r].station_id;
			station_ID1.textContent = data[r+1].station_id;
			station_ID2.textContent = data[r+2].station_id;
			station_ID3.textContent = data[r+3].station_id;
			station_ID4.textContent = data[r+4].station_id;
			station_ID5.textContent = data[r+5].station_id; 

			bike.textContent = status_data[r].num_bikes_available;
			bike1.textContent = status_data[r+1].num_bikes_available;
			bike2.textContent = status_data[r+2].num_bikes_available;
			bike3.textContent = status_data[r+3].num_bikes_available;
			bike4.textContent = status_data[r+4].num_bikes_available;
			bike5.textContent = status_data[r+5].num_bikes_available;

			dock.textContent = status_data[r].num_docks_available;
			dock1.textContent = status_data[r+1].num_docks_available;
			dock2.textContent = status_data[r+2].num_docks_available;
			dock3.textContent = status_data[r+3].num_docks_available;
			dock4.textContent = status_data[r+4].num_docks_available;
			dock5.textContent = status_data[r+5].num_docks_available;
		}


	  	searchButton.addEventListener('submit', async (event) => {
	    	event.preventDefault()
	    	//console.log(searchInput.value)
		    	
		})
	} catch(error){
		console.error(error)
		station.textContent = "There is an error!";;
		station1.textContent = "There is an error!";
		station2.textContent = "There is an error!";
		station3.textContent = "There is an error!";
		station4.textContent = "There is an error!";
		station5.textContent = "There is an error!";
	}
}

setInterval(getStations, 10000)
