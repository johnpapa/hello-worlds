# Install Meteor 

## Windows
choco install meteor

## OSX/Linux
curl https://install.meteor.com/ | sh

## Create meteor project
meteor create projectname

## User windows
If you get some error like 'Errors prevented isopacket load:' While loading isopacket `combined`:, 

I think for to solve this problem this source is the best way solution

https://stackoverflow.com/questions/60333092/meteor-update-isopacket-giving-combined-error-sourcemapconsumer-destroy-is-n


## Run
If you want to run meteor project run the simply command *npm run start* or *meteor run*

## Build
To bundle this project you can use run *meteor build --directory <yourpath>*

WARNING: The output directory is under your source tree. Your generated files may get interpreted as source code! Consider building into a different directory instead. meteor build ../output -> This is suggestion from meteor

or if you want show visualization after build just run *npm run visualize*
