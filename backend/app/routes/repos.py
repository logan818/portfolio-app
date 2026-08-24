import json
import os
from flask import Blueprint, jsonify

repos_bp = Blueprint("repos", __name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "repos.json")

@repos_bp.route("/repos", methods=["GET"])
def get_repos():
    with open(DATA_PATH) as f:
        repos = json.load(f)
    return jsonify(repos)
