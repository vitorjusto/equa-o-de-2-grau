function calcular()
{
      var a= Number(document.getElementById("a").value);
      var b= Number(document.getElementById("b").value);
      var c= Number(document.getElementById("c").value);

      var delta, bap, ban;
      
      delta = (b * b) - 4*a*c;
      
      
      if (delta > 0)
      {
            bap = (0-b + Math.sqrt(delta))/(2*a);
            ban = (0-b - Math.sqrt(delta))/(2*a);
      
            document.getElementById("teste").innerHTML = bap + " e " + ban;      
      }else if(delta === 0)
      {
            bap = (0-b)/(2*a);
            
            document.getElementById("teste").innerHTML = bap;
      }else
      {
            document.getElementById("teste").innerHTML = "Não existe valor real";
      }
      


}