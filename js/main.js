var playerTurn = 1;
var $playerTurn = $(".player-turn");
var $tableTarget = $(".table-target");
var gameOver = false;
var $square = $("");

function renderTableHTML(x, y){
  var table = "";
  for(j = 1; j <= x; j++){
    var row = ("<div class='row row-" + j + "'>");
    var cells = function(){
      var column = "";
      for(i = 1; i <= y; i++){
          column = column + ("<div class='square col-xs-1 row-" + j + " column-" + i + "'><i class='fa fa-square-o fa-3x'></i></div>");
        };
        return column;
      }();
      table = table + row + cells + "</div>";
    };
    $tableTarget.html(table);
  };

renderTableHTML(8,10);
$square = $(".square");

$square.click(this, takeTurn);
