#! /bin/sh

python -m pip install --upgrade pip
pip install -r ./requirements.txt
cd ./src
python manage.py runserver
