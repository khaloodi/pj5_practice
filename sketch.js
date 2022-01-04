/*
The setup() function is a built-in p5.js function used to set the sketch’s initial state when the sketch begins. It is typically used to create the canvas, set the framerate, or set initial styles (such as stroke and fill color) for the shapes to be drawn in the sketch. It runs only once at the start of the sketch.
*/

/*
- setup() function is never explicitly called in the sketch
- p5.js library automatically executes a sequence of functions, like setup(), which should be called by the library, not the programmer

Let’s take a look at the order of events when an HTML page that includes the p5.js library and a p5.js sketch file is loaded:

Scripts in the <head> element of the HTML page are loaded.
The <body> element of the HTML page loads, and an onload event fires, which triggers the next step.
The p5.js library is started, and all built-in p5.js functions can be used in your sketch file.
The p5.js library will automatically call the setup() function and create an HTML <canvas> element.
*/

function setup() {
    // Setup code goes here
    // Create a canvas that is 400px wide and 400px tall
    createCanvas(1440, 400)
        // We can call the background() function after the canvas is created to set a solid color for the background. The background() function is only executed one time, because it is called in the setup() function.
    frameRate(10) // Run the draw() function once per second
}

function draw() {
    background('rgba(0,255,0, 0.25)')
        // flicker different grey backgrounds:
        // background(Math.floor(Math.floor(Math.random() * 156)))
        // Drawing code goes here
        // The draw() function is similar to the setup() function in that p5.js will automatically execute it at the right time. The draw() function will run after all the code in the setup() function is complete. Note that like the setup() function, the draw() function should not be explicitly called.

    //Unlike the setup() function, the draw() function will repeatedly execute in what is known as the draw loop. The draw() function is also referred to as the draw() loop because the code block in the function will execute infinitely until the sketch ends by closing the browser window or navigating away from the sketch. The draw loop will also terminate when the noLoop() function is called.
    rect(30, 20, 100, 200)

}

/*First, the HTML page loads the library, then the setup() function is automatically called once and creates an HTML <canvas> element, and finally, the draw() function runs in an infinite loop.*/