//Rectangle.js
//creating a function for Finding an area of Reactangle
var rec={
    area:function(l,b){
        var ans= l*b;
        console.log("Area of Rectangle is:"+ans)
  };


}
module.exports(rec);



//creating a new file named as:  React.js
var fun=require('./Rectangle.js')
fun.area(10,20);


