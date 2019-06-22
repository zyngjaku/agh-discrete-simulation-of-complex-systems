class Tram {
    constructor(number, direction, longitude, latitude, previousStop, nextStop, routesID, nextStopIn, numer_kursu, markerColor) {
        this.number=number;
		this.direction=direction;
		this.longitude=longitude;
		this.latitude=latitude;
		this.previousStop=previousStop;
		this.nextStop=nextStop;
		this.routesID=routesID;
		this.intermediateID=0;
		this.timeBetweenIntermediatePoints=-90;
		this.waiting=10;
		this.nextStopIn=nextStopIn;
		this.marker=null;
		this.markerColor=markerColor;
		this.numberOfPassengers=0;
		this.directionLat=-255;
		this.directionLon=-255;
		this.numer_kursu=numer_kursu;
		this.numer_przystanku=0;
		this.detour=[]
    }
	
	getNumber() {
		return this.number;
	}
	
	setNumber(number) {
		this.number=number;
	}
	
	getNumerPrzystanku() {
		return this.numer_przystanku;
	}
	
	setNumerPrzystanku(numer_przystanku) {
		this.numer_przystanku=numer_przystanku;
	}
	
	getNumerKursu() {
		return this.numer_kursu;
	}
	
	getDirectionLat() {
		return this.directionLat;
	}
	
	setDirectionLat(directionLat) {
		this.directionLat=directionLat;
	}
	
	getDirectionLon() {
		return this.directionLon;
	}
	
	getTimeBetweenIntermediatePoints() {
		return this.timeBetweenIntermediatePoints;
	}
	
	setTimeBetweenIntermediatePoints(timeBetweenIntermediatePoints) {
		this.timeBetweenIntermediatePoints=timeBetweenIntermediatePoints;
	}		
	
	setDirectionLon(directionLon) {
		this.directionLon=directionLon;
	}
	
	setIntermediateID(intermediateID) {
		this.intermediateID=intermediateID;
	}
	
	getIntermediateID() {
		return this.intermediateID;
	}
	
	getNextStop() {
		return this.nextStop;
	}
	
	getRoutesID(){
		return this.routesID;
	}
	
	setRoutesID(routesID){
		this.routesID=routesID;
	}
	
	setNextStop(nextStop) {
		this.nextStop = nextStop;
	}
	
	getPreviousStop() {
		return this.previousStop;
	}
	
	setPreviousStop(previousStop) {
		this.previousStop = previousStop;
	}
	
	getDirection(){
		this.direction;
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
	
	getWaiting() {
		return this.waiting;
	}
	
	setWaiting(waiting) {
		this.waiting = waiting;
	}
	

	
	getDirection(){
		return this.direction;
	}

	setMarker(marker){
		this.marker=marker;
	}
	
	setNextStopIn(nextStopIn) {
		this.nextStopIn = nextStopIn;
	}
	
	getNextStopIn() {
		return this.nextStopIn;
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