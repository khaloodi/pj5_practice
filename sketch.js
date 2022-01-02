/*
The setup() function is a built-in p5.js function used to set the sketch’s initial state when the sketch begins. It is typically used to create the canvas, set the framerate, or set initial styles (such as stroke and fill color) for the shapes to be drawn in the sketch. It runs only once at the start of the sketch.
*/

/*
You might have noticed that the setup() function is never explicitly called in the sketch. That is because the p5.js library automatically executes a sequence of functions, like setup(), which should be called by the library, not the programmer.

Let’s take a look at the order of events when an HTML page that includes the p5.js library and a p5.js sketch file is loaded:

Scripts in the <head> element of the HTML page are loaded.
The <body> element of the HTML page loads, and an onload event fires, which triggers the next step.
The p5.js library is started, and all built-in p5.js functions can be used in your sketch file.
The p5.js library will automatically call the setup() function and create an HTML <canvas> element.
*/

function setup() {
    // Setup code goes here
    // TODO: Create a canvas that is 400px wide and 400px tall
    createCanvas(400, 400)
}

function draw() {
    // Drawing code goes here

}