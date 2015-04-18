/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(init);

function init() {
var path = $.fn.scrollPath("getPath", {
    scrollSpeed: 80, // Default is 50
    rotationSpeed: Math.PI / 10 // Default is Math.PI / 15
});
path.moveTo(100,100,{name:"intro"});
path.lineTo(2500,1250,{name:"information"});
path.lineTo(2750,500,{name:"formation"});
path.lineTo(4000,1000,{rotate:1* Math.PI,name:"connaissance"});
path.lineTo(3900,1800,{rotate:2* Math.PI,name:"activite"});


$("#scrollArea").scrollPath();

}