# -*- coding: utf-8 -*-

url = "http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/stopinfo/stops?left=-648000000&bottom=-324000000&right=648000000&top=324000000"

stops = []
lat = []
lng = []
import urllib.request, json 
with urllib.request.urlopen(url) as url:
    data = json.loads(url.read().decode())

    for it in data['stops']:
        stops.append(it['name'])
        lat.append(it['latitude']/3600000)
        lng.append(it['longitude']/3600000)
        
print(stops)

#stops = ["Os.Piastów", "Lubicz", "Chmieleniec", "Czerwone Maki P+R", "Kampus UJ", "Kurdwanów", "Łagiewniki ZUS", "Kurdwanów P+R", "Borek Fałęcki", "Borek Fałęcki I", "Solvay", "Sanktuarium Bożego Miłosierdzia", "Biprostal", "Salwator", "Ruczaj", "Norymberska", "Reymana", "Korona", "Lipińskiego", "Grota-Roweckiego", "Borsucza", "Kobierzyńska", "Brożka", "Słomiana", "Rzemieślnicza", "PT", "Łagiewniki", "Rondo Matecznego", "Smolki", "Cracovia", "Muzeum Narodowe", "Kapelanka", "Most Grunwaldzki", "Centrum Kongresowe ICE", "Szwedzka", "Komorowskiego", "Park Jordana", "Oleandry", "Jubilat", "Uniwersytet Jagielloński", "Filharmonia", "Orzeszkowej", "Stradom", "Muzeum Inżynierii Miejskiej", "Plac Wolnica", "Dajwór", "Św.Wawrzyńca", "Wawel", "Plac Wszystkich Świętych", "Św.Gertrudy", "Poczta Główna", "Starowiślna", "Miodowa", "Hala Targowa", "Wesele", "Cichy Kącik", "Bronowice", "Głowackiego", "Uniwersytet Pedagogiczny", "Bronowice Małe", "Balicka Wiadukt", "Bronowice Wiadukt", "Bratysławska", "Krowodrza Górka", "Batorego", "Teatr Bagatela", "Plac Inwalidów", "Urzędnicza", "Politechnika", "Basztowa LOT", "Stary Kleparz", "Pędzichów", "Dworzec Główny", "Teatr Słowackiego", "Dworzec Główny Zachód", "Dworzec Główny Tunel", "Dworzec Towarowy", "Nowy Kleparz", "Prądnicka", "Szpital Narutowicza", "Witosa", "Nowosądecka", "Bieżanowska", "Piaski Nowe", "Dauna", "Wlotowa", "Prokocim Szpital", "Prokocim", "Teligi", "Nowy Prokocim", "Ćwiklińskiej", "Nowy Bieżanów", "Nowy Bieżanów P+R", "Powstańców Wielkopolskich", "Podgórze SKA", "Cmentarz Podgórski", "Kabel", "Dworcowa", "Dworzec Płaszów Estakada", "Gromadzka", "Lipska", "Limanowskiego", "Plac Bohaterów Getta", "Zabłocie", "Klimeckiego", "Rondo Grzegórzeckie", "Kordylewskiego", "Teatr Variété", "Francesco Nullo", "Dąbie", "Kuklińskiego", "Fabryczna", "Ofiar Dąbia", "Mały Płaszów", "Mały Płaszów P+R", "Rzebika", "Cystersów", "Rondo Mogilskie", "Rakowicka", "Uniwersytet Ekonomiczny", "Cmentarz Rakowicki", "Wieczysta", "TAURON Arena Kraków Wieczysta", "Białucha", "Kraków Plaza", "Plaza", "Lema", "M1 Al. Pokoju", "Kraków Arena Al. Pokoju", "TAURON Arena Kraków Al. Pokoju", "Nowohucka", "Rondo 308. Dywizjonu", "Muzeum Lotnictwa", "AWF", "Stella-Sawickiego", "Centralna", "Czyżyny", "Bieńczycka", "Rondo Czyżyńskie", "Mistrzejowice", "Os.Złotego Wieku", "Miśnieńska", "Dunikowskiego", "DH Wanda", "Rondo Piastowskie", "Kleeberga", "Piasta Kołodzieja", "Rondo Hipokratesa", "Plac Centralny im. R.Reagana", "Os.Kolorowe", "Rondo Kocmyrzowskie im. Ks. Gorzelanego", "Os.Zgody", "Os.Na Skarpie", "Klasztorna", "Suche Stawy", "Struga", "Teatr Ludowy", "Cienista", "Kocmyrzowska", "Wańkowicza", "Wiadukty", "Darwina", "Cmentarz Grębałów Zachód", "Jarzębiny", "Agencja Kraków Wschód", "Walcownia", "Bardosa", "Kopiec Wandy", "Brama nr 4", "Fort Mogiła", "Kombinat", "Jeżynowa", "Brama nr 5", "Meksyk", "Wzgórza Krzesławickie", "PH", "Zajezdnia Nowa Huta", "Elektromontaż", "Mrozowa", "Blokowa", "Pleszów", "Koksochemia"]

size = len(stops)
tab = [[0] * size for i in range(size)]

for i in range(size):
    for j in range(size):
        tab[i][j] = "n"
        if(i==j):
            tab[i][j] = "0"
    
loop = True

file2 = open("test2.txt","w+")
file2.write("{\n")
file2.write("\t\"routes\": [")
count = 0
while loop:
    text = ""
    start = input("From: ")
    end = input("To: ")
    time1 = input("Time1: ")
    time2 = input("Time2: ")
    
    if(start=="exit" or start=="bye"  or start=="" or end=="exit" or end=="bye" or end==""):
        loop = False
    
    start_it = -1
    end_it =-1
    it=0
    for stop in stops:
        if(stop == start):
            start_it = it
        if(stop == end):
            end_it = it
        it+=1
    
    if(start_it != -1 or end_it != -1):
        tab[start_it][end_it] = str(time1)
        tab[end_it][start_it] = str(time2)
        
        if count == 0:
            text += "{\n"
        else:
            text += ", {\n"
        
        text += "\t\t\"from:\": \""+ stops[start_it] +"\",\n"
        text += "\t\t\"to:\": \""+ stops[end_it] +"\",\n"
        text += "\t\t\"from_loc\": ["+ str(lat[start_it]) +","+ str(lng[start_it]) +"],\n"
        text += "\t\t\"to_loc\": ["+ str(lat[end_it]) +","+ str(lng[end_it]) +"],\n"
        text += "\t\t\"lat:\": ["+ str(lat[end_it]) +"],\n"
        text += "\t\t\"lon:\": ["+ str(lng[end_it]) +"]\n"
        text += "\t}"
        
        text += ", {\n"
        text += "\t\t\"from:\": \""+ stops[end_it] +"\",\n"
        text += "\t\t\"to:\": \""+ stops[start_it] +"\",\n"
        text += "\t\t\"from_loc\": ["+ str(lat[end_it]) +","+ str(lng[end_it]) +"],\n"
        text += "\t\t\"to_loc\": ["+ str(lat[start_it]) +","+ str(lng[start_it]) +"],\n"
        text += "\t\t\"lat:\": ["+ str(lat[start_it]) +"],\n"
        text += "\t\t\"lon:\": ["+ str(lng[start_it]) +"]\n"
        text += "\t}"
        file2.write(text)
        
        count+=1
    else:
        print("Nie znalazłem przystanku") 
                
file2.write("]\n")
file2.write("}")
file2.close()    
    
file = open("test.txt","w+")

for i in range(len(stops)):
    tmp=("[")
    for j in range(len(stops)):
        if(j==len(stops)-1):
            if(tab[i][j]=="n"):
                tmp+=("null]")
            else:
                 tmp+=(str(tab[i][j]) + "]")
        else: 
            if(tab[i][j]=="n"):
                 tmp+=("null, ")
            else:
                 tmp+=(str(tab[i][j]) + ", ")
    file.write(tmp+"\n")
         
file.close()

