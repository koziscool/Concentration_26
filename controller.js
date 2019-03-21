
matcherController = {

  view: matcherView,
  model: matcherModel,


  init: function( size ) {
    this.model.init(size);
    this.view.init();
  },
    
};
