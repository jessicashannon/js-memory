var $tableTarget = $(".table-target");
var $square = $("");
var colors = ["pink", "orange", "yellow", "green", "blue", "purple", "teal", "light-pink", "light-purple", "periwinkle"];
var icons = ["fort-awesome", "motorcycle", "leaf", "star", "heart", "tree", "coffee", "diamond", "sun-o", "cloud", "cubes", "eye"];
var counter = 0;
var turn = 0;
var x = 4;
var y = 4;

function removeFromArray(array, item){
  var index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  };
};

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

renderTableHTML( x, y );
$square = $(".square");

function randomColoredIcon(){
  var icon = randomFrom(icons);
  var color = randomFrom(colors);
  removeFromArray(icons, icon);
  return "<i class='icon fa fa-" + icon + " fa-4x fa-" + color + "' data-icon='" + icon + " " + color + "'>"
};

var iconArray = function(){
  var array = [];
  for( var i = 0; i < (x*y/2); i++ ){
    array.push(randomColoredIcon());
  };
  array = $.merge(array, array)
  return array;
}();

function addRandomIcon(){
  var temp = randomFrom(iconArray);
  $(this).children().after(temp);
  $(this).find('.icon').hide();
  removeFromArray(iconArray, temp);
};

$square.each(addRandomIcon);

// Now the board is all set up.

function showIcon(el){             // Flips a card
  var $face = $(el).find('.icon');
  var $back = $(el).find('.fa-square-o');
  $face.show();
  $back.hide();
};

function hideIcon(el, callback){
  var $face = $(el).find('.icon');
  var $back = $(el).find('.fa-square-o');
  window.setTimeout(function(){
    $face.hide();
    $back.show();
    callback();
  }, 3000);
};

function turnCard(el){
  counter ++;
  showIcon(el);
  $(el).addClass("clicked");
};

function cardIsClickable(){
  return ($(this).attr('data-state') !== 'frozen');
};

function cardsMatch(){
  var $pair = $(document).find('.clicked .icon');
  var match = $($pair[0]).attr('data-icon') == $($pair[1]).attr('data-icon');
  return match;
  }

function updateTurnCount(){
  turn ++;
  $('.turn-count').html(turn);
}

function checkSquareForWin(el){
  if ( $(el).attr('data-state') == 'frozen' ){
    return true
  }
  else{
    return false
  }
}

function checkBoardForWin(){
  var win = [];
  $.each( $square, function(index, element){
    if( checkSquareForWin(element) ){
      win.push(element)
    }
  })
  if(win.length == $square.length){
    $('.message').html('<h1>Congratulations, you win!<h1>')
  }
}

function takeATurn(){
  if( !cardIsClickable() ) { return }
  if( counter == 0 ){
    turnCard(this);
  }
  else if( counter == 1){
    turnCard(this);
    updateTurnCount();
    if(cardsMatch()){
      $(document).find('.clicked').attr('data-state', 'frozen').removeClass('clicked')
      checkBoardForWin();
      counter = 0;
      }
    else{
      hideIcon($(document).find('.clicked'), function(){
        counter = 0;
      })
      $(document).find('.clicked').removeClass('clicked')
    };
  };
};

$square.click(takeATurn);
