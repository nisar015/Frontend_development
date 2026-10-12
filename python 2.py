dic={1:"nisar",6:"ahmmed",4:"ak"}
print(dic)
print(dic.get(6))
print(dic.get(2,"not found"))
keys=['nisar','ahmmed','ak']
values=['waste1','waste2','waste3']
dic=dict(zip(keys,values))
print(dic['ahmmed'])
dic['name']='waste'
print(dic)
del dic['name']
dik={1:'name',4:'age','some':'anything','frontend':['html','css','JS'],'IT':{'software':'frontend','system-engineer':'networking'}}
print(dik)