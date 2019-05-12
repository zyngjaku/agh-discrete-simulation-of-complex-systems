# -*- coding: utf-8 -*-
"""
Created on Mon Apr 22 12:39:14 2019

@author: Zyngi
"""

#view-source:http://rozklady.mpk.krakow.pl/?lang=PL&rozklad=20190422&linia=1

target_url="http://rozklady.mpk.krakow.pl/?lang=PL&rozklad=20190422&linia=50__2"

#import requests

#response = requests.get(target_url)
#data = response.text

import urllib.request
f = urllib.request.urlopen("http://rozklady.mpk.krakow.pl/?lang=PL&rozklad=20190422&linia=50")
print(f.read())
#result = data.find('trasa') 
#print ("Substring 'html ' found at index:", result ) 
