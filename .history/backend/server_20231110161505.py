from flask import Flask, request


app = Flask(__name__)

@app.route("/members")
def members():
    return{"members":["Member1","Member2","Member3"]}


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data["expression"]
    result = eval(expression)
    return {"result": result}


if __name__ == "__main__":
    app.run(debug=True)