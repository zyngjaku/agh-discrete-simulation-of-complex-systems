# -*- coding: utf-8 -*-

import xlrd

def getColumn(row, column, worksheet):
    fill = []
    row_number = row
    while(worksheet.cell(row_number, column).value != ""):
        if(worksheet.cell(row_number+1, column-2).value == "awaria"):
            return []
        fill.append(int(worksheet.cell(row_number, column).value))
        row_number+=1
    
    return fill

def getRow(row, column, worksheet, json):
    row_number = row
    column_number = column
    while(column_number <= worksheet.ncols):
        if(worksheet.cell(row_number-3, column_number-2).value == "Kurs"):
            tmp_fill = getColumn(row_number, column_number, worksheet)
            if(len(tmp_fill)!=0):
                json+='\t\t\t{\n'
                json+='\t\t\t\t"num_of_passengers": '+ str(tmp_fill) + '\n'
                json+='\t\t\t},\n'
        column_number+=4
    
    return json
        
def getWholeSheet(worksheet, json):
    row_number=5
    while(row_number <= worksheet.nrows):
        json=getRow(row_number, 5, worksheet, json)
        
        row_number+=9+len(getColumn(5, 5, worksheet))
        
    return json
        
def getWholeWorkBook(workbook, json):
    for sheet_number in range(workbook.nsheets):
        worksheet = workbook.sheet_by_index(sheet_number)
        json=getWholeSheet(worksheet, json)
    
    return json
        
def getTramFill(tram, json):
    days = ["R", "S", "N"]
    
    for day in days:
        workbook = xlrd.open_workbook("./tram_fill/Pas_"+ day +"0"+ tram +".xls")
        if(day == "R"):
            json+='\t\t\t"min_day": 1,\n'
            json+='\t\t\t"max_day": 5,\n'
        elif(day == "S"):
            json+='\t\t\t"min_day": 6,\n'
            json+='\t\t\t"max_day": 6,\n'        
        else:
            json+='\t\t\t"min_day": 0,\n'
            json+='\t\t\t"max_day": 0,\n'
        json+='\t\t\t"fill": [\n'
        json=getWholeWorkBook(workbook, json)
        json=json[:-2]
        json+='\t\t\t]\n'
        json+='\t\t\t},{\n'  
    json=json[:-3]         
    json+=']\n'
    return json

trams = ["01", "02", "03", "04", "05", "08", "09", "10", "13", "14", "16", "18", "20", "21", "22", "23", "24", "50", "52"]

file = open("tram_fill.json","w+")     

file.write('{\n')
file.write('\t"trams": [{\n')
for tram in trams:
    json=""
    
    if(tram[0]=='0'):
        json+='\t\t"number": '+ tram[1] +',\n'
    else:
        json+='\t\t"number": '+ tram +',\n'
    
    json+='\t\t"days": [{\n'        
    json=getTramFill(tram, json)
    
    if(tram!=trams[len(trams)-1]):
        json+='\t\t},{\n'
    else:
        json+='\t\t}]\n'
        
    file.write(json)     
file.write('}')  