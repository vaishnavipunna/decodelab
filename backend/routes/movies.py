from flask import Blueprint, jsonify
import sqlite3
import os

movies_bp = Blueprint("movies", __name__)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "movie.db")

@movies_bp.route("/movies", methods=["GET"])
def get_movies():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM movies")  

    rows = cursor.fetchall()

    print("Movies fetched:", len(rows))

    conn.close()

    movies = []

    for row in rows:
        movies.append({
            "id": row[0],
            "title": row[1],
            "img": row[2],
            "desc": row[3]
        })

    return jsonify(movies)






