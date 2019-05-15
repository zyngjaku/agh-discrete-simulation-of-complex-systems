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
		"number": "50",
		"first_stop": "Kurdwanów P+R",
		"last_stop": "Krowodrza Górka",
		"route": ["Kurdwanów P+R", "Witosa", "Nowosądecka", "Piaski Nowe", "Dauna", "Bieżanowska", "Kabel", "Dworzec Płaszów Estakada", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Dworzec Główny Tunel", "Politechnika", "Dworzec Towarowy", "Szpital Narutowicza", "Bratysławska", "Krowodrza Górka"],
		"lat": 19.950464166666666,
		"lng": 50.01358722222222,
		"days": [{
		  	"min_day": 1,
		  	"max_day": 5,
	  		"time": [{
				"hours": 5,
				"minutes": [4, 18, 31, 41, 54]
			}, {
				"hours": 6,
				"minutes": [1, 10, 20, 27, 32, 37, 43, 49, 53, 57]
			}, {
				"hours": 7,
				"minutes": [3, 8, 12, 18, 23, 27, 33, 38, 42, 48, 53, 57]
			}, {
				"hours": 8,
				"minutes": [3, 8, 12, 18, 23, 28, 35, 40, 46, 55]
			}, {
				"hours": 9,
				"minutes": [2, 10, 17, 24, 32, 39, 47, 51]
			}, {
				"hours": 10,
				"minutes": [2, 10, 17, 24, 32, 39, 47, 51]
			}, {
				"hours": 11,
				"minutes": [2, 10, 17, 24, 32, 39, 47, 51]
			}, {
				"hours": 12,
				"minutes": [2, 10, 17, 24, 32, 39, 47, 51]
			}, {
				"hours": 13,
				"minutes": [2, 10, 17, 24, 32, 39, 47, 51]
			}, {
				"hours": 14,
				"minutes": [3, 9, 17, 24, 29, 34, 39, 44, 49, 54, 59]
			}, {
				"hours": 15,
				"minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59]
			}, {
				"hours": 16,
				"minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59]
			}, {
				"hours": 17,
				"minutes": [4, 9, 14, 19, 24, 29, 34, 39, 44, 51, 59]
			}, {
				"hours": 18,
				"minutes": [6, 11, 17, 22, 29, 36, 41, 47, 52, 56]
			}, {
				"hours": 19,
				"minutes": [2, 10, 17, 25, 32, 41, 47, 55]
			}, {
				"hours": 20,
				"minutes": [2, 10, 17, 24, 31, 37, 42, 50, 58]
			}, {
				"hours": 21,
				"minutes": [5, 13, 20, 28, 37, 46, 59]
			}, {
				"hours": 22,
				"minutes": [14, 29, 50]
			}, {
				"hours": 23,
				"minutes": [6, 26]
			}]
		}, {
			"min_day": 6,
			"max_day": 6,
	  		"time": [{
				"hours": 5,
				"minutes": [2, 22, 42]
			}, {
				"hours": 6,
				"minutes": [2, 22, 42]
			}, {
				"hours": 7,
				"minutes": [2, 22, 42]
			}, {
				"hours": 8,
				"minutes": [2, 22, 42, 54]
			}, {
				"hours": 9,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 10,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 11,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 12,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 13,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 14,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 15,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 16,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 17,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 18,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 19,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 20,
				"minutes": [3, 22, 42]
			}, {
				"hours": 21,
				"minutes": [3, 22, 42]
			}, {
				"hours": 22,
				"minutes": [3, 22, 42]
			}, {
				"hours": 23,
				"minutes": [2, 35]
			}]
		}, {
			"min_day": 0,
			"max_day": 0,
	  		"time": [{
				"hours": 5,
				"minutes": [2, 32]
			}, {
				"hours": 6,
				"minutes": [2, 32]
			}, {
				"hours": 7,
				"minutes": [2, 32]
			}, {
				"hours": 8,
				"minutes": [3, 33, 54]
			}, {
				"hours": 9,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 10,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 11,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 12,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 13,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 14,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 15,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 16,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 17,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 18,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 19,
				"minutes": [4, 14, 24, 34, 54]
			}, {
				"hours": 20,
				"minutes": [3, 22, 42]
			}, {
				"hours": 21,
				"minutes": [3, 22, 42]
			}, {
				"hours": 22,
				"minutes": [3, 22, 42]
			}, {
				"hours": 23,
				"minutes": [2, 35]
			}]
		}]
	}, {
		"number": "78",
		"first_stop": "Mały Płaszów",
		"last_stop": "Borek Fałecki",
		"route": ["Mały Płaszów P+R", "Rzebika", "Lipska", "Gromadzka", "Kuklińskiego", "Klimeckiego", "Zabłocie", "Rondo Grzegórzeckie", "Rondo Mogilskie", "Lubicz", "Teatr Słowackiego", "Stary Kleparz", "Teatr Bagatela", "Filharmonia", "Plac Wszystkich Świętych", "Poczta Główna", "Starowiślna", "Stradom", "Orzeszkowej", "Centrum Kongresowe ICE", "Szwedzka", "Kapelanka", "Słomiana", "Kobierzyńska", "Borsucza", "Brożka", "Łagiewniki", "Łagiewniki ZUS", "Solvay", "Borek Fałęcki I", "Borek Fałęcki"],
		"lat": 20.001500555555555,
		"lng": 50.03990611111111,
	  	"days": [{
		  	"min_day": 1,
		  	"max_day": 5,
	  		"time": [{
				"hours": 18,
				"minutes": [0, 7, 15, 22, 30, 37, 45, 52]
			}, {
				"hours": 19,
				"minutes": [0, 7, 15, 22, 30, 37, 45, 52]
			}]
		}, {
			"min_day": 6,
		  	"max_day": 6,
	  		"time": [{
				"hours": 18,
				"minutes": [10, 20, 30, 40, 50]
			}, {
				"hours": 19,
				"minutes": [10, 20, 30, 40, 50]
			}]
		}, {
			"min_day": 0,
		  	"max_day": 0,
	  		"time": [{
				"hours": 18,
				"minutes": [0, 15, 30, 45]
			}, {
				"hours": 19,
				"minutes": [0, 15, 30, 45]
			}]
		}]
	}]
}
*/