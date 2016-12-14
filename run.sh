#! /bin/sh

python -m pip install --upgrade pip
pwd
pip install -r ./requirements.txt
cd ./src
python manage.py runserver

