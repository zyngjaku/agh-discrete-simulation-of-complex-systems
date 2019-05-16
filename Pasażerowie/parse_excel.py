# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import xlrd
workbook = xlrd.open_workbook('Pas_R050.xls')

worksheet = workbook.sheet_by_index(0)
print(worksheet.cell(6, 5).value)

