# calculator_routes.py
from flask import Blueprint, request

calculator_routes = Blueprint("calculator", __name__)

@calculator_routes.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data["expression"]
    result = eval(expression)
    return {"result": result}
