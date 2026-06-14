import sqlite3

conn = sqlite3.connect("movie.db")
cursor = conn.cursor()

movies = [
    (
        "Iron Man",
        "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp",
        "The genius billionaire Tony Stark becomes Iron Man."
    ),
    (
        "Avengers: Endgame",
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
        "The Avengers assemble for their biggest battle."
    ),
    (
        "Black Panther",
        "https://m.media-amazon.com/images/I/81QMYs0LcLL._UF1000,1000_QL80_.jpg",
        "T'Challa returns as Black Panther."
    )
]

cursor.executemany(
    """
    INSERT INTO movies
    (title,image,description)
    VALUES(?,?,?)
    """,
    movies
)

conn.commit()
conn.close()

print("Movies Added Successfully")