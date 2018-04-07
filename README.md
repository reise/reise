# reise
A travel app POC using Angular 4, NodejS And Mongo DB

![demo](https://espnfivethirtyeight.files.wordpress.com/2015/03/flight-delay-620.gif)

# Installation & Setup
1. Clone  the repository and navigate to the root directory viz. `/reise`.

2. Install the dependencies using `npm run config` command (to be performed only for first time).

3. Run `npm run server` command to start the server.

4. Open a new command window and nevigate to the root directory viz. `reise`.

5. Run `npm start` to build the angular app.

Open http://localhost:3000 to start the app.

# Visual Studio Code
Visual Studio Code ships with Node JS debugging and if you are using this IDE, you can skip `STEP 3`.

To start server using visual studio code, press `ctrl + shift + D` and press `green arrow` next to `DEBUG` label, on the top left corner of IDE.

check folowing GIF for more information -

![demo](vs-code-debug-process.gif)

# Database Server

1. Connect to the production database server with `mongo "mongodb+srv://cluster0-utnpu.mongodb.net/test" --username manojc` (password required)

2. Take backup of database using `mongodump --db reise  --out FOLDER_PATH` (replace folder path with actual path)

3. To restore the database from backup folder, navigate to solution root directory.

4. Execute `mongorestore --db reise --drop /backup/reise/` command to restore database.

---

@author: Manoj Chalode chalodem@gmail.com

@copyright: © https://github.com/manojc 2018.
