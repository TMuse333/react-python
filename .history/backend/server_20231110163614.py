from flask import Flask
from calculator_routes import calculator_blueprint

app = Flask(__name__)

from flask import Flask
from calculator_routes import calculator_blueprint

app = Flask(__name__)

# Register the calculator blueprint
app.register_blueprint(calculator_blueprint)

if __name__ == "__main__":
    app.run(debug=True)


# Register the calculator blueprint
app.register_blueprint(calculator_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
