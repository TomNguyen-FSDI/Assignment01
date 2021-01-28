// 1) Create one script with 20 different variables an display them on the HTML.

// 2) Create one script with a for loop and display the numbers from 1 to 100, 2 by 2.

// 3) Create one script with an if statement.

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
1) Create one script with 20 different variables and display them on the HTML.
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



document.write(`<h1 class="a-title a-title-h1">assignment 01 - part 2:</h1>
<br>
<h2 class="a-title">
2) Create one script with a for loop and display the numbers from 1 to 100, 2 by 2.
</h2>
<br>
<br>`)
document.write("<p class='a-part2'>display odd numbers: <br></p>");
for (var var2=1; var2<=100; var2+=2){
    var1 = var1 + 1;
    
    document.write(`${var2} `);
    if(var1%10==0){
        document.write("<br>");
    }else if(var2<99){
        document.write(",");
    }else{
        document.write("<br>");
    }
    
}

document.write("<p class='a-part2'>display even numbers: <br></p>");
for (var var2=2; var2<=100; var2+=2){
    var1 = var1 + 1;
    
    document.write(`${var2} `);
    if(var1%10==0){
        document.write("<br>");
    }else if(var2<99){
        document.write(",");
    }else{
        document.write("<br>");
    }
    
}

document.write(`<h1 class="a-title a-title-h1">assignment 01 - part 3:</h1>
<br>
<h2 class="a-title">
3) Create one script with an if statement.
</h2>
<br>
<br>`)
document.write("<p class='a-part2'>display if this number is even/odd: <br></p>");
for (var var2=1; var2<=10; var2++){
    var1 = var1 + 1;
    
    document.write(`${var2} `);
    if(var2%2==0){
        document.write("this is even<br>");
    }else{
        document.write("this is odd<br>");
    }
    
}