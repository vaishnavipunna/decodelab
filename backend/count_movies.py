import sqlite3
import os

print(os.path.abspath("movie.db"))

conn = sqlite3.connect("movie.db")
cursor = conn.cursor()

cursor.execute("SELECT COUNT(*) FROM movies")

count = cursor.fetchone()[0]

print("Total Movies:", count)

conn.close()