var $tableTarget = $(".table-target");
var $square = $("");
var colors = ["pink", "orange", "yellow", "green", "blue", "purple"];
var icons = ["fort-awesome", "motorcycle", "lightning", "leaf", "star", "heart", "tree", "coffee", "diamond", "sun-o", "cloud", "cubes", "eye"];

// This dynamically creates the board.
function renderTableHTML(x, y){
  var table = "";
  for(j = 1; j <= x; j++){
    var row = ("<div class='row row-" + j + "'>");
    var cells = function(){
      var column = "";
      for(i = 1; i <= y; i++){
          column = column + ("<div class='square col-xs-2 row-" + j + " column-" + i + "'><i class='fa fa-square-o fa-muted fa-5x'></i></div>");
        };
        return column;
      }();
      table = table + row + cells + "</div>";
    };
    $tableTarget.html(table);
  };

renderTableHTML(4,5);
$square = $(".square");
//
// function pinkMotorcycle(){
//   $test = $(".row-2.column-3.fa");
//   $test.hide();
//   $test.append("<i class='fa fa-motorcycle fa-pink'></i>");
//
// };

// Randomly assign pairs of icons to the board
// Can they be there all the time hidden?

function takeTurn(){
  alert("You clicked a square!");
};

$square.click(this, takeTurn);
