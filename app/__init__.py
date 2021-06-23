#non flask imports

#flask imports
from flask import Flask

#setting up app
app = Flask(__name__)

#config
from app import config
app.config.from_object(config)

#routes
from app import routes