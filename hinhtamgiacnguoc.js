var  n=5,j, i;

for(i = 1; i <= n; i++){
        for(j=1; j<i; j++){
            document.writeln("_");
        }
 
        for(j=1; j<=(n*2-(2*i-1)); j++){
            document.writeln("*");
        }
 
        
        document.writeln("<br/>");
    }