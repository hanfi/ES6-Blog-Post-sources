#ES6 Blog post sources
those are the sources from my post on blog.neoxia.com





This begins from a boilerplate repo to make it easy to experiment with [ES6]. [es6-6to5-browserify-boilerplate](https://github.com/thoughtram/es6-6to5-browserify-boilerplate)

you can simply use a Docker env we have a Dockerfile :
```bash
docker build -t hanfi/es6_env  github.com/hanfi/ES6-Blog-Post-sources
docker run --name="es6_env" -p 3000:3000 hanfi/es6_env -v /folder_to_share/:/app
````

or run it directly on the host

this is the copy paste from the boilerplate README

### Initial setup

```bash
# Clone the repo...
git clone https://github.com/hanfi/ES6-Blog-Post-sources.git
cd ES6-Blog-Post-sources.git

# Then, you need to install all the dependencies...
npm install

# If you wanna be able to use global commands `karma` and `gulp`...
npm install -g gulp
```

### Running in the browser
```bash
gulp build
gulp serve

# If you wanna Gulp to re-build on every change...
gulp watch
```

### WTF is ES6?
Simply, the next version of JavaScript that contains some really cool features. You might check out some of these:

- https://wiki.mozilla.org/ES6_plans
- http://globaldev.co.uk/2013/09/es6-part-1/
- http://code.tutsplus.com/tutorials/eight-cool-features-coming-in-es6--net-33175


### What are all the pieces involved?

#### [6to5]
Transpiles ES6 code into regular ES5 (today's JavaScript) so that it can be run in a today browser. Like traceur but doesn't need a runtime to work.

#### [CommonJS]
6to5 is configured to transpile ES6 modules into CommonJS syntax and we use browserify to bundle the code into one file to deliver it to the browser.

#### [Browserify]
Browserify walks through all files and traces down all `require()`s to bundle all files together.  

#### [Gulp]
Task runner to make defining and running the tasks simpler.

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
[6to5]: https://6to5.github.io
[CommonJS]: http://wiki.commonjs.org/wiki/CommonJS
[Browserify]: http://browserify.org/
[Gulp]: http://gulpjs.com/

