#normal imports

#flask imports
from flask import render_template

#app
from app import app

@app.route("/")
def index():
    return render_template("index.html")

#grabs data from user
@app.route("/query")
def queryRoute():
    return render_template("query.html")