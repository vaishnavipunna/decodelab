from flask import Blueprint, request, jsonify
import sqlite3

feedback_bp = Blueprint(
    "feedback",
    __name__
)

# GET ALL FEEDBACK
@feedback_bp.route(
    "/feedback",
    methods=["GET"]
)
def get_feedback():

    conn = sqlite3.connect("movie.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM feedback
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    feedbacks = []

    for row in rows:

        feedbacks.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "category": row[3],
            "rating": row[4],
            "movie": row[5],
            "comment": row[6],
            "created_at": row[7]
        })

    return jsonify(feedbacks)


# ADD FEEDBACK
@feedback_bp.route(
    "/feedback",
    methods=["POST"]
)
def submit_feedback():

    data = request.json

    name = data.get("name")
    movie = data.get("movie")
    comment = data.get("comment")

    if not name or not movie or not comment:
        return jsonify({
            "error": "Required fields missing"
        }), 400

    conn = sqlite3.connect("movie.db")
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO feedback
        (name,email,category,rating,movie,comment)
        VALUES (?,?,?,?,?,?)
    """, (
        data.get("name"),
        data.get("email"),
        data.get("category"),
        data.get("rating"),
        data.get("movie"),
        data.get("comment")
    ))

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Feedback submitted successfully"
    })

@feedback_bp.route(
    "/feedback/<int:id>",
    methods=["DELETE"]
)
def delete_feedback(id):

    conn = sqlite3.connect("movie.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM feedback WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Feedback deleted successfully"
    })