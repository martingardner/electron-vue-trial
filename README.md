# electron-vue-trial

- the initial thought is separate the two concerns, make the electron one folder and the vue another folder. Have the final build of vue end up in the src of electron and then have electron run that. Since Electron just runs html/js/css and the end result of vue is a js file attached to an index, this should work in theory.
- using https://github.com/electron/electron-packager for the builder.
- note everything in the Electron Demo-win32-x64 folder is needed to run it, basically it's the aftereffect of a wizard install. To test I created a shortcut link off of the .exe and put it on my desktop and it runs
- note this is an .exe in the purest sense, it will not add anything to the registry for Windows.

# caveat's

- currently copying final dist over into electron shell
- when copying index.html, note, you have to update the scripts in the index file so that it has "" and the path starts with ./

# todo's

- with this current setup, Vue can't really make use of Electron's inherant functions, like accessing the file system or clipboard stuff etc... which may not be a problem unless it is
- have a build that will work with windows, don't have one for linux binaries or mac .app
