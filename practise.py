# strings are immutable
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
print(len(language))

# Lists
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
nums.extend(["nisar","ahmmed"])
min(nums)
max(nums)
print(nums)