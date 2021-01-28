// 1) Create one script with 20 different variables an display them on the HTML.



var var1=0;
var var2=0;
var var3=true;
var var4="this";
const var5="is";
const var6="a";
const var7="number";
const var8="boolean";
const var9="string";
const var10="variable";
const var11="null";
const var12="decimal";
var var13=1.1;
let var14=null;
let var15=1.2;
let var16=3;
let var17=" ";
let var18=false;
const var19="\"";
const var20=":";


document.write(`<h1 class="a-title">assignment 01 - part 1:</h1>
<br>
<h2 class="a-title">
1) Create one script with 20 different variables an display them on the HTML.
</h2>
<br>
<br>`)
document.write("<p class='a-part2'>display 20 variables: <br></p>");
document.write(`
var1 = ${var1} , 
var2 = ${var2} ,
var3 = ${var3} ,
var4 = ${var4} ,
var5 = ${var5} ,
var6 = ${var6} ,
var7 = ${var7} ,
var8 = ${var8} ,
var9 = ${var9} ,
var10 = ${var10} , <br>
var11 = ${var11} ,
var12 = ${var12} ,
var13 = ${var13} ,
var14 = ${var14} ,
var15 = ${var15} ,
var16 = ${var16} ,
var17 = ${var17} ,
var18 = ${var18} ,
var19 = ${var19} ,
var20 = ${var20} ,
<br><br><br>
${var4} ${var5} ${var6} ${var10} ${var7}: ${var1} 
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var7}${var20}${var17}${var2}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var8}${var20}${var17}${var3}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var9}${var20}${var17}${var19}${var4}${var17}${var5}${var17}${var6}${var17}${var9}${var19}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var11}${var20}${var17}${var14}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var12}${var20}${var17}${var13}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var12}${var20}${var17}${var15}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var7}${var20}${var17}${var16}
<br>${var4}${var17}${var5}${var17}${var6}${var17}${var10}${var17}${var8}${var20}${var17}${var18}
`);
