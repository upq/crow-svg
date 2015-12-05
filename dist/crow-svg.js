angular.module('crow.ui.svg', [
  'svg.shapes',
]);
;'use strict';
angular.module('svg.shapes' , [])
.constant('shapeConfig', {
   radius          : 50,
   strokeWidth     : 1,
   ringStrokeWidth : 0,
   ringStroke      : "#777",
   ringFill        : "#777",
   shape           : "cube",
   fill            : "rgba(92, 69, 84, 0.2)",
   stroke          : "#777",
   viewBox         : "0 0 64 64",
})
.directive('svgShape', ['shapes', 'shapeConfig',
function (shapes, shapeConfig) {
   var base = {
      restrict: "EA",
      replace: true,
      transclude: true,
      template: function(elem,attrs) {
         if (attrs.template){
            return attrs.template;
         } else {
            return '<div width="{{ radius }}" height="{{ radius }}">'+
            '<svg class="svg-shape-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="#777">'+
            '<path class="svg-shape-ring" fill="none"  d="M60,45 c0,1.7-1.2,3.7-2.6,4.5l-22.8,13c-1.4,0.8-3.8,0.8-5.2,0l-22.8-13C5.2,48.7,4,46.7,4,45V19c0-1.6,1.2-3.7,2.6-4.5l22.8-13 c1.4-0.8,3.8-0.8,5.2,0l22.8,13c1.4,0.8,2.6,2.8,2.6,4.5V45z"/>'+
            '<path class="svg-shape-shape" stroke="1" fill="none"></path>'+
            '</svg>'+
            '</div>';
         }
      },
      scope: {
         shape: '@',
         radius: '@',
         strokeWidth: '@',
         ringStrokeWidth: '@',
         ringStroke: '@',
         stroke: '@',
         viewBox: '@',
         ringFill: '@',
         fill: '@'
      },
   };

   return angular.extend(base, {

      link : function (scope, element) {
         var svgShapeSvg  = element.find(element[0].querySelector('.svg-shape-svg')),
         svgShapeShape    = element.find(element[0].querySelector('.svg-shape-shape')),
         svgShapeRing     = element.find(element[0].querySelector('.svg-shape-ring')),
         options          = angular.copy(shapeConfig);


         // to avoid having the viewbox instead of viewBox attribute
         svgShapeSvg.removeAttr("viewBox");

         svgShapeSvg.attr({
            // re-add it here
            "viewBox": scope.viewBox || "0 0 64 64",
            "height": scope.radius || 40,
            "width": scope.radius || 40,
         });

         svgShapeRing.attr({
            "stroke": scope.ringStroke || "#777",
            "stroke-width": scope.ringStrokeWidth || "0",
            "fill": scope.ringFill || "none"
         });
         svgShapeShape.attr({
            "d": shapes[scope.shape],
            "stroke-width": scope.strokeWidth || 1,
            "stroke": scope.stroke || "#777",
            "fill": scope.fill,
         });
      }

   });
}]);
