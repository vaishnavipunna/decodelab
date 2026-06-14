import sqlite3

conn = sqlite3.connect("movie.db")
cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS feedback")

cursor.execute("""
CREATE TABLE feedback(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    category TEXT,
    rating INTEGER,
    movie TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
""")

conn.commit()
conn.close()

print("Feedback table created!")