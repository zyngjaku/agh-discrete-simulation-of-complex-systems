# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 12:02:26 2019

@author: Zyngi
"""

#http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/vehicleinfo/vehicles

import urllib.request, json, time


def findTramWhichStartRoute():
    
    firstLoop=True
    newTramId = 0
    trams=[]

    while(newTramId==0):
        url="http://www.ttss.krakow.pl/internetservice/geoserviceDispatcher/services/vehicleinfo/vehicles"
        with urllib.request.urlopen(url) as url:
            data = json.loads(url.read().decode())
            
        thisSame=False
        for d in data["vehicles"]:
            if(str(d)[2] != 'i'):
                if(firstLoop==True):
                    if(d["name"] == "50 Krowodrza Górka"):
                        print("["+ str(d["latitude"]/3600000) + ";" + str(d["longitude"]/3600000)+"]" + ";" + str(d["tripId"])+"" )
                        trams.append(d["tripId"])
                else:
                    for t in trams:
                        if(t==d["tripId"]):
                            thisSame=True
                    if(thisSame==False):
                        newTramId=d["tripId"]
                    
        #newTramId=10
        print(newTramId)
        firstLoop=False    
        time.sleep(10) 
        print(trams)
   
    return newTramId
    

followingTramId = findTramWhichStartRoute()

"""
while True:
    result+=getData()
    print("\n-------------")
    print(result)
"""
