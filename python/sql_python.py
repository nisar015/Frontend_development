import mysql.connector

mydb = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    user="new connection 1",
    password="SqL#@123"
)

print("Connected successfully!")