describe('ChessboardView', function() {
  var view;

  beforeEach(function() {
    view = new BoardView({model: new Board({n:4})});
  });

  it('should exist', function() {
    expect(view).to.be.ok;
  });

  // This function uses a board visualizer lets you view an interactive version of any piece matrix.
  var displayBoard = function(matrix){
    $('#sandbox').html(
      new BoardView({
        model: new Board(matrix)
      }).render()
    );
  };
  $(function(){
    // this is a pre-baked solution for n-queens in the n = 4 case, rendered to the screen using our handy visualizer.
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
