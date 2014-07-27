#benben
Needed a simple 'mound' from which to build. This is the result, a work in progress.

## what's here
- Compass, [http://compass-style.org](http://compass-style.org)
- AngularJS, [https://angularjs.org](https://angularjs.org)
- Responsive ... bare, to the marrow, bones placeholder. 
- CSS3 stuff because everyone loves rounded corners and transistions. 

## use
### SCSS
- The SCSS gets it's own folder. 
- Adheres to [SMACSS](https://smacss.com)
- Everything resides in nice little partials that get called from screen.scss
- _variables.scss contains all your variables ... widths, colors, typography.
- _base.scss contains the basic styles relating to colors and type.
- _layout.scss == you guessed it, layout related styles (e.g. margins, padding, etc.)

### AngularJS
I'm still learning to use AngularJS, so there's that. Right now there's
- Using v1.2.18
- the root element, [ngApp](https://code.angularjs.org/1.2.18/docs/api/ng/directive/ngApp), is `benben`
- app.js contains the basic routing and references controllers.js
- Makes use of [ngRoute](https://code.angularjs.org/1.2.18/docs/api/ngRoute/service/$route) module
	- "used for deep-linking URLs to controllers and views (HTML partials)"
- `.js`, `.min.js`, and `.min.js.map` files kept in `/js/libs/`
- controllers.js have placeholders that write a line to the console.

## why
_I ain't got no time for that_ - My professional focus is UX design. Tools like [Yeoman](http://yeoman.io) are really powerful, and cool - writing `yo` in the command line is pretty friggin' fun. At this time, the learning curve was too steep for me to get these things working the way I wanted. Also, being an entrepreneur means I need to ship; this was the easiest way for me to do that. 

## the mythology
The Benben is a piece of Egyptian mythology, 

+ it is part of the creation myth, "Benben was the mound that arose from the primordial waters, Nu, and on which the creator god Atum settled"
+ the top stone on a pyramid, and thought to have been the prototype for the obelisks.
+ "It was the location on which the first rays of the sun fell"

So you see, the name seemed to fit my goal. And being one of those stereotypical English majors that found their way to technology, I love a good story. 