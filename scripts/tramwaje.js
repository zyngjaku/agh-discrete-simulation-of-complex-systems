var tramwaje='{ "trams": [{ "number": "50", "first_stop": "Kurdwanów P+R", "last_stop": "Krowodrza Górka", "route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"], "lat": 19.950464166666666, "lng": 50.01358722222222, "days": [{ "min_day": 1, "max_day": 5, "time": [{ "hours": 5, "minutes": [4, 18, 31, 41, 54] }, { "hours": 6, "minutes": [1, 10, 20, 27, 32, 37, 43, 49, 53, 57] }, { "hours": 7, "minutes": [3, 8, 12, 18, 23, 27, 33, 38, 42, 48, 53, 57] }, { "hours": 8, "minutes": [3, 8, 12, 18, 23, 28, 35, 40, 46, 55] }, { "hours": 9, "minutes": [2, 10, 17, 24, 32, 39, 47, 51] }, { "hours": 10, "minutes": [2, 10, 17, 24, 32, 39, 47, 51] }, { "hours": 11, "minutes": [2, 10, 17, 24, 32, 39, 47, 51] }, { "hours": 12, "minutes": [2, 10, 17, 24, 32, 39, 47, 51] }, { "hours": 13, "minutes": [2, 10, 17, 24, 32, 39, 47, 51] }, { "hours": 14, "minutes": [3, 9, 17, 24, 29, 34, 39, 44, 49, 54, 59] }, { "hours": 15, "minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59] }, { "hours": 16, "minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59] }, { "hours": 17, "minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 51, 59] }, { "hours": 18, "minutes": [6, 11, 17, 22, 29, 36, 41, 47, 52, 56] }, { "hours": 19, "minutes": [2, 10, 17, 25, 32, 41, 47, 55] }, { "hours": 20, "minutes": [2, 10, 17, 24, 31, 37, 42, 50, 58] }, { "hours": 21, "minutes": [5, 13, 20, 28, 37, 46, 59] }, { "hours": 22, "minutes": [14, 29, 50] }, { "hours": 23, "minutes": [6, 26] }] }, { "min_day": 6, "max_day": 6, "time": [{ "hours": 5, "minutes": [2, 22, 42] }, { "hours": 6, "minutes": [2, 22, 42] }, { "hours": 7, "minutes": [2, 22, 42] }, { "hours": 8, "minutes": [2, 22, 42, 54] }, { "hours": 9, "minutes": [4, 14, 24, 34, 54] }, { "hours": 10, "minutes": [0, 14, 24, 34, 54] }, { "hours": 11, "minutes": [4, 14, 24, 34, 54] }, { "hours": 12, "minutes": [4, 14, 24, 34, 54] }, { "hours": 13, "minutes": [4, 14, 24, 34, 54] }, { "hours": 14, "minutes": [4, 14, 24, 34, 54] }, { "hours": 15, "minutes": [4, 14, 24, 34, 54] }, { "hours": 16, "minutes": [4, 14, 24, 34, 54] }, { "hours": 17, "minutes": [4, 14, 24, 34, 54] }, { "hours": 18, "minutes": [4, 14, 24, 34, 54] }, { "hours": 19, "minutes": [4, 14, 24, 34, 54] }, { "hours": 20, "minutes": [3, 22, 42] }, { "hours": 21, "minutes": [3, 22, 42] }, { "hours": 22, "minutes": [3, 22, 42] }, { "hours": 23, "minutes": [2, 35] }] }, { "min_day": 0, "max_day": 0, "time": [{ "hours": 5, "minutes": [2, 32] }, { "hours": 6, "minutes": [2, 32] }, { "hours": 7, "minutes": [2, 32] }, { "hours": 8, "minutes": [3, 33, 54] }, { "hours": 9, "minutes": [4, 14, 24, 34, 54] }, { "hours": 10, "minutes": [4, 14, 24, 34, 54] }, { "hours": 11, "minutes": [4, 14, 24, 34, 54] }, { "hours": 12, "minutes": [4, 14, 24, 34, 54] }, { "hours": 13, "minutes": [4, 14, 24, 34, 54] }, { "hours": 14, "minutes": [4, 14, 24, 34, 54] }, { "hours": 15, "minutes": [4, 14, 24, 34, 54] }, { "hours": 16, "minutes": [4, 14, 24, 34, 54] }, { "hours": 17, "minutes": [4, 14, 24, 34, 54] }, { "hours": 18, "minutes": [4, 14, 24, 34, 54] }, { "hours": 19, "minutes": [4, 14, 24, 34, 54] }, { "hours": 20, "minutes": [3, 22, 42] }, { "hours": 21, "minutes": [3, 22, 42] }, { "hours": 22, "minutes": [3, 22, 42] }, { "hours": 23, "minutes": [2, 35] }] }] }]}';


var przystanki = ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"];
var lat_ = [19.95046416666666, 19.956341388888887, 19.96479777777778, 19.971496944444443, 19.977535, 19.980542777777778, 19.97692888888889, 19.977083055555557, 19.983126944444443]
var lon_ = [50.01358722222222, 50.01237861111111, 50.01347194444445, 50.01542611111111, 50.01845083333333, 50.02336694444445,  50.026936944444444, 50.03347888888889, 50.040685833333335]
var polaczenia = [
  [0, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [1, 0, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, 1, 0, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 1, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, 2, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, 2, 0, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, 1, 0, 3, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 3, 0, 2, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, 2, 0, 1, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, 1, 0, 2, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, 2, 0, 1, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, 1, 0, 1, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, 1, 0, 4, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, 4, 0, 2, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0, 2, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0, 2, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 0, 2, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0, 2, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0, 1, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 0, 2],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2, 0],
];

/*

var items = [
  [0, 1, N, N, 3],
  [1, 0, N, 1, N],
  [N, N, 0, 2, N],
  [N, 1, 2, 0, N],
  [3, N, N, N, 0]
];

var items = [
  [0, 1, null, null, 3],
  [1, 0, null, 1, null],
  [null, null, 0, 2, null],
  [null, 1, 2, 0, null],
  [3, null, null, null, 0]
];


{
	"trams": [{
		"number": "50",
		"first_stop": "Kurdwanów P+R",
		"last_stop": "Krowodrza Górka",
		"route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
		"lat": 19.950464166666666,
		"lng": 50.01358722222222,
		"time": [{
			"hours": 18,
			"minutes": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
		}, {
			"hours": 19,
			"minutes": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
		}]
	}, {
		"number": "78",
		"first_stop": "Mały Płaszów",
		"last_stop": "Borek Fałecki",
		"route": ["Mały Płaszów P+R", "Rzebika", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Stradom", "Orzeszkowej", "Centrum Kongresowe ICE", "Szwedzka", "Kapelanka", "Słomiana", "Kobierzyńska", "Borsucza", "Brożka", "Łagiewniki", "Łagiewniki ZUS", "Solvay", "Borek Fałęcki I", "Borek Fałęcki"],
		"lat": 20.001500555555555,
		"lng": 50.03990611111111,
		"time": [{
			"hours": 18,
			"minutes": [0, 7, 15, 22, 30, 37, 45, 52]
		}, {
			"hours": 19,
			"minutes": [0, 7, 15, 22, 30, 37, 45, 52]
		}]
	}]
}







{
	"trams": [{
		"number": "1",
		"first_stop": "Wzgórza Krzesławickie",
		"last_stop": "Salwator",
		"route": ["Wzgórza Krzesławickie", "Jarzębiny", "Darwina", "Wiadukty", "Wańkowicza", "Cienista", "Teatr Ludowy", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Centralna", "Rondo 308. Dywizjonu", "M1 Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Plaza", "Dąbie", "Ofiar Dąbia", "Fabryczna", "Francesco Nullo", "Teatr Variété", "Rondo Grzegórzeckie", "Hala Targowa", "Starowiślna", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Jubilat", "Komorowskiego", "Salwator", "Salwator"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	},{
		"number": "1",
		"first_stop": "Salwator",
		"last_stop": "Wzgórza Krzesławickie",
		"route": ["Salwator", "Salwator", "Komorowskiego", "Jubilat", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Hala Targowa", "Rondo Grzegórzeckie", "Teatr Variété", "Francesco Nullo", "Fabryczna", "Ofiar Dąbia", "Dąbie", "Plaza", "TAURON Arena Kraków Al. Pokoju", "M1 Al. Pokoju", "Rondo 308. Dywizjonu", "Centralna", "Rondo Czyżyńskie", "Bieńczycka", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Teatr Ludowy", "Cienista", "Wańkowicza", "Wiadukty", "Darwina", "Jarzębiny", "Wzgórza Krzesławickie"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "2",
		"first_stop": "Salwator",
		"last_stop": "Cmentarz Rakowicki",
		"route": ["Salwator", "Salwator", "Komorowskiego", "Jubilat", "Filharmonia", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Lubicz", "Uniwersytet Ekonomiczny", "Rakowicka", "Cmentarz Rakowicki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "2",
		"first_stop": "Cmentarz Rakowicki",
		"last_stop": "Salwator",
		"route": ["Cmentarz Rakowicki", "Cmentarz Rakowicki", "Rakowicka", "Uniwersytet Ekonomiczny", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Jubilat", "Komorowskiego", "Salwator", "Salwator"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "3",
		"first_stop": "Nowy Bieżanów P+R",
		"last_stop": "Krowodrza Górka",
		"route": ["Nowy Bieżanów P+R", "Ćwiklińskiej", "Nowy Prokocim", "Teligi", "Prokocim Szpital", "Prokocim", "Wlotowa", "Bieżanowska", "Kabel", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Poczta Główna", "Teatr Słowackiego", "Dworzec Główny Zachód", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "3",
		"first_stop": "Krowodrza Górka",
		"last_stop": "Nowy Bieżanów P+R",
		"route": ["Krowodrza Górka", "Bratysławska", "Szpital Narutowicza", "Dworzec Towarowy", "Politechnika", "Dworzec Główny Zachód", "Teatr Słowackiego", "Poczta Główna", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Kabel", "Bieżanowska", "Wlotowa", "Prokocim", "Prokocim Szpital", "Teligi", "Nowy Prokocim", "Ćwiklińskiej", "Nowy Bieżanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "5",
		"first_stop": "Wzgórza Krzesławickie",
		"last_stop": "Krowodrza Górka",
		"route": ["Wzgórza Krzesławickie", "Jarzębiny", "Darwina", "Wiadukty", "Wańkowicza", "Cienista", "Teatr Ludowy", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "5",
		"first_stop": "Krowodrza Górka",
		"last_stop": "Wzgórza Krzesławickie",
		"route": ["Krowodrza Górka", "Bratysławska", "Szpital Narutowicza", "Dworzec Towarowy", "Politechnika", "Dworzec Główny Tunel", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Bieńczycka", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Teatr Ludowy", "Cienista", "Wańkowicza", "Wiadukty", "Darwina", "Jarzębiny", "Wzgórza Krzesławickie"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "9",
		"first_stop": "Mistrzejowice",
		"last_stop": "Nowy Bieżanów P+R",
		"route": ["Mistrzejowice", "Miśnieńska", "Os.Złotego Wieku", "Rondo Piastowskie", "Dunikowskiego", "Rondo Hipokratesa", "DH Wanda", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Zabłocie", "Klimeckiego", "Kuklińskiego", "Gromadzka", "Lipska", "Dworzec Płaszów Estakada", "Kabel", "Bieżanowska", "Wlotowa", "Prokocim", "Prokocim Szpital", "Teligi", "Nowy Prokocim", "Ćwiklińskiej", "Nowy Bieżanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "9",
		"first_stop": "Nowy Bieżanów P+R",
		"last_stop": "Mistrzejowice",
		"route": ["Nowy Bieżanów P+R", "Ćwiklińskiej", "Nowy Prokocim", "Teligi", "Prokocim Szpital", "Prokocim", "Wlotowa", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Bieńczycka", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "DH Wanda", "Rondo Hipokratesa", "Dunikowskiego", "Rondo Piastowskie", "Os.Złotego Wieku", "Miśnieńska", "Mistrzejowice"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "10",
		"first_stop": "Pleszów",
		"last_stop": "Łagiewniki",
		"route": ["Pleszów", "Koksochemia", "Meksyk", "Brama nr 5", "Brama nr 4", "Fort Mogiła", "Bardosa", "Suche Stawy", "Klasztorna", "Os.Na Skarpie", "Plac Centralny im. R.Reagana", "Os.Kolorowe", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Hala Targowa", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "10",
		"first_stop": "Łagiewniki",
		"last_stop": "Pleszów",
		"route": ["Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Hala Targowa", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Os.Kolorowe", "Plac Centralny im. R.Reagana", "Os.Na Skarpie", "Klasztorna", "Suche Stawy", "Bardosa", "Fort Mogiła", "Brama nr 4", "Brama nr 5", "Meksyk", "Koksochemia", "Pleszów"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "11",
		"first_stop": "Mały Płaszów P+R",
		"last_stop": "Czerwone Maki P+R",
		"route": ["Mały Płaszów P+R", "Rzebika", "Lipska", "Dworzec Płaszów Estakada", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Limanowskiego", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki", "Łagiewniki", "Brożka", "Borsucza", "Lipińskiego", "Grota-Roweckiego", "Norymberska", "Ruczaj", "Kampus UJ", "Chmieleniec", "Czerwone Maki P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "11",
		"first_stop": "Czerwone Maki P+R",
		"last_stop": "Mały Płaszów P+R",
		"route": ["Czerwone Maki P+R", "Chmieleniec", "Kampus UJ", "Ruczaj", "Norymberska", "Grota-Roweckiego", "Lipińskiego", "Borsucza", "Brożka", "Łagiewniki", "Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Limanowskiego", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Dworzec Płaszów Estakada", "Lipska", "Rzebika", "Mały Płaszów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "14",
		"first_stop": "Mistrzejowice",
		"last_stop": "Cichy Kącik",
		"route": ["Mistrzejowice", "Miśnieńska", "Os.Złotego Wieku", "Rondo Piastowskie", "Dunikowskiego", "Rondo Hipokratesa", "DH Wanda", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Centralna", "Rondo 308. Dywizjonu", "M1 Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Plaza", "Dąbie", "Ofiar Dąbia", "Fabryczna", "Francesco Nullo", "Teatr Variété", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Uniwersytet Jagielloński", "Muzeum Narodowe", "Oleandry", "Park Jordana", "Reymana", "Cichy Kącik"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "14",
		"first_stop": "Cichy Kącik",
		"last_stop": "Mistrzejowice",
		"route": ["Cichy Kącik", "Reymana", "Park Jordana", "Oleandry", "Muzeum Narodowe", "Uniwersytet Jagielloński", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Lubicz", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Teatr Variété", "Francesco Nullo", "Fabryczna", "Ofiar Dąbia", "Dąbie", "Plaza", "TAURON Arena Kraków Al. Pokoju", "M1 Al. Pokoju", "Rondo 308. Dywizjonu", "Centralna", "Rondo Czyżyńskie", "Bieńczycka", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "DH Wanda", "Rondo Hipokratesa", "Dunikowskiego", "Rondo Piastowskie", "Os.Złotego Wieku", "Miśnieńska", "Mistrzejowice"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "16",
		"first_stop": "Mistrzejowice",
		"last_stop": "Bardosa",
		"route": ["Mistrzejowice", "Miśnieńska", "Os.Złotego Wieku", "Rondo Piastowskie", "Dunikowskiego", "Rondo Hipokratesa", "DH Wanda", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Os.Zgody", "Plac Centralny im. R.Reagana", "Os.Na Skarpie", "Klasztorna", "Suche Stawy", "Bardosa"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "16",
		"first_stop": "Bardosa",
		"last_stop": "Mistrzejowice",
		"route": ["Bardosa", "Suche Stawy", "Klasztorna", "Os.Na Skarpie", "Plac Centralny im. R.Reagana", "Os.Zgody", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "DH Wanda", "Rondo Hipokratesa", "Dunikowskiego", "Rondo Piastowskie", "Os.Złotego Wieku", "Miśnieńska", "Mistrzejowice"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "18",
		"first_stop": "Czerwone Maki P+R",
		"last_stop": "Krowodrza Górka",
		"route": ["Czerwone Maki P+R", "Chmieleniec", "Kampus UJ", "Ruczaj", "Norymberska", "Grota-Roweckiego", "Lipińskiego", "Kobierzyńska", "Słomiana", "Kapelanka", "Szwedzka", "Centrum Kongresowe ICE", "Orzeszkowej", "Stradom", "Starowiślna", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Teatr Bagatela", "Stary Kleparz", "Pędzichów", "Nowy Kleparz", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "18",
		"first_stop": "Krowodrza Górka",
		"last_stop": "Czerwone Maki P+R",
		"route": ["Krowodrza Górka", "Bratysławska", "Szpital Narutowicza", "Dworzec Towarowy", "Nowy Kleparz", "Pędzichów", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Stradom", "Orzeszkowej", "Centrum Kongresowe ICE", "Szwedzka", "Kapelanka", "Słomiana", "Kobierzyńska", "Lipińskiego", "Grota-Roweckiego", "Norymberska", "Ruczaj", "Kampus UJ", "Chmieleniec", "Czerwone Maki P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "19",
		"first_stop": "Borek Fałęcki",
		"last_stop": "Dworzec Towarowy",
		"route": ["Borek Fałęcki", "Borek Fałęcki I", "Solvay", "Łagiewniki ZUS", "Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Hala Targowa", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "19",
		"first_stop": "Dworzec Towarowy",
		"last_stop": "Borek Fałęcki",
		"route": ["Dworzec Towarowy", "Politechnika", "Dworzec Główny Tunel", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Hala Targowa", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki", "Łagiewniki ZUS", "Solvay", "Borek Fałęcki I", "Borek Fałęcki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "21",
		"first_stop": "Pleszów",
		"last_stop": "Os.Piastów",
		"route": ["Pleszów", "Koksochemia", "Meksyk", "Brama nr 5", "Brama nr 4", "Fort Mogiła", "Kopiec Wandy", "Kombinat", "Struga", "Plac Centralny im. R.Reagana", "Os.Zgody", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "DH Wanda", "Rondo Hipokratesa", "Dunikowskiego", "Kleeberga", "Piasta Kołodzieja", "Os.Piastów"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "21",
		"first_stop": "Os.Piastów",
		"last_stop": "Pleszów",
		"route": ["Os.Piastów", "Piasta Kołodzieja", "Kleeberga", "Dunikowskiego", "Rondo Hipokratesa", "DH Wanda", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Os.Zgody", "Plac Centralny im. R.Reagana", "Struga", "Kombinat", "Kopiec Wandy", "Fort Mogiła", "Brama nr 4", "Brama nr 5", "Meksyk", "Koksochemia", "Pleszów"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "22",
		"first_stop": "Borek Fałęcki",
		"last_stop": "Kopiec Wandy",
		"route": ["Borek Fałęcki", "Borek Fałęcki I", "Solvay", "Łagiewniki ZUS", "Łagiewniki", "Brożka", "Borsucza", "Kobierzyńska", "Słomiana", "Kapelanka", "Szwedzka", "Centrum Kongresowe ICE", "Orzeszkowej", "Stradom", "Starowiślna", "Hala Targowa", "Rondo Grzegórzeckie", "Teatr Variété", "Francesco Nullo", "Fabryczna", "Ofiar Dąbia", "Dąbie", "Plaza", "TAURON Arena Kraków Al. Pokoju", "M1 Al. Pokoju", "Rondo 308. Dywizjonu", "Centralna", "Rondo Czyżyńskie", "Os.Kolorowe", "Plac Centralny im. R.Reagana", "Struga", "Kombinat", "Kopiec Wandy"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "22",
		"first_stop": "Kopiec Wandy",
		"last_stop": "Borek Fałęcki",
		"route": ["Kopiec Wandy", "Kombinat", "Struga", "Plac Centralny im. R.Reagana", "Os.Kolorowe", "Rondo Czyżyńskie", "Centralna", "Rondo 308. Dywizjonu", "M1 Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Plaza", "Dąbie", "Ofiar Dąbia", "Fabryczna", "Francesco Nullo", "Teatr Variété", "Rondo Grzegórzeckie", "Hala Targowa", "Starowiślna", "Stradom", "Orzeszkowej", "Centrum Kongresowe ICE", "Szwedzka", "Kapelanka", "Słomiana", "Kobierzyńska", "Borsucza", "Brożka", "Łagiewniki", "Łagiewniki ZUS", "Solvay", "Borek Fałęcki I", "Borek Fałęcki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "24",
		"first_stop": "Kurdwanów P+R",
		"last_stop": "Cichy Kącik",
		"route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Poczta Główna", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Uniwersytet Jagielloński", "Muzeum Narodowe", "Oleandry", "Park Jordana", "Reymana", "Cichy Kącik"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "24",
		"first_stop": "Cichy Kącik",
		"last_stop": "Kurdwanów P+R",
		"route": ["Cichy Kącik", "Reymana", "Park Jordana", "Oleandry", "Muzeum Narodowe", "Uniwersytet Jagielloński", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Poczta Główna", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Kabel", "Bieżanowska", "Dauna", "Piaski Nowe", "Nowosądecka", "Witosa", "Kurdwanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "44",
		"first_stop": "Kopiec Wandy",
		"last_stop": "Salwator",
		"route": ["Kopiec Wandy", "Kombinat", "Struga", "Plac Centralny im. R.Reagana", "Os.Kolorowe", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Jubilat", "Komorowskiego", "Salwator", "Salwator"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "44",
		"first_stop": "Salwator",
		"last_stop": "Kopiec Wandy",
		"route": ["Salwator", "Salwator", "Komorowskiego", "Jubilat", "Filharmonia", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Lubicz", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Os.Kolorowe", "Plac Centralny im. R.Reagana", "Struga", "Kombinat", "Kopiec Wandy"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "50",
		"first_stop": "Krowodrza Górka",
		"last_stop": "Kurdwanów P+R",
		"route": ["Krowodrza Górka", "Bratysławska", "Szpital Narutowicza", "Dworzec Towarowy", "Politechnika", "Dworzec Główny Tunel", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Zabłocie", "Klimeckiego", "Kuklińskiego", "Gromadzka", "Lipska", "Dworzec Płaszów Estakada", "Kabel", "Bieżanowska", "Dauna", "Piaski Nowe", "Nowosądecka", "Witosa", "Kurdwanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "50",
		"first_stop": "Kurdwanów P+R",
		"last_stop": "Krowodrza Górka",
		"route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "52",
		"first_stop": "Czerwone Maki P+R",
		"last_stop": "Os.Piastów",
		"route": ["Czerwone Maki P+R", "Chmieleniec", "Kampus UJ", "Ruczaj", "Norymberska", "Grota-Roweckiego", "Lipińskiego", "Kobierzyńska", "Słomiana", "Kapelanka", "Szwedzka", "Centrum Kongresowe ICE", "Orzeszkowej", "Stradom", "Starowiślna", "Poczta Główna", "Teatr Słowackiego", "Lubicz", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Bieńczycka", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "DH Wanda", "Rondo Hipokratesa", "Dunikowskiego", "Kleeberga", "Piasta Kołodzieja", "Os.Piastów"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "52",
		"first_stop": "Os.Piastów",
		"last_stop": "Czerwone Maki P+R",
		"route": ["Os.Piastów", "Piasta Kołodzieja", "Kleeberga", "Dunikowskiego", "Rondo Hipokratesa", "DH Wanda", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Poczta Główna", "Starowiślna", "Stradom", "Orzeszkowej", "Centrum Kongresowe ICE", "Szwedzka", "Kapelanka", "Słomiana", "Kobierzyńska", "Lipińskiego", "Grota-Roweckiego", "Norymberska", "Ruczaj", "Kampus UJ", "Chmieleniec", "Czerwone Maki P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "71",
		"first_stop": "Wzgórza Krzesławickie",
		"last_stop": "Salwator",
		"route": ["Wzgórza Krzesławickie", "Jarzębiny", "Darwina", "Wiadukty", "Wańkowicza", "Cienista", "Teatr Ludowy", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Centralna", "Rondo 308. Dywizjonu", "M1 Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Plaza", "Dąbie", "Ofiar Dąbia", "Fabryczna", "Francesco Nullo", "Teatr Variété", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Jubilat", "Komorowskiego", "Salwator", "Salwator"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "71",
		"first_stop": "Salwator",
		"last_stop": "Wzgórza Krzesławickie",
		"route": ["Wzgórza Krzesławickie", "Jarzębiny", "Darwina", "Wiadukty", "Wańkowicza", "Cienista", "Teatr Ludowy", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Bieńczycka", "Rondo Czyżyńskie", "Centralna", "Rondo 308. Dywizjonu", "M1 Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Plaza", "Dąbie", "Ofiar Dąbia", "Fabryczna", "Francesco Nullo", "Teatr Variété", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Jubilat", "Komorowskiego", "Salwator", "Salwator"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "73",
		"first_stop": "Wzgórza Krzesławickie",
		"last_stop": "Nowy Bieżanów P+R",
		"route": ["Wzgórza Krzesławickie", "Jarzębiny", "Darwina", "Wiadukty", "Elektromontaż", "Zajezdnia Nowa Huta", "Kombinat", "Struga", "Plac Centralny im. R.Reagana", "Os.Kolorowe", "Rondo Czyżyńskie", "Czyżyny", "Stella-Sawickiego", "AWF", "Muzeum Lotnictwa", "TAURON Arena Kraków Wieczysta", "Białucha", "Cystersów", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Kabel", "Bieżanowska", "Wlotowa", "Prokocim", "Prokocim Szpital", "Teligi", "Nowy Prokocim", "Ćwiklińskiej", "Nowy Bieżanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "73",
		"first_stop": "Nowy Bieżanów P+R",
		"last_stop": "Wzgórza Krzesławickie",
		"route": ["Nowy Bieżanów P+R", "Ćwiklińskiej", "Nowy Prokocim", "Teligi", "Prokocim Szpital", "Prokocim", "Wlotowa", "Bieżanowska", "Kabel", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Lubicz", "Rondo Mogilskie", "Cystersów", "Białucha", "TAURON Arena Kraków Wieczysta", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Czyżyny", "Rondo Czyżyńskie", "Os.Kolorowe", "Plac Centralny im. R.Reagana", "Struga", "Kombinat", "Zajezdnia Nowa Huta", "Elektromontaż", "Wiadukty", "Darwina", "Jarzębiny", "Wzgórza Krzesławickie"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "76",
		"first_stop": "Kurdwanów P+R",
		"last_stop": "Czerwone Maki P+R",
		"route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Limanowskiego", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki", "Łagiewniki", "Brożka", "Borsucza", "Lipińskiego", "Grota-Roweckiego", "Norymberska", "Ruczaj", "Kampus UJ", "Chmieleniec", "Czerwone Maki P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "76",
		"first_stop": "Czerwone Maki P+R",
		"last_stop": "Kurdwanów P+R",
		"route": ["Czerwone Maki P+R", "Chmieleniec", "Kampus UJ", "Ruczaj", "Norymberska", "Grota-Roweckiego", "Lipińskiego", "Borsucza", "Brożka", "Łagiewniki", "Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Limanowskiego", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Kabel", "Bieżanowska", "Dauna", "Piaski Nowe", "Nowosądecka", "Witosa", "Kurdwanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "77",
		"first_stop": "Łagiewniki",
		"last_stop": "Nowy Bieżanów P+R",
		"route": ["Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Limanowskiego", "Podgórze SKA", "Cmentarz Podgórski", "Dworcowa", "Kabel", "Bieżanowska", "Wlotowa", "Prokocim", "Prokocim Szpital", "Teligi", "Nowy Prokocim", "Ćwiklińskiej", "Nowy Bieżanów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "77",
		"first_stop": "Nowy Bieżanów P+R",
		"last_stop": "Łagiewniki",
		"route": ["Nowy Bieżanów P+R", "Ćwiklińskiej", "Nowy Prokocim", "Teligi", "Prokocim Szpital", "Prokocim", "Wlotowa", "Bieżanowska", "Kabel", "Dworcowa", "Cmentarz Podgórski", "Podgórze SKA", "Limanowskiego", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "78",
		"first_stop": "Borek Fałęcki",
		"last_stop": "Mały Płaszów P+R",
		"route": ["Borek Fałęcki", "Borek Fałęcki I", "Solvay", "Łagiewniki ZUS", "Łagiewniki", "Rzemieślnicza", "Rondo Matecznego", "Smolki", "Korona", "Plac Bohaterów Getta", "Św.Wawrzyńca", "Miodowa", "Starowiślna", "Poczta Główna", "Plac Wszystkich Świętych", "Filharmonia", "Teatr Bagatela", "Stary Kleparz", "Teatr Słowackiego", "Lubicz", "Rondo Mogilskie", "Rondo Grzegórzeckie", "Zabłocie", "Klimeckiego", "Kuklińskiego", "Gromadzka", "Lipska", "Rzebika", "Mały Płaszów P+R"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}, {
		"number": "78",
		"first_stop": "Mały Płaszów P+R",
		"last_stop": "Borek Fałęcki",
		"route": ["Mały Płaszów P+R", "Rzebika", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Miodowa", "Św.Wawrzyńca", "Plac Bohaterów Getta", "Korona", "Smolki", "Rondo Matecznego", "Rzemieślnicza", "Łagiewniki", "Łagiewniki ZUS", "Solvay", "Borek Fałęcki I", "Borek Fałęcki"],
	  	"lat": ,
		"lng": ,
		////////// DAYS
	}]
}
*/