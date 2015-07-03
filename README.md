* to run program

```node code.js titanic```

* steps to replicate
* make a new folder and inside of it

```npm init```

```npm install request --save```

```touch code.js```

* open up code.js and copy and paste sample code from request library page: http://www.omdbapi.com/

* replace URL to hit with omdb api url call

* use arguments passed to the script using node's process library - which is built into node to replace the movie with what's passed to the script like this: process.argv[2]
	* https://docs.nodejitsu.com/articles/command-line/how-to-parse-command-line-arguments
