var m=5, n=5;
var row, col;

  for(row=0; row<m; row++){
            for(col=0; col<n; col++){
                if (row==0 ||row==m-1||col==0||col==n-1)
                document.writeln("*");
                else
                document.writeln("_");
            }
            document.writeln("<br/>");
        }
        document.writeln("<br/>");
