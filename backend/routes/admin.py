from flask import Blueprint, jsonify
import sqlite3

admin_bp = Blueprint(
    "admin",
    __name__
)

@admin_bp.route(
    "/admin/stats",
    methods=["GET"]
)
def admin_stats():

    conn = sqlite3.connect("movie.db")
    cursor = conn.cursor()

    # Total Movies
    cursor.execute(
        "SELECT COUNT(*) FROM movies"
    )
    total_movies = cursor.fetchone()[0]

    # Total Feedback
    cursor.execute(
        "SELECT COUNT(*) FROM feedback"
    )
    total_feedback = cursor.fetchone()[0]

    # Average Rating
    cursor.execute(
        "SELECT AVG(rating) FROM feedback"
    )

    avg_rating = cursor.fetchone()[0]

    conn.close()

    return jsonify({
        "total_movies": total_movies,
        "total_feedback": total_feedback,
        "avg_rating": round(avg_rating or 0, 1)
    })