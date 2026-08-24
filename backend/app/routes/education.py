from flask import Blueprint, jsonify
from app.models.education import Education

education_bp = Blueprint("education", __name__)


@education_bp.route("/education", methods=["GET"])
def get_education():
    entries = Education.query.order_by(
        Education.sort_order.asc(), Education.start_date.desc()
    ).all()
    return jsonify([e.to_dict() for e in entries])
