# server.py
from flask import Flask
from calculator_routes import calculator_routes

app = Flask(__name__)



app.register_blueprint(calculator_routes, url_prefix="/calculator")

if __name__ == "__main__":
    app.run(debug=True)
