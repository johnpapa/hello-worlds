# Install Meteor 
## Windows
choco install meteor

## OSX/Linux
curl https://install.meteor.com/ | sh

# Create Meteor Project
meteor create projectname

# On User Windows
If you get some error like 'Errors prevented isopacket load:' While loading isopacket `combined`:, 
I think for to solve this proble this source 
https://stackoverflow.com/questions/60333092/meteor-update-isopacket-giving-combined-error-sourcemapconsumer-destroy-is-n
is the best way solution

# Run meteor project
If you want to run meteor project run the simply command *npm run start* or *meteor run*

# Testing
If you want to test your application you can run *npm run test*

# Build
To bundle this project you can use run meteor build --directory <yourpath>
WARNING: The output directory is under your source tree. Your generated files may get interpreted as source code! Consider building into a different directory instead. meteor build ../output -> This is suggestion from meteor
or if you want show visualization after build just run *npm run visualize*