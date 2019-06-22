<!doctype html>
<html>
    <head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="style.css">
     
		<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=yes' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js'></script>
		<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css' rel='stylesheet' />
		<script type="text/javascript" src="./scripts/trams_schedule.js" charset="utf-8"></script>
		<script type="text/javascript" src="./scripts/stops.js" charset="utf-8"></script> 
		<script type="text/javascript" src="./scripts/routes.js" charset="utf-8"></script> 
		<script type="text/javascript" src="./scripts/connections.js" charset="utf-8"></script> 
		<script type="text/javascript" src="./scripts/tram_fill.js" charset="utf-8"></script> 
		<script type="text/javascript" src="./scripts/tram_class.js" charset="utf-8"></script> 
	</head>
	 
    <body>
		<div id="map"> </div>
		
		<div id="show-time">Here it should be hour, but there isn't</div>
		
		<button class="pause-button" onclick="stopTime()" type="submit">
			<img src="./img/pause.png" width="15px" height="15px" alt="submit" />
		</button>
		
		<button class="play-button" onclick="runTime()" type="submit">
			<img src="./img/play.png" width="15px" height="15px" alt="submit" />
		</button>
		
		<button class="play-faster-button" onclick="runTimeFaster()" type="submit">
			<img src="./img/play-faster.png" width="30px" height="15px" alt="submit" />
		</button>
		
		<div class="box-shadow ">
			<div class="box-shadow-row">
				<div class="box-shadow-column" style="background-color:#6BC926;"> <p>pusto</p> </div>
				<div class="box-shadow-column" style="background-color:#D1CF1E;"> <p>więcej</p> </div>
				<div class="box-shadow-column" style="background-color:#EFBB0F;"> <p>sreednio</p> </div>
				<div class="box-shadow-column" style="background-color:#EF7120;"> <p>sporo</p> </div>
				<div class="box-shadow-column" style="background-color:#EF2A36;"> <p>za dużo</p> </div>
			</div>
		</div>
		
		<div id="right-box"> 
			<button onclick="buttonShowOrHideTram(this, '1')">1</button>
			<button onclick="buttonShowOrHideTram(this, '2')">2</button>
			<button onclick="buttonShowOrHideTram(this, '3')">3</button>
			<button onclick="buttonShowOrHideTram(this, '5')">5</button>
			<button onclick="buttonShowOrHideTram(this, '9')">9</button>
			<button onclick="buttonShowOrHideTram(this, '10')">10</button>
			<button onclick="buttonShowOrHideTram(this, '11')">11</button>
			<button onclick="buttonShowOrHideTram(this, '14')">14</button>
			<button onclick="buttonShowOrHideTram(this, '16')">16</button>
			<button onclick="buttonShowOrHideTram(this, '18')">18</button>
			<button onclick="buttonShowOrHideTram(this, '19')">19</button>
			<button onclick="buttonShowOrHideTram(this, '21')">21</button>
			<button onclick="buttonShowOrHideTram(this, '22')">22</button>
			<button onclick="buttonShowOrHideTram(this, '24')">24</button>
			<button onclick="buttonShowOrHideTram(this, '44')">44</button>
			<button onclick="buttonShowOrHideTram(this, '50')">50</button>
			<button onclick="buttonShowOrHideTram(this, '52')">52</button>
			<button onclick="buttonShowOrHideTram(this, '62')">62</button>
			<button onclick="buttonShowOrHideTram(this, '69')">69</button>
			<button onclick="buttonShowOrHideTram(this, '71')">71</button>
			<button onclick="buttonShowOrHideTram(this, '73')">73</button>
			<button onclick="buttonShowOrHideTram(this, '76')">76</button>
			<button onclick="buttonShowOrHideTram(this, '77')">77</button>
			<button onclick="buttonShowOrHideTram(this, '78')">78</button>

		</div>

		
		
		<script>
						/* INIT MAPBOX */
			mapboxgl.accessToken = 'pk.eyJ1IjoienluZ2llciIsImEiOiJjanRiYXY3bHkwaXdqNDNwY2MydDcwMG1kIn0.4AC7oex5FdmCaTQPiUnJ5Q';
			var map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/light-v9',
				center: [19.9449799, 50.0646501],
				minZoom: 11,
				zoom: 11
			});
			map.addControl(new mapboxgl.NavigationControl());
			
			/* ADD STOPS MARKERS */
			geojson.features.forEach(function(marker) {
				var el = document.createElement('div');
				el.className = 'stop-marker';

				new mapboxgl.Marker(el)
					.setLngLat(marker.geometry.coordinates)
					.setPopup(new mapboxgl.Popup({offset: 25})
						.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
					.addTo(map);
			});

			/* ON LOAD WEBSITE */
			window.onload = function () { 
			
			}		
			
			/* DECLARE VARIABLES */
			var weekday = new Array(7);
			weekday[0] = "Sun";
			weekday[1] = "Mon";
			weekday[2] = "Tue";
			weekday[3] = "Wed";
			weekday[4] = "Thu";
			weekday[5] = "Fri";
			weekday[6] = "Sat";
			
			var today = new Date();
			var sec = today.getSeconds();
			var min = today.getMinutes();
			var h = today.getHours();
			var day = today.getDay();
			
			/*
			day=1
			h=1;
			min=59;
			sec=59;
			*/
			
			var STATE_STOP = 0;
			var STATE_RUN = 10;
			var STATE_RUN_FASTER = 50;
			
			var current_speed = STATE_RUN;
			
			var trams_to_show = ["1", "2", "3", "5", "9", "10", "11", "14", "16", "18", "19", "21", "22", "24", "44", "50", "52", "62", "69", "71", "73", "76", "77", "78"];
			var trams = [];
			
			/* TIME */
			function checkTime(time){ return time<10 ? '0'+time : time }
			function addSec(sec){ return sec<59? sec+1 : 0 }
			function addMin(min){ return addSec(min); }
			function addH(h){ return h<23? h+1 : 0 }
			function addDay(day){ return day<5? day+1 : 0 }
			
			function manageTime() {
				sec=addSec(sec);
				if(sec==0) min=addMin(min);
				if(min==0 && sec==0) h=addH(h);
				if(min==0 && sec==0 && h==0) day=addDay(day);
				
				var time = weekday[day] + ", " + checkTime(h) + ":" + checkTime(min) + ":" + checkTime(sec);
				document.getElementById("show-time").innerHTML = time;
			}
			
			function stopTime(){
				current_speed = STATE_STOP;
			}
			
			function runTime(){
				if(current_speed == STATE_STOP){
					current_speed = STATE_RUN;
					update();
				}
				else if(current_speed == STATE_RUN_FASTER){
					current_speed = STATE_RUN;
				}
			}
			
			function runTimeFaster(){
				if(current_speed == STATE_STOP){
					current_speed = STATE_RUN_FASTER;
					update();
				}
				else if(current_speed == STATE_RUN){
					current_speed = STATE_RUN_FASTER;
				}
			}
			
			/* MAIN LOOP */
			function update() {
				manageTime();				
				checkIfNewTramStart();
				
				var i=0;
				while(i < trams.length){ 
					var isDeleted = false;
					
					if(trams[i].getWaiting()==0) {	
						if(trams[i].getLat() > 50.151558 || trams[i].getLat() < 49.955369){
							//Cheking if tram isn't out of the Cracow
							console.log("Error: Tram no. " + trams[i].getNumber() + " got lost while going from " + trams[i].getPreviousStop() + " to " + trams[i].getNextStop() + " :/");
						}
					
						var obj_routes = JSON.parse(routes);		
									
						(obj_routes.routes).forEach(function(routes_) {
							if(!isDeleted){
							if(routes_.from==trams[i].getPreviousStop() && routes_.to==trams[i].getNextStop()){
								if(trams[i].getTimeBetweenIntermediatePoints()==null) {
									trams[i].setTimeBetweenIntermediatePoints(trams[i].getNextStopIn()/(routes_.lon.length-trams[i].getIntermediateID()));
								}
								
								if(checkIfTramReachStop(i, routes_)) {
									//Tram reach tram stop								
									if(!ifTramFinishRouteAndDeleteTramIfFinish(i, routes_)) {
										//Tram don't finish route
										trams[i].setNumerPrzystanku(trams[i].getNumerPrzystanku()+1);
										
										var obj_fill = JSON.parse(tram_fill);		
										(obj_fill.trams).forEach(function(trams_) {
											if(trams_.number==trams[i].getNumber()) {
												(trams_.days).forEach(function(days_) {
													if(days_.min_day<=day && days_.max_day>=day){
														determineTramColor(i, days_.fill[trams[i].getNumerKursu()-1].num_of_passengers[trams[i].getNumerPrzystanku()]);
														
														trams[i].setMarker(new mapboxgl.Marker(trams[i].getMarkerColor()).setLngLat([trams[i].getLat(), trams[i].getLon()]).addTo(map));
													}
												});
											}
										});
										//TODO: Ustaw ile ma czekać tramwaj i zmień kolor w zależności od natłoczenia
									
										setNewStopForTram(i);
									}
									else{
										isDeleted=true;
										console.clear();
										console.log("Numbers of trams in use: " + trams.length);
									}
								}
								else if(checkIfTramReachIntermediatePoint(i, routes_)){
									//Intermediate point
									trams[i].setIntermediateID(trams[i].getIntermediateID()+1);
								}
								else {
									//Change tram position
									trams[i].setLon(trams[i].getLon()+(routes_.lon[trams[i].getIntermediateID()]-trams[i].getLon())/(trams[i].getNextStopIn()-trams[i].getTimeBetweenIntermediatePoints()*(routes_.lon.length-trams[i].getIntermediateID()-1)));
									trams[i].setLat(trams[i].getLat()+(routes_.lat[trams[i].getIntermediateID()]-trams[i].getLat())/(trams[i].getNextStopIn()-trams[i].getTimeBetweenIntermediatePoints()*(routes_.lat.length-trams[i].getIntermediateID()-1)));
								}
									
							
							}
							}
						});
					}
					else {
						trams[i].setWaiting(trams[i].getWaiting()-1);
					}						
					
					if(!isDeleted){
						trams[i].setNextStopIn(trams[i].getNextStopIn()-1);
						trams[i].getMarker().setLngLat([trams[i].getLon(), trams[i].getLat()]);	
						
						if(trams_to_show.includes(trams[i].getNumber())){
							trams[i].getMarker().addTo(map);
						}
						else{
							trams[i].getMarker().remove();
						}
						
						i+=1;
					}
				}
				
				if(current_speed!=0) setTimeout(update, 1000/current_speed);
			}
			update();

			function determineTramColor(tram_id, number_of_passengers_in_tram) {
				if(number_of_passengers_in_tram > 200*0.8)
					trams[tram_id].getMarkerColor().className = 'tram-crowd-5';
				else if(number_of_passengers_in_tram > 200*0.6)
					trams[tram_id].getMarkerColor().className = 'tram-crowd-4';
				else if(number_of_passengers_in_tram > 200*0.4)
					trams[tram_id].getMarkerColor().className = 'tram-crowd-3';
				else if(number_of_passengers_in_tram > 200*0.2)
					trams[tram_id].getMarkerColor().className = 'tram-crowd-2';
				else
					trams[tram_id].getMarkerColor().className = 'tram-crowd-1';
			}

			function changeColorOfButton(this_, makeButtonActive){				
				if(makeButtonActive) {
					this_.style.backgroundColor = "#12B5E8";
					this_.style.color = "#000";
				}
				else {
					this_.style.backgroundColor = "#fff"
					this_.style.color = "#12B5E8";
				}
			}
		
			function buttonShowOrHideTram(this_, number) {
				if(trams_to_show.includes(number)) {
					for(var tram_id=0; tram_id<trams_to_show.length; tram_id+=1) {
						if(trams_to_show[tram_id] == number) {
							trams_to_show.splice(tram_id,1);
						}
					}
					
					changeColorOfButton(this_, true);
				}
				else {
					trams_to_show.push(number);
					
					changeColorOfButton(this_, false);
				}
				
				if(current_speed == 0){
					for(var tram_id=0; tram_id<trams.length; tram_id+=1){
						if(trams_to_show.includes(trams[tram_id].getNumber())){
							trams[tram_id].getMarker().addTo(map);
						}
						else{
							trams[tram_id].getMarker().remove();
						}
					}
				}
			}
			
			function checkIfNewTramStart() {
				if(sec==0){
					var obj = JSON.parse(trams_schedule);			
					
					(obj.trams).forEach(function(trams_) {					
						(trams_.days).forEach(function(days_) {
							if(days_.min_day<=day && days_.max_day>=day){
								var numer_kursu=0;
								(days_.time).forEach(function(time_) {
									if(time_.hours == h){
										for(var i=0; i<time_.minutes.length; i++){
											numer_kursu+=1;
											if(time_.minutes[i] == min){
												writeMessage("Tram no. " + trams_.number + " start from " + trams_.first_stop + " in direction " + trams_.last_stop);
												var counter_routesID = findRoutesID(trams_);
												
												trams.push(new Tram(trams_.number, trams_.last_stop, trams_.lat, trams_.lng, trams_.first_stop, trams_.route[1], counter_routesID, null, numer_kursu, document.createElement('div')));
												trams[trams.length-1].setNextStopIn(findTimeToNextStop(trams.length-1));									
												trams[trams.length-1].getMarkerColor().className = 'tram-crowd-1';
												trams[trams.length-1].setMarker(new mapboxgl.Marker(trams[trams.length-1].getMarkerColor()).setLngLat([trams_.lat, trams_.lng]).addTo(map));
												
												console.clear();
												console.log("Numbers of trams in use: " + trams.length);
											}
										}
									}
									else {
										numer_kursu+=time_.minutes.length;
									}
								});
							}
					});					
					});
				}
			}
			
			function checkIfTramReachStop(tram_id, routes_) {
				return trams[tram_id].getLat()==routes_.to_loc[0] && trams[tram_id].getLon()==routes_.to_loc[1];
			}
			
			function ifTramFinishRouteAndDeleteTramIfFinish(tram_id, routes_) {
				
				if(trams[tram_id].getDirection()==routes_.to){
					writeMessage("Tram no. " + trams[tram_id].getNumber() + " arrived to " + trams[tram_id].getDirection());
					trams[tram_id].getMarker().remove();
					trams.splice(tram_id,1);
					
					return true;
				}
				
				return false;
			}
			
			function checkIfTramReachIntermediatePoint(tram_id, routes_) {
				return trams[tram_id].getLon()==routes_.lon[trams[tram_id].getIntermediateID()] && trams[tram_id].getLat()==routes_.lat[trams[tram_id].getIntermediateID()];
			}
			
			function setNewStopForTram(tram_id) {				
				var obj_trams = JSON.parse(trams_schedule);		
				(obj_trams.trams).forEach(function(trams_) {
					if(trams_.last_stop==trams[tram_id].getDirection() && trams_.number==trams[tram_id].getNumber()) {
						for(var j=0; j<trams_.route.length-1; j++) {
							if(trams_.route[j]==trams[tram_id].getNextStop()){
								trams[tram_id].setPreviousStop(trams_.route[j]);
								trams[tram_id].setNextStop(trams_.route[j+1]);
								
								trams[tram_id].setIntermediateID(0);
								trams[tram_id].setTimeBetweenIntermediatePoints(null);
								trams[tram_id].setNextStopIn(findTimeToNextStop(tram_id));
								return true;
							}
						}
					}
				});
				
				return false;
			}
			
			function findRoutesID(trams_) {
				var counter_routesID=0;
				var obj_routes = JSON.parse(routes);	
				
				(obj_routes.routes).forEach(function(routes_) {
					if(routes_.from==trams_.first_stop && routes_.to==trams_.route[1]){
						return counter_routesID;
					}
					else {
						counter_routesID+=1;
					}
				});
				
				return counter_routesID;
			}
			
			function findTimeToNextStop(tram_id) {
				var firstId=-1;
				var secondId=-1;
				for(var j=0; j<stops_name.length; j++) {
					if(stops_name[j]==trams[tram_id].getPreviousStop()) {
						firstId=j;
					}
					
					if(stops_name[j]==trams[tram_id].getNextStop()) {
						secondId=j;
					}
				}
				if(connections[firstId][secondId] == null){
					console.log(trams[tram_id].getPreviousStop() + " -> " + trams[tram_id].getNextStop());
					console.log(firstId + " -> " + secondId);
					console.log(connections[firstId][secondId]);
				}
				return connections[firstId][secondId]*60
			}
			
			function writeMessage(text){
				var time = weekday[day] + ", " + checkTime(h) + ":" + checkTime(min) + ":" + checkTime(sec);
				console.log("[" + time + "] " + text);
			}
			
		</script>
    </body>
</html>


<!--
map.on('load', function () {

	map.addLayer({
		"id": "route",
		"type": "line",
		"source": {
			"type": "geojson",
			"data": {
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "LineString",
					"coordinates": [
						[19.957604166666666,50.01228611111111],
						[19.960451388888888,50.01255944444444],
						[19.960451388888888,50.01255944444444],
						[19.960451388888888,50.01255944444444]
					]
				}
			}
		},
		"layout": {
			"line-join": "round",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "#888",
			"line-width": 3
		}
		
	});
});
-->