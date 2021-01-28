// 3) Create one script with an if statement.

document.write(`<h1 class="a-title a-title-h1">assignment 01 - part 3:</h1>
<br>
<h2 class="a-title">
3) Create one script with an if statement.
</h2>
<br>
<br>`)
document.write("<p class='a-part2'>display if this number is even/odd: <br></p>");
for (var var2=1; var2<=10; var2++){
    
    document.write(`${var2} `);
    if(var2%2==0){
        document.write("this is even<br>");
    }else{
        document.write("this is odd<br>");
    }
    
}