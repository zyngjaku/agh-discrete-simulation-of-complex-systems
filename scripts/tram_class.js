class Tram {
    constructor(number, direction, longitude, latitude, lastStop, nextStop, markerColor) {
        this.number=number;
		this.direction=direction;
		this.longitude=longitude;
		this.latitude=latitude;
		this.lastStop=lastStop;
		this.nextStop=nextStop;
		this.waiting=0;
		this.marker=null;
		this.markerColor=markerColor;
		this.numberOfPassengers=0;
    }
	
	getDirection(){
		this.direction;
	}
	
    whereAreYouGoing(){
        return "I am the tram "+this.number+ " " +this.direction;
    }
	
	getLat(){
		return this.latitude;
	}
	
	getLon(){
		return this.longitude;
	}
	
	setLat(latitude){
		this.latitude=latitude;
	}
	
	setLon(longitude){
		this.longitude=longitude;
	}
	
	getNumber(){
		return this.number;
	}
	
	getDirection(){
		return this.direction;
	}

	setMarker(marker){
		this.marker=marker;
	}
	
	getMarker(){
		return this.marker;
	}
	
	getMarkerColor(){
		return this.markerColor;
	}
	
	setNumberOfPassengers(numberOfPassengers){
		this.numberOfPassengers=numberOfPassengers;
	}
	
	getNumberOfPassengers(){
		return this.numberOfPassengers;
	}
}