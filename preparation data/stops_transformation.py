#! usr/bin/env python
import json
#from pprint import pprint

with open('stops.json', encoding="utf8") as f:
    data = json.load(f)
   
result='var geojson={'
result+='"type": "FeatureCollection",\n'
result+='"features": [\n'
i=0

while(True):
                
    result+='{\n'
    result+='\t"type": "Feature",\n'
    result+='\t"geometry": {\n'
    result+='\t\t"type": "Point",\n'
    result+='\t\t"coordinates": ['+str(data["stops"][i]["longitude"]/3600000)+', '+str(data["stops"][i]["latitude"]/3600000)+']\n'
    result+='\t},\n'
    result+='\t"properties": {\n'
    result+='\t\t"title": "'+str(data["stops"][i]["name"])+'",\n'
    result+='\t\t"description": ""\n'
    result+='\t}\n'
    
    if(data["stops"][i]["name"] == "Koksochemia"):
        result+='}]\n};'
        break;
    else:
        result+='},\n'

    i+=1
    
open('stops.js', 'w').write(result)


#pprint(data)