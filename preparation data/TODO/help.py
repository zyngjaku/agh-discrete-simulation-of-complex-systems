#! usr/bin/env python
import json
#from pprint import pprint

with open('stops.json', encoding="utf8") as f:
    data = json.load(f)
   
i=0
result='['

while(True):
    if(i==10):
       break;

    i+=1
    
#open('stops.js', 'w').write(result)


#print(result)