var  h=4, m = h, n = h;
var i, j;
   for (i = 1; i <= h; i++){
      for (j=1; j<=2*h-1; j++){  //2*h-1 là chiều dài đáy
         if (j == m || j == n || i== h)
         document.writeln("*");
         else
         document.writeln("_");;
      }
      m--;
      n++;
      document.writeln("<br/>");
   }