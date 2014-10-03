describe('ChessboardView', function() {
  var view;

  beforeEach(function() {
    view = new BoardView({model: new Board({n:4})});
  });

  it('should exist', function() {
    expect(view).to.be.ok;
  });

  //also render board on dom as visual test
  var displayBoard = function(matrix){
    $('#sandbox').html(
      new BoardView({
        model: new Board(matrix)
      }).render()
    );
  };
  $(function(){
    displayBoard([
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 0, 1, 0]
    ]);

    var n = 4;
    findNRooksSolution(n);
    countNRooksSolutions(n);
    findNQueensSolution(n);
    countNQueensSolutions(n);
  });

});
