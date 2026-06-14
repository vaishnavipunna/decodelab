import sqlite3

conn = sqlite3.connect("movie.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS feedback(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    category TEXT,
    rating INTEGER,
    movie TEXT,
    comment TEXT,
    date TEXT
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS reviews(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    movie TEXT,
    rating INTEGER,
    review TEXT,
    created_at TEXT
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS quiz_scores(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    score INTEGER,
    total INTEGER,
    created_at TEXT
)
""")

conn.commit()
conn.close()

print("Database Created Successfully")