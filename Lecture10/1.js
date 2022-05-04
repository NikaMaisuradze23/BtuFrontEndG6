function generate_table() {
    
    var body = document.getElementsByTagName("body")[0];
  
    
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var M = parseInt(prompt('ჩაწერეთ რიგი: '))
    var N = parseInt(prompt('ჩაწერეთ სვეტი: '))
    
    
    for (var i = 0; i < M; i++) {
      
      var row = document.createElement("tr");

        
      for (var j = 0; j < N; j++) {
        
        var cell = document.createElement("td");
        var cellText = document.createTextNode("რიგი "+i+", სვეტი "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
     
      tblBody.appendChild(row);
    }
  
    
    tbl.appendChild(tblBody);
    body.appendChild(tbl); 
    tbl.setAttribute("border", "2");
}

var colors = ["red","blue","green"];
    function RandomColor(){
        var x = document.querySelectorAll('table td');
        x.forEach(function( td ){
            var index = getRandomIntInclusive( 0, colors.length-1 );
            td.style.backgroundColor = colors[index];
        });

    }
