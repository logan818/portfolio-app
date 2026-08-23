from flask import Blueprint, jsonify
from app.models.experience import Experience

experience_bp = Blueprint("experience", __name__)

@experience_bp.route("/experience", methods=["GET"])
def get_experience():
    entries = Experience.query.order_by(
        Experience.sort_order.asc(), Experience.start_date.desc()
    ).all()
    return jsonify([e.to_dict() for e in entries])
