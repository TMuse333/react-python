from flask import Blueprint, request

# Create a Blueprint for the calculator routes
calculator_blueprint = Blueprint("calculator", __name__)

# Variable to store values
saved_values = {"value1": None, "value2": None}

@calculator_blueprint.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    value1 = data.get("value1")
    value2 = data.get("value2")

    # Save the values
    saved_values["value1"] = value1
    saved_values["value2"] = value2

    return {"message": "Values saved successfully"}

@calculator_blueprint.route("/get_values")
def get_values():
    return saved_values
