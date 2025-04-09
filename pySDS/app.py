import os
import datetime

import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

from sklearn.covariance import EllipticEnvelope
from scipy.spatial.distance import mahalanobis

from dash import dcc, html, Input, Output
from flask import Flask
from flask import request, jsonify, render_template
from flask_cors import CORS
import plotly.express as px

app = Flask(__name__, static_url_path="/static")
CORS(app)
# app = dash.Dash(__name__, server=server)
UPLOAD_FOLDER = "uploads/"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/templates/<filename>")
def get_template(filename):
    return render_template(filename)


@app.route("/static/<filename>")
def get_js(filename):
    return app.send_static_file(filename)


@app.route("/save", methods=["POST"])
def upload():
    file = request.files["file"]
    file.save(UPLOAD_FOLDER + file.filename)
    # token = os.urandom(16).hex()
    extn = file.filename.split(".")[-1]

    if extn == "csv" or extn == "txt":
        df = pd.read_csv(UPLOAD_FOLDER + file.filename).head()
    elif extn == "xlsx" or extn == "xls":
        df = pd.read_excel(UPLOAD_FOLDER + file.filename).head()
    elif extn == "tsv":
        df = pd.read_csv(UPLOAD_FOLDER + file.filename, sep="\t").head()
    else:
        return jsonify({"error": "File format not supported"})

    response = {
        "filename": file.filename,
        "data": df.to_dict(orient="records"),
        "columns": df.columns.tolist(),
    }

    return jsonify(response)


# Run App
if __name__ == "__main__":
    app.run(debug=True)
