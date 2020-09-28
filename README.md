# installation

- 2 separate projects, one for vue and 1 for electron
- cd into each and run npm install

# electron-vue-trial

- the initial thought is separate the two concerns, make the electron one folder and the vue another folder. Have the final build of vue end up in the src of electron and then have electron run that. Since Electron just runs html/js/css and the end result of vue is a js file attached to an index, this should work in theory.
- using electron-forge for the electron side (global install npm install -g electron-forge)
- 2 forms of build squirrel.windows build which simply installs but does not give you the option to choose directory (default for electron-forge) or WiX which is the traditional installer with options but requires admin rights for user and needs install on development computer (see todos);

# electron folder (old)

- uses electron-packager but ran into problems with electron-windows-installer, can only do version of squirrel and doesn't put anything on the desktop by default so you have to hunt for the files after installation.

# caveat's

- when copying index.html, note, you have to update the scripts in the index file so that it has "" and the path starts with ./

# todo's

- with this current setup, Vue can't really make use of Electron's inherant functions, like accessing the file system or clipboard stuff etc... which may not be a problem unless it is
- have a build that will work with windows, don't have one for linux binaries or mac .app
- currently when I double click the exe it installs inside my /ProgramFiles folder automatically, it doesn't give me a prompt where to install. Need to investigate to see if I can find out how to give a prompt (if this library can) to choose where it gets installed.
- above is squirrel.windows install, still need to work on

# steps i'm using (electron-forge folder)

- develop in vue folder
- npm run build when done so that I get a dist folder of assets
- move assets over to electron-forge src folder is targeting
- note vue build's idiocy of not using "" on script path, add those in as well as update the path to be ./
- npm run start to make sure it works in electron
- run `npm run make` to make files in /out folder

# steps I'm using (old - electron folder)

- develop in vue folder
- npm run build in vue when done so that I get a dist folder of assets
- move assets over to electron dist folder where main.js is targeting
- note vue build's idiocy of not using "" on script path, add those in as well as update the path to be ./
- npm run start to make sure it works in electron
- npm run package to run electron-builder and build out the file
- don't commit final product on this repo because of current file size limit, this step will change whenever I get around to updating my account
- everything inside of electron-demo-win32-x64 is needed to run, can make shortcut of exe inside of course but it should be noted this isn't a wizard that installs anything, it's the end result of an exe and it's assets needed to run.
- on a new npm run package, if there is an existing electron-demo-win32-x64 folder, delete that first before running the command. Make sure there is no caching issues.
- then do a npm run win-exec to use electron-windows-installer
