import os
from turtle import dot
from blinker.base import F
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    db_user = os.environ.get("POSTGRES_USER")
    db_pass = os.environ.get("POSTGRES_PASSWORD")
    db_host = os.environ.get("POSTGRES_HOST")
    db_port = os.environ.get("POSTGRES_PORT")
    db_name = os.environ.get("POSTGRES_DB")

    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"postgresql://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    frontend_origin = os.environ.get("FRONTEND_ORIGIN", "http://localhost:4200")
    CORS(app, resources={r"/api/*": {"origins": frontend_origin}})

    from app.models import experience #noqa: F401
    from app.routes.experience import experience_bp
    app.register_blueprint(experience_bp, url_prefix="/api")
    return app
