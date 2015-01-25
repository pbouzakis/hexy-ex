hexy-ex
=======

Example of using hexagonal (aka ports and adapter) architecture on the frontend in JS.

npm scripts
===========
 - `npm run build` to bundle (w/ gulp + browserify) JS for the browser.
 - `npm start` run python simple http server. Here for convenience, use whatever you want.
 - `npm test` duh. mocha.
 - `npm run lint` jshint all the things.

source code written in ES6 (aka ES 2015)
========================================
Using 6to5 to transpile source into valid ES5. 
Friendly FYI :)

Entity State
============
Entities are injected with a state object.
This object is live meaning that it provides hooks for application adapters
to manage (most often is for the storage adapter to save the data).

Therefore when using the state object, when getting/setting values you must always
reference off of the state object otherwise the data is copied by value to the new var, 
leaving the state with the old value, and therefore not able to hook into the change.


Example:
```
function createEntity(_state) {
    return {
        makeThatChange(size) {
            _state.size = size; // Good

            var _size = _state.size;
            _size = size; // Bad
        }
    };
}
```

If this too much of a leaky abstraction, an alternative solution might be to just
use property objects, where aliasing is less likely.

```
var size = _state.size;

size.set(newValue);
size.get();
```
