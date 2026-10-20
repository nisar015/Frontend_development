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
# arrA=array([2,5,3,7])
# arrB=arrA.view()
# arrA[1]=6     #this val is changed in both arrays in shallow copy
# print(arrA)   #output is [2 6 3 7] ----|
#                                     #  | - - but address is different
# print(arrB)   ##output is [2 6 3 7]----|
# print(id(arrA))  #2202478597808
# print(id(arrB))  #2202478909584       
# # Deep copy doent depends on one other it return the original array
# arrC=array([1,5,2,30])
# arrD=arrC.copy()
# arrC[1]=4      #this val is changed in one array arrC in deep copy
# print(arrC)    #[ 1  4  2 30] ----|
#                                #  | - -output and address both are different
# print(arrD)    #[ 1  5  2 30]-----|
# print(id(arrC))
# print(id(arrD))
# matarr=array([
#     [1,2,3,5,3,7],
#     [4,5,7,4,9,5],
# ])
# print(matarr.ndim) #means dimension type //2d
# print(matarr.shape) #matrix          //m
# print(matarr.size)  #size is         //6
# vatarr=matarr.flatten() #combines matarr and vatarr //[1,2,3,4,5,6]
# print(vatarr)
# batarr = vatarr.reshape(2,2,3) #2 means 2 two-d array, 2 means two one-d array and 3 values
# print(batarr)
# from numpy import *     
# arra=array([1,4,5,20],[1,4,2,4,9])
# print(arra)
a1=matrix('1,2,3;5,6,4;4,7,9')
a2=matrix('1,3,6;1,3,4;2,6,5')
a3=a1+a2
a4=a1*a2
print(a3)
print(a4)
def funct(lit):
    lit.append(35)
    return lit

lst=[2,83,3]
print(funct(lst))
1sssssss