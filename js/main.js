var $tableTarget = $(".table-target");
var $square = $("");
var colors = ["pink", "orange", "yellow", "green", "blue", "purple"];
var icons = ["fort-awesome", "motorcycle", "lightning", "leaf", "star", "heart", "tree", "coffee", "diamond", "sun-o", "cloud", "cubes", "eye"];

var randomIcon = icons[Math.floor(Math.random() * icons.length)];

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

<i class='fa fa-" + randomIcon + " fa-muted fa-5x' style='display:none'></i>

for each square
Create a new Square object
  object.index = 2x4
  object.class = $class
  object.icon = icon
  object.color = color

//
// function pinkMotorcycle(){
//   $test = $(".row-2.column-3.fa");
//   $test.hide();
//   $test.append("<i class='fa fa-motorcycle fa-pink'></i>");
//
// };


// var Card = {
//   //
// };
// Find the size of the board, divide by 2 (10)
// Pick 10 unique icons, assign each twice to a random index
// When you click a square, it asks what its card is, then shows it



// Iteratively assign squares to board object?






// Start with an array or object representing the board
// Randomly assign pairs of icons to the board
// When one is clicked, show it

// TODO: can they be there all the time hidden?

function takeTurn(){
  $(this).;
};

$square.click(this, takeTurn);
