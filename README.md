# CallbackSwell

Async and callbacks can be tricky. Here's a quick exercise to help get your head around the ideas.

For more on callbacks and Node, look at [Chapter 20 of Eloquent JavaScript](http://eloquentjavascript.net/20_node.html) and [the Callbacks section of Art of Node](https://github.com/maxogden/art-of-node#callbacks).

1. Write a short bit of code that uses the `fs` module to read a directory. The callback should look have `err` and `data` parameters. Use an if / else to catch the `err`. Run it using `node filename.js`.
2. Now rewrite your code as a function with an argument.
<!-- 3. Quick sidestep: pull out the callback as a named function. -->
4. Use nested callbacks and `readFile` to read the contents of the dir.
