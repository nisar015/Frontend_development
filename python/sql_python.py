import mysql.connector

mydb = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    user="root",
    password="SqL#@123",
    database="nisar"
)
mycursor=mydb.cursor()
mycursor.execute("select * from student")
# res=mycursor.fetchall()
res=mycursor.fetchall()
for i in res:
    print(i)
print("Connected successfully!")