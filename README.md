# BEHAVIOR INTERACTIVE TECH test
## Installation Steps

### Are you creating this Node.js app from scratch? Then please follow these steps.

#### 0) Install NodeJS

This project runs on a Node app, and to before we get it working we have to follow a few steps before hand.

0.1) Install NodeJS on your computer. Easiest way is to grab an executable file off their website: https://nodejs.org/en/download/
0.2) Node's own Package manager should already come with the installation. To double check it's there, go to your Command Prompt Window and type:

node -v

To ensure you have the Node Package Manager installed you may also type in:

npm -v

#### 1) Begin setting up the project

Now we can begin setting up our project! Please keep in mind most of these actions will be performed in the Command Line Prompt.

Let's start by unzipping the project folder, anywhere will do. For the sake of these instructions we'll assume you'll have placed the project folder on your Desktop.

#### 2) Install dependencies

In the Command Line, navigate to the project folder by inputting the following command and pressing enter. Don't forget to replace YOURUSERNAME with the username you chose for yourself on your computer.

cd C:\Users\YOURUSERNAMEHERE\Desktop\behaviorTest

Once this is done, input the following command to install all the dependencies associated to the project by inputting the following command:

npm install

Please be patient as all dependencies install on the project, it may take up to a minute.

#### 3) Fire up the Node server

We now need to activate our NodeJS server. To do so, in our Command Line window we'll input the following command:

node app.js

This process will now occupy this Command Line Window. If successful, you should have received the following message:

Server is running at => http://localhost:4000/
You may go there on via your browser, or CTRL + C to shut the server down.

#### 4) Start Gulp

Before we can see our application in action, we'll need to build our files, and we'll need to enable Gulp to do so.

For this step we'll need to open another Command Line Window. Navigate to the same folder we were at in the previous window. Again, you may do so using this command:

cd C:\Users\YOURUSERNAMEHERE\Desktop\behaviorTest

Once here, let's build our application by inputting the following command:

gulp

#### 5) We're done!

Head to http://localhost:4000/, we can now explore this little application freely.
