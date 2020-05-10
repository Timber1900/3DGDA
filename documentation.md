# Descriptive geometry exercices visualizer!

#### Point(x, y, z)
>`Creates a point and renders it to the screen.`


#### Line(x1, y1, z1, x2, y2, z2)
>`Creates a line and renders it to the screen.`


#### Plane(frontal, horizontal)
>`Use for creating oblique planes.`


#### PlaneH(z)
>`Use for creating horizontal planes.`


#### PlaneF(y) 
>`Use for creating frontal planes.`


#### PlaneP(x) 
>`Use for making profile planes.`


#### PlaneV(horizontal)
>`Use for creating vertical planes.`


#### PlaneT(frontal) 
>`Use for creating top planes.`


#### PlaneR(frontal, horizontal)
>`Use for creating ramp planes.`


#### shape2d([Points])
>`Use for creating a 2d shape(Make sure the points are orderedso that the next one is next on a clockwise motion), you may use Points class and points[] array`


#### pyramid([Points]) 
>`Use for creating a pyramid` (Make sure the last point of the array is the vertex and that the rest are ordered, so that the next one is next on a clockwise motion)`, you may use Points class and points[] array.`

        Example: [{x:0, y:0, z:0}, {x:0, y:1, z:0}, {x:1, y:1, z:0}, {x:1, y:0, z:0}, {x:0.5, y:0.5, z:2}]

#### prism([Points]) 
>`Use for creating a prims`(Make sure the points are ordered so that you create a base first and then move to the face with points directly on top)`,  you may use Points class and points[] array`

        Example: [{x:0, y:0, z:0}, {x:0, y:1, z:0}, {x:1, y:1, z:0}, {x:1, y:0, z:0}, {x:0, y:0, z:1}, {x:0, y:1, z:1}, {x:1, y:1, z:1}, {x:1, y:0, z:1}]
