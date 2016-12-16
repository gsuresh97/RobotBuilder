#! /bin/bash

python -m pip install --upgrade pip
pip install -r ./requirements.txt
wget https://github.com/gsuresh97/RobotBuilder/archive/master.zip
unzip -q master.zip
rm -f RobotBuilder/src/compDatabase.db
for i in $(ls RobotBuilder/src/interface/ppr/svggen/library) do
    if [[ "$i" =~ "user_" ]]; then
        mv "RobotBuilder/src/interface/ppr/svggen/library/$i" "RobotBuilder-master/src/interface/ppr/svggen/library"
    fi
done
for i in $(ls RobotBuilder/src/interface/ppr/svggen/builders) do
    if [[ "$i" =~ "builderuser_" ]]; then
        mv "RobotBuilder/src/interface/ppr/svggen/builders/$i" "RobotBuilder-master/src/interface/ppr/svggen/builders"
    fi
done
rm -rf RobotBuilder
mv RobotBuilder-master/ RobotBuilder
python RobotBuilder/src/interface/ppr/populateDatabase.py
rm -f master.zip
cd RobotBuilder/src
python manage.py runserver
