#eventlet + patching
import eventlet
eventlet.monkey_patch()

#regular imports

#flask imports

#app
from app import app

#running
if (__name__=="__main__"):
    app.run(port=80, debug=True)