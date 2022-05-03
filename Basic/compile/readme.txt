How to compile multiple file at once in TS.

    1. you have to generate config file to run multiple file in TS.
        run command on cmd : "tsc -init"   this command create config file.

    2. After that you have to run watch command for run ts files.
        run command on cmd : "tsc --watch" OR "tsc -w"
    
    3. Add all those file which you have to run in "index.html" file.
        <script src="Basic/typeNever.js"></script>
