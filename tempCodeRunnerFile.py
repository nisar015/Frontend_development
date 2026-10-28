#     for i in range(1,n+1):
# #         f *= i
# #     return f
# # print(fact(5))
# import sys
# sys.setrecursionlimit(10)
# print(sys.getrecursionlimit())
# i=0
# def rec():
#     # print(i)
#     global i
#     i += 1
#     print("recursive func is called",i)
#     rec()
# rec()