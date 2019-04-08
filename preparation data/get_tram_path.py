# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 12:02:26 2019

@author: Zyngi
"""

#http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/vehicleinfo/vehicles

import urllib.request, json, time


def getData():
    url="http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/vehicleinfo/vehicles"
    
    with urllib.request.urlopen(url) as url:
        data = json.loads(url.read().decode())
    
    ret=""
    
    for d in data["vehicles"]:
        if(str(d)[2] != 'i'):
            if(d["tripId"] == "8059232507168045074"):
                print("["+ str(d["latitude"]/3600000) + ";" + str(d["longitude"]/3600000)+"]" + ";" + str(d["tripId"])+"" )
                ret+="["+ str(d["longitude"]/3600000) + "," + str(d["latitude"]/3600000)+"],\n"
    return ret

result=""

while True:
    result+=getData()
    print("\n-------------")
    print(result)
    time.sleep(5)
