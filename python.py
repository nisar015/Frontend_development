# Data types
# strings are immutable
strng='thos os a string'
combine=strng+'\ncombined' #\n means jump to next line
print(combine)
# variables
print(4**3)
print("nisar")
print('nisar "name"')
print('nisar\'s "name"')  #in this example the apostrope(') is considered as an end to a string so we use \ to escape that.
print('nisar'*20)
print('nisar\docx\nname')
print(r'nisar\docx\nname') #In raw strings, escape sequences are not processed, meaning backslashes \ are treated as literal characters and not as special characters.
language='python'
course='programming'
print(language+' '+course)
print(language +' ' + 'language')
print(language[-1])
print(language[2:4])  #this is slicing       
print(language[2:])  #this starts from index to 2 and goes upto end of string.
print(language[:3])  #this starts from 0 and till index n-1
print("which" + language)  
print('Hacka'+language[2:])  
# print(id(language))  #address
a=10 #here a is tagged to numeric value 10 which is immutabel and it is a tagging
b=a
k=10
print(id(k)) #tagging
a=6
print(id(a))
k=a
b=25
print(id(b)) #tagging

print(len(language))
# Lists mutable
# ordered sequence elements
str1=["nisar","ahmmed","achukatla"]
str2=["firstname","lastname","surname"]
comb=[str1,str2]
print(comb)
nums=[1,2,41,32]
nums.append(4)
nums.insert(1,456)
nums.pop(2) 
nums.sort()
nums.remove(41)
del nums[2:]
# nums.extend(["nisar","ahmmed"])
min(nums)
max(nums)
print(nums)

# tuple immutable
# iteration in tuple is faster than list
tup=(1,2,4,4,6,16,564,64)
print(type(tup))
print(tup[1])
print(tup.count(4))
print(tup)

# set  collection of unique elements and mutable
# not maintain the sequence
#  doesnt support duplicate vals
s={45,1,25,4,2,1}
s.add(455)
s.remove(1)
s.pop()
print(s)

# dictionary
# mutable
dic={1:"nisar",6:"ahmmed",4:"ak"}
print(dic)
print(dic.get(6))
print(dic.get(2,"not found"))
keys=['nisar','ahmmed','ak']
values=['waste1','waste2','waste3']
dic=dict(zip(keys,values))
print(dic['ahmmed'])
dic['name']='waste'
del dic['name']
dik={1:'name',4:'age','some':'anything','frontend':['html','css','JS'],'IT':{'software':'frontend','system-engineer':'networking'}}
print(dik)


# range
#immutable
for i in range(0,10):
    print(i)

#operators
# arthmetic 
# assignment
# relational
# logical
# uranary n=1,n=-n,n=-1

# number system conversion
# binary
# decimal
# octal
# hexadecimal
a=bin(15)
print(a)
b=hex(150)
print(b)
c=0xf
print(c)
d=0b0101
print(d)

# Bitwise operators
print(10&25)
print(10|25)
print(10^25)
#  1010
# 11001
# 10011  same bit means 0
print(10<<2) 
# left shift 1010.00... means 101000.0  
print(10>>2) 
#right shift 1010.000...  means 10.10000

# import math func
import math as m
x=2.22454
print(m.floor(x))
print(m.ceil(x))
print(m.pow(3,15))
print(m.pi)
print(m.e)
print(m.sqrt(25))

from math import pow,sqrt
print(pow(2,2))
print(int(sqrt(64)))

# cmd for python after you dwn python go into path that you saved your python code.
# then "cd python filename.py".
# then you have your code

# swapping of variables
a=5
b=6
a,b=b,a  
print(a)
print(b)
#in this the right part will be executed b and a values go into the stack.
# swaps the two top most stack items with rot-two concecpt
a=a+b
b=a-b
a=a-b

# user input

# x=int(input("enter x val:"))  #by default string so we add int()
# print(type(x))
# y=int(input("enter y val:"))
# print(x+y)
# ch=input('enter:')[1]
# print(ch)
# res=eval(input('enter'))
# print(res)

# the below code works in cmd
# import sys
# x=int(sys.argv[0])
# y=int(sys.argv[1])
# z=x+y
# print(z)


# loops
i=j=1
while i<=5:
    print("print",end=" ") #end="" it continues on the same line
    j=1
    while j<=4:
        print("paf",end=" ") 
        j += 1
    i += 1
    print()           #print() means it jumps to a new line


for i in range(1,11,2):       #this prints by skiping 2 nums
    print(i,end="")
for i in range(10,0,-1):      #this prints in reverse order by one num
    print(i,end=" ")
for i in range(10,0,-2):      #this prints in reverse skip by two num
    print(i,end=" ")
    print()

# break-will stop execution
# continue-will skip the condition that contains continue
# pass-if we declare a function and dont know what to write we use pass
# example:
def func():
    pass

from array import *
val=array('i',[2,3,6,2,7]) #here i means only int values can be inserted in an array
char=array('u',['a','v','g','d']) #here u means uniqe code means chars
print(len(val))
for ch in char:
    print(ch)

newval=array(val.typecode, (a for a in val) )
for i in newval:
    print(i)

# taking user input for creating an array
arr=array('i',())
n=int(input('enter length of array :'))
for i in range(n):
    m=int(input('enter the val :'))
    arr.append(m)
value=int(input('enter the search value :'))
print(arr,i)
print(arr.index(value))

#numpy is for handling multi dimensional arrays 
# and performing scientific calculations
#diff ways of creating an array :
# 1.array()
# 2.linespace()
# 3.logspace()
# 4.zeros()
# 5.ones()
# 6.arange()
from numpy import *    
arr1=[1,6,46,43]
arr2=[1,5,6,4]
arr3=arr1+arr2
print(arr3)

# built in methods for arrays
arr=array([1,6,4,3,70])
print(sin(arr))
print(cos(arr))
print(log(arr))
print(sqrt(arr))
print(sum(arr))
print(min(arr))
print(max(arr))
print(sort(arr))

# copying of an array
# copying is of two types shallow copy and deep copy
#shallow copy depends on one other 
# below is an example arrB is dependent on arrA
arrA=array([2,5,3,7])
arrB=arrA.view()
arrA[1]=6     #this val is changed in both arrays in shallow copy
print(arrA)   #output is [2 6 3 7] ----|
                                    #  | - - but address is different
print(arrB)   ##output is [2 6 3 7]----|
print(id(arrA))  #2202478597808
print(id(arrB))  #2202478909584       
# Deep copy doent depends on one other it return the original array
arrC=array([1,5,2,30])
arrD=arrC.copy()
arrC[1]=4      #this val is changed in one array arrC in deep copy
print(arrC)    #[ 1  4  2 30] ----|
                               #  | - -output and address both are different
print(arrD)    #[ 1  5  2 30]-----|
print(id(arrC))
print(id(arrD))

# working with matrix
matarr=array([
    [1,2,3,5,3,7],
    [4,5,7,4,9,5],
])
print(matarr.ndim) #means dimension type //2d
print(matarr.shape) #matrix          //m
print(matarr.size)  #size is         //6
vatarr=matarr.flatten() #combines matarr and vatarr //[1,2,3,4,5,6]
print(vatarr)
batarr = vatarr.reshape(2,2,3) #2 means 2 two-d array, 2 means two one-d array and 3 values
print(batarr)
# m means matrices
# we can directly perform matric operations in matrices without using loops
m=matrix('1,2,3;5,6,4;4,7,9')
print(m)
print(diagonal(m))
print(m.min())
print(m.max())
a1=matrix('1,2,3;5,6,4;4,7,9')
a2=matrix('1,3,6;1,3,4;2,6,5')
a3=a1+a2
a4=a1*a2
print(a3)
print(a4)

# functions 
# in python we dont use pass y value or reference
# it totally depends on the obj we use, if we use immutable(int,str,float,tuple,bool) then it is pass by value i.e the address changes
# if it is muttable(dic,list,set) then pass by reference i.e the address doesnt change 
def add(x,y):
    return x+y,x-y
print(add(2,3))

# Pass by value example
def func(z):
    print(id(z))  #1701274321424
    z=5        #here when i change value the address also changed
    print(id(z))  #1701274321464
    return z

z=10
print(id(z))  #1701274321424 
print(func(z))
# pass by reference example
def funct(lit):
    lit[1].append(35)
    return lit

lst=[2,83,3]
print(funct(lst)) #[2,83,3,35] same inside and outside of function so pass by reference
print(lst)        #[2,83,3,35] because of same adress the output also same


# Paraeter and args are same
# tpyes of arguments
# 1.Formal args
# 2.Actual args
def sum(a,b):     #here a ,b are formal arguments
    return a+b
sum(3,5)          #here 2,3 are actual arguments which we are passing
# types of actual args:
# 1.Position args
def person(name,age):
    print(name)
    print(age)
person('nisar',24)     #here 'nisar' is positioned to name and 24 to age by default
# 2.keyword args
def person(name,age):
    print(name)
    print(age)
person(age=24,name='nisar') #here age and name are keywords. if we not declared args in positioned form
# 3.default args
def person(name,age=20):   #here age=20 is the default value
    print(name)
    print(age)
person(age=24,name='nisar') #even if we define default values these are the top priority values
# 4.variable length args
# def add(a,*b):  it prints b in tuple form 
def add(a,*b):     #a=2 by default and b=(3,4,3,6)
    c=a
    for i in b:
        c += i
    print(c)
add(2,3,4,3,6) #we can define a func where number of args are not fixed is called variable length args

# keyworded variable length args
def persondata(name,**data):   #here ** means we are passing multiple args with keywords
    print(name)
    print(data)
    for i,j in data.items():  #this prints **kwargs in key val pairs
        print(i,j)
persondata('nisar',age=24,city='pattikonda',num=245833)

#Global variables in python
a=3
def glo():
    global a            #global a declaration makes to produce same output in and outside of func
    a=1
    print("inside",a)   #1
glo()
print("out",a)          #1

b=2
def code():
    b=6
    x=globals()['b']    #here x = 2 because we declare it as global 
    print("inside func",b) #here b=6 we are accessing local variable b
    print(x)
    globals()['b']=12

code()
print("outside func",b)  #here b=12 we redeclare b as 12 in this line

# fibonocci sequence 
def fib():
    a=0
    b=1
    print(a)
    print(b)
    for i in range(2,10):
        c=a+b
        a=b
        b=c
        print(c)
fib()