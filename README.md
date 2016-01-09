# crow-svg
SVG directive for Crow.
Optimizes SVG usage in angular applications.

# How it Works?
it basically uses the d attribute of an svg path and feeds it to a configurable template.

# Usage.
### Optimize your SVG shape to a single path.
- Make compund path
- Use your favourite svg optimization tool.

### Load The module
``` javascript
var app = angular
.module('crow', [
   'crow.ui.svg',
]) 
```

### Create an object that contains only the d attribute of the svg shape.

```javascript
.service('shapes', [function(){
   var shapes = {
      backpack: "M20.4,29.4c-1.1,1.2-1.8,2.8-1.8,4.5v2.7c-1,0.7-2.1,2.3-2.1,4V45c0,1.9,1,3.5,2.5,4.2 c0.8,2.8,3.4,4.8,6.4,4.8h13.5c3,0,5.6-2,6.4-4.8c1.5-0.6,2.5-2.3,2.5-4.2v-4.5c0-1.8-1-3.3-2.1-4v-2.7c0-1.7-0.7-3.3-1.8-4.5 M18.7,24.9 M41.8,38.5v10.2c0,1.1-1.2,1.6-1.8,1.6l0,0l-15.8,0c-1.6-0.4-1.8-1.5-1.7-2.1v-9.6 M42.9,36.6c-2.7,5.6-6.1,6.3-6.3,6.3 l-0.1,0l-7.8,0c-0.1,0-0.1,0-0.2,0c-4.2,0-7-6-7.1-6.3 M21.5,36.6c0.1-0.2,2.7-4.1,6.9-4.1c0.1,0,3.8,0,3.8,0h-0.1 c0.1,0,3.8,0,3.8,0c4.2,0,6.8,3.9,6.9,4.1 M25.3,31.2L25.3,31.2L25.3,31.2L25.3,31.2z M33.8,44.1h-3.5v-2.7h3.5V44.1z M32.1,6.3 c3.1,0,5.7,2.7,6.2,6.1c-1.8-0.6-3.5-1.4-6.2-1.4c-2.2,0-4.2,0.8-6.1,1.4C26.5,9,29,6.3,32.1,6.3z M20.6,18.4 c1.5-3.5,5-7.3,11.6-7.3c6.6,0,10,3.8,11.6,7.3c1.6,3.5,1.6,7,1.6,7c0,3.3-3.2,6-7.1,6h-12c-3.9,0-7.1-2.7-7.1-6 C19,25.4,19,22,20.6,18.4z M28.1,36.8h-3.6c-0.4,0-0.7-0.3-0.7-0.8c0-0.4,0.3-0.8,0.7-0.8h3.6c0.4,0,0.7,0.3,0.7,0.8 C28.8,36.4,28.5,36.8,28.1,36.8z M28.1,21.1h-3.6c-0.4,0-0.7-0.3-0.7-0.8c0-0.4,0.3-0.8,0.7-0.8h3.6c0.4,0,0.7,0.3,0.7,0.8 C28.8,20.8,28.5,21.1,28.1,21.1z M27.3,24.2l-1.8,0c0,0,0,0-0.1,0c-0.3,0-0.5,0.1-0.5,0.3l0,2.6c0,0.2,0.1,0.5,0.6,0.5h1.9 c0.2,0,0.7-0.1,0.7-0.5v-2.5C27.9,24.6,27.9,24.2,27.3,24.2z M27.3,44.1l-1.8,0c0,0,0,0-0.1,0c-0.3,0-0.5,0.1-0.5,0.3l0,2.6 c0,0.2,0.1,0.5,0.6,0.5h1.9c0.2,0,0.7-0.1,0.7-0.5v-2.5C27.9,44.5,27.9,44.1,27.3,44.1z M25.4,27.7h1.8V35h-1.8V27.7z M27.3,19.4 h-1.8v-6.2l1.8-0.7v0.9V19.4z M27.3,24h-1.8v-2.7h1.8v0.2V24z M25.4,47.6h1.8v7.2h-1.8V47.6z M25.4,36.9h1.8v7h-1.8V36.9z M35.8,36 c0-0.4,0.3-0.8,0.7-0.8h3.6c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.8-0.7,0.8h-3.6C36.1,36.8,35.8,36.4,35.8,36z M35.8,20.3 c0-0.4,0.3-0.8,0.7-0.8h3.6c0.4,0,0.7,0.3,0.7,0.8c0,0.4-0.3,0.8-0.7,0.8h-3.6C36.1,21.1,35.8,20.8,35.8,20.3z M36.6,24.6v2.5 c0,0.4,0.4,0.5,0.7,0.5h1.9c0.5,0,0.6-0.3,0.6-0.5l0-2.6c-0.1-0.2-0.3-0.3-0.5-0.3c-0.1,0-0.1,0-0.1,0l-1.8,0 C36.6,24.2,36.6,24.6,36.6,24.6z M36.6,44.5V47c0,0.4,0.4,0.5,0.7,0.5h1.9c0.5,0,0.6-0.3,0.6-0.5l0-2.6c-0.1-0.2-0.3-0.3-0.5-0.3 c-0.1,0-0.1,0-0.1,0l-1.8,0C36.6,44.1,36.6,44.5,36.6,44.5z M39.1,35h-1.8v-7.4h1.8V35z M37.3,13.4v-0.9l1.8,0.7v6.2h-1.8V13.4z M37.3,21.5v-0.2h1.8V24h-1.8V21.5z M39.1,54.8h-1.8v-7.2h1.8V54.8z M39.1,43.9h-1.8v-7h1.8V43.9z M27.1,26.8h-1.6v-1.7h0.5l0,0.4 l0.6,0v-0.4h0.5V26.8z M27.1,46.6h-1.6V45h0.5l0,0.4l0.6,0V45h0.5V46.6z M37.4,25.1h0.5v0.4l0.6,0l0-0.4H39v1.7h-1.6V25.1z M37.4,45 h0.5v0.4l0.6,0l0-0.4H39v1.7h-1.6V45z",
      gameboy: "M46.7,10.7v33.9c0,0.1,0,0.2-0.1,0.3l-7.3,9.6c-0.1,0.1-0.2,0.2-0.4,0.2H18.6c-0.2,0-0.4-0.2-0.4-0.4 V10.7c0-0.2,0.2-0.4,0.4-0.4h27.6C46.5,10.3,46.7,10.5,46.7,10.7z M21.1,30.5H44c0.2,0,0.4-0.2,0.4-0.4V13.3c0-0.2-0.2-0.4-0.4-0.4 H21.1c-0.2,0-0.4,0.2-0.4,0.4V30C20.7,30.3,20.9,30.5,21.1,30.5z M42.9,49.4l-3.6-2.6 M42.3,50.1l-2.8-2 M37.6,46.8l0.7,0.5 M35.9,49.3L35.9,49.3 M41.7,50.9l-3.5-2.5 M36.7,48.6l4.5,3.2 M36.6,49.8l3.9,2.8 M27.3,36.8H26c-0.2,0-0.4-0.2-0.4-0.4v-1.2 c0-0.2-0.2-0.4-0.4-0.4h-1.7c-0.2,0-0.4,0.2-0.4,0.4v1.2c0,0.2-0.2,0.4-0.4,0.4h-1.2c-0.2,0-0.4,0.2-0.4,0.4v1.7 c0,0.2,0.2,0.4,0.4,0.4h1.2c0.2,0,0.4,0.2,0.4,0.4v1.2c0,0.2,0.2,0.4,0.4,0.4h1.7c0.2,0,0.4-0.2,0.4-0.4v-1.2c0-0.2,0.2-0.4,0.4-0.4 h1.2c0.2,0,0.4-0.2,0.4-0.4v-1.7C27.7,37,27.5,36.8,27.3,36.8z M37.3,40.8c-1,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7 S38.3,40.8,37.3,40.8z M41.6,38c-1,0-1.7,0.8-1.7,1.7c0,1,0.8,1.7,1.7,1.7c1,0,1.7-0.8,1.7-1.7C43.3,38.8,42.6,38,41.6,38z",
   };
   return shapes;
}]);
   ```
You can provide the object as ```$scope``` or ```$rootScope``` too.

### In your html
```html
      <ul>
         <li>
            <svg-shape shape="backpack" stroke-width="1" stroke="#FAFAFA" radius="90"></svg-shape>
         </li>
         <li>
            <svg-shape shape="gameboy" stroke-width="1" stroke="#FAFAFA" radius="90"></svg-shape>
         </li>
      </ul>
```

Check out the example for advanced usage with svg gradients and filters and for more options.

# Browser Support

**[The same basic support for svg.](http://caniuse.com/#feat=svg "SVG support")**

#### 

#License

(The MIT License)

Copyright (c) 2016 Up q undefind@null.net

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
   
   
   
