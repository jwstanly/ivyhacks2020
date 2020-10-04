import os

# Connect to the database
SCHEME = 'postgresql'
DATABASE_NAME = "capitalone"
USER = "cap"
PASSWORD = "test123"
HOST = "localhost"
PORT = 5432

SQLALCHEMY_DATABASE_URI = f'{SCHEME}://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}'
# SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
SQLALCHEMY_TRACK_MODIFICATIONS = False