from flask import Flask
from calculator_routes import calculator_blueprint

app = Flask(__name__)


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}
# Register the calculator blueprint
app.register_blueprint(calculator_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
