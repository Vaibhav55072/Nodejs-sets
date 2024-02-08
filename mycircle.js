//creating an object and creating functions in it and exporting
var box={
    area:function(pi=3.14);
    var r=20;
    var ans=pi*r*r;//formula------>area of circle
    console.log(ans);
},

c:function(pi=3.14);
{
    var r=20;
    var ans=2*pi*r;//formula------>circumferences of circle
    console.log(ans);  
};
module.exports(box);




//circle.js
//creating another file and calling it there 
var mod=require('./mycircle.js')// giving path of previous file
mod.area();//calling function
mod.circumferences();//calling function
