// 2) Create one script with a for loop and display the numbers from 1 to 100, 2 by 2.

var var1=0;
var var3=true;

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