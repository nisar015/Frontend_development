# import math as m
# from math import sqrt,pow
# x=2.22454
# print(m.floor(x))
# print(m.ceil(x))
# print(m.pow(3,15))
# print(m.pi)
# print(m.e)
# print(m.sqrt(25))
# print(int(sqrt(64)))

# for i in range(10,0,-1):
#     print(i,end=" ")
# for i in range(10,1,-3):      
#     print(i,end=" ")
from numpy import *     
# arra=array((1,4,5,20),(1,4,2,4,9))
# print(arra)
# arr1=array([1,6,46,43])
# arr2=array([1,5,6,4])
# arr3=arr1+arr2
# print(arr3)
# arr=array([1,6,4,3,70])
# print(sin(arr))
# print(cos(arr))
# print(log(arr))
# print(sqrt(arr))
# print(sum(arr))
# print(min(arr))
# print(max(arr))
# print(sort(arr))
# newarr=array([1,4,5,33])
# oldarr=newarr
# print(id(newarr))
# print(id(oldarr))

# copying of an array
# copying is of two types shallow copy and deep copy
#shallow copy depends on one other 
# below is an example arrB is dependent on arrA
arrA=array([2,5,3,7])
arrB=arrA.view()
arrA[1]=6
print(arrA)   #output is [2 6 3 7] ----|
                                    #  | - - but address is different
print(arrB)   ##output is [2 6 3 7]----|
print(id(arrA))  #2202478597808
print(id(arrB))  #2202478909584       
# Deep copy doent depends on one other
arrC=array([1,5,2,30])
arrD=arrC.copy()
arrC[1]=4
print(arrC)    #[ 1  4  2 30] ----|
                               #  | - -output and address both are different
print(arrD)    #[ 1  5  2 30]-----|
print(id(arrC))
print(id(arrD))