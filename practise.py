# Data types
# strings are immutable
strng='thos os a string'
# variables
print(4**3)
print("nisar")
print('nisar "name"')
print('nisar\'s "name"')
print('nisar'*20)
print('nisar\docx\nname')
print(r'nisar\docx\nname')
language='python'
course='programming'
print(language+' '+course)
print(language +' ' + 'language')
print(language[-1])
print(language[2:4])           
print(language[2:])
print(language[:3])
print("which" + language)  
print('Hacka'+language[2:])  
# print(id(language))  #address
a=10
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
for i in range(0,10):
    print[i]

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