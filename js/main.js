var $tableTarget = $(".table-target");
var $square = $("");
var colors = ["pink", "orange", "yellow", "green", "blue", "purple"];
var icons = ["fort-awesome", "motorcycle", "leaf", "star", "heart", "tree", "coffee", "diamond", "sun-o", "cloud", "cubes", "eye"];
var clickCount = 0;
var turnCount = 0;

function randomFrom(array){
  return array[Math.floor(Math.random() * array.length)];
};

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

renderTableHTML(4,4);
$square = $(".square");

function addRandomIcon(){
  $(this).children().after("<i class='icon fa fa-" + randomFrom(icons) + " fa-4x fa-" + randomFrom(colors) + "'>");
  $(this).find('.icon').hide();
};

$square.each(addRandomIcon);

// Now the board is all set up.

function toggleIcon(){
  var $face = $(this).find('.icon');
  var $back = $(this).find('.fa-square-o');
  $face.show();
  $back.hide();
  window.setTimeout(function(){
    $face.fadeOut(300, function(){
        $back.fadeIn();
    });
  }, 3000);
};

function takeATurn(){
  toggleIcon();
  clickCount += 1;
  if(clickCount == 2){
    turnCount += 1;
  }
};

$square.click(toggleIcons);
