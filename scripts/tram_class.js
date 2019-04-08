class tram {
    constructor(number, direction, longitude, latitude, lastStop, nextStop, marker) {
        this.number=number;
		this.direction=direction;
		this.longitude=longitude;
		this.latitude=latitude;
		this.lastStop=lastStop;
		this.nextStop=nextStop;
		this.waiting=0;
		this.marker=marker;
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
	
	getMarker(){
		return this.marker;
	}
}