
getStation_Info()
getStation_Status()

async function getStation_Info(){
	const i=0;
	const response = await fetch('/info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'

          }
      })
	const data= await response.json();
	//const random=Math.floor(Math.random() * (data.length-7))
	for (let i=0; i<data.length; i++){
      if (data.error){
      	console.log(error)
      	console.error(error)
      } else {

		const searchButton=document.querySelector('form');
		const searchInput=document.querySelector('input');

		const station=document.getElementById('station');
		const address=document.getElementById('address');
		//const bike=document.getElementById('bike');
		//const dock=document.getElementById('dock');
		const station_ID=document.getElementById('station_ID');

		const station1=document.getElementById('station1');
		const address1=document.getElementById('address1');
		//const bike1=document.getElementById('bike1');
		//const dock1=document.getElementById('dock1');
		const station_ID1=document.getElementById('station_ID1');

		const station2=document.getElementById('station2');
		const address2=document.getElementById('address2');
		//const bike2=document.getElementById('bike2');
		//const dock2=document.getElementById('dock2');
		const station_ID2=document.getElementById('station_ID2');

		const station3=document.getElementById('station3');
		const address3=document.getElementById('address3');
		//const bike3=document.getElementById('bike3');
		//const dock3=document.getElementById('dock3');
		const station_ID3=document.getElementById('station_ID3');

		const station4=document.getElementById('station4');
		const address4=document.getElementById('address4');
		//const bike4=document.getElementById('bike4');
		//const dock4=document.getElementById('dock4');
		const station_ID4=document.getElementById('station_ID4');

		const station5=document.getElementById('station5');
		const address5=document.getElementById('address5');
		//const bike5=document.getElementById('bike5');
		//const dock5=document.getElementById('dock5');
		const station_ID5=document.getElementById('station_ID5');

		station.textContent = data[0].name;
		station1.textContent = data[1].name;
		station2.textContent = data[2].name;
		station3.textContent = data[3].name;
		station4.textContent = data[4].name;
		station5.textContent = data[5].name;

		address.textContent = data[0].address;
		address1.textContent = data[1].address;
		address2.textContent = data[2].address;
		address3.textContent = data[3].address;
		address4.textContent = data[4].address;
		address5.textContent = data[5].address;

		station_ID.textContent = data[0].station_id;
		station_ID1.textContent = data[1].station_id;
		station_ID2.textContent = data[2].station_id;
		station_ID3.textContent = data[3].station_id;
		station_ID4.textContent = data[4].station_id;
		station_ID5.textContent = data[5].station_id;


	  	searchButton.addEventListener('submit', event => {
	    	event.preventDefault()
	    	//console.log(searchInput.value)
	    	//address1.textContent = data[1].address;

  	})
	  }
  	}

}


async function getStation_Status(){
	const response = await fetch('/status')
	const data=await response.json()
	//console.log(data)
	for (let i=0; i<data.length; i++){
      if (data.error){
      	console.log(error)
      	console.error(error)
      } else {

		const searchButton=document.querySelector('form');
		const searchInput=document.querySelector('input');

		const bike=document.getElementById('bike');
		const dock=document.getElementById('dock');
		
		const bike1=document.getElementById('bike1');
		const dock1=document.getElementById('dock1');
		
		const bike2=document.getElementById('bike2');
		const dock2=document.getElementById('dock2');
		
		const bike3=document.getElementById('bike3');
		const dock3=document.getElementById('dock3');
		
		const bike4=document.getElementById('bike4');
		const dock4=document.getElementById('dock4');
		
		const bike5=document.getElementById('bike5');
		const dock5=document.getElementById('dock5');

		bike.textContent = data[0].num_bikes_available;
		bike1.textContent = data[1].num_bikes_available;
		bike2.textContent = data[2].num_bikes_available;
		bike3.textContent = data[3].num_bikes_available;
		bike4.textContent = data[4].num_bikes_available;
		bike5.textContent = data[5].num_bikes_available;

		dock.textContent = data[0].num_docks_available;
		dock1.textContent = data[1].num_docks_available;
		dock2.textContent = data[2].num_docks_available;
		dock3.textContent = data[3].num_docks_available;
		dock4.textContent = data[4].num_docks_available;
		dock5.textContent = data[5].num_docks_available;



	  	searchButton.addEventListener('submit', event => {
	    	event.preventDefault()
	    	//console.log(searchInput.value)
	    	//address1.textContent = data[1].address;

  		})
  	}
  }

}


/*async function getData(){
	const response = await fetch('/stat')
	const data=await response.json()
	console.log(data)
}*/