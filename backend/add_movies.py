import sqlite3
import os

print(os.path.abspath("movie.db"))

conn = sqlite3.connect("movie.db")
cursor = conn.cursor()

movies = [

(
'Spider-Man: No Way Home',
'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
'Spider-Man faces multiverse threats'
),

(
'Doctor Strange',
'https://images-cdn.ubuy.co.in/665896547feb56370858cb22-doctor-strange-dvd-disney-action.jpg',
'A world-famous neurosurgeon loses the use of his hands in a horrific car accident.'
),

(
'Thor: Ragnarok',
'https://m.media-amazon.com/images/I/91+NY2WOP8L._UF1000,1000_QL80_.jpg',
'Norse god of thunder, storms, strength, and the protection of humankind'
),

(
'Shang-Chi and the Legend of the Ten Rings',
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKL61IZLRPaJwrToED03LNDy64vTMHhFCbbknO8BIwOLalnywr1Whfw8yra_ZAv7cJZVZSaw',
'The Ten Rings provide mystical powers.'
),

(
'Avengers: Infinity War',
'https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg',
'The Avengers face Thanos.'
),

(
'Ant-Man and the Wasp: Quantumania',
'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg',
'Scott Lang enters the Quantum Realm.'
),

(
'The Incredible Hulk',
'https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg',
'The Hulk possesses immense strength.'
),

(
'Spider-Man: Far From Home',
'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
'Spider-Man faces elemental threats.'
),

(
'Deadpool & Wolverine',
'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg',
'Deadpool teams up with Wolverine.'
),

(
'Guardians of the Galaxy Vol. 2',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ebekjY7d5iawT4n8VKacuVH73ojWZCT0bA&s',
'Guardians protect the galaxy.'
),

(
'Avengers: Age of Ultron',
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X',
'The Avengers battle Ultron.'
),

(
'Deadpool',
'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',
'Deadpool can heal rapidly.'
)

]

cursor.executemany(
"""
INSERT INTO movies
(title,image,description)
VALUES (?,?,?)
""",
movies
)
print("Inserted:", cursor.rowcount)

conn.commit()
conn.close()

print("Movies Added Successfully!")