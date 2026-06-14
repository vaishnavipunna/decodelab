from flask import Flask
from flask_cors import CORS
from routes.feedback import feedback_bp
from routes.admin import admin_bp
from routes.movies import movies_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(movies_bp)
app.register_blueprint(feedback_bp)
app.register_blueprint(admin_bp)

@app.route("/")
def home():
    return {
        "message":"Marvel API Running"
    }

if __name__ == "__main__":
    app.run(debug=True)