function ComponentsController($scope, components, $filter, DataService) {

  var ctrl = this
  ctrl.components = components.data
  ctrl.filteredComponents = ctrl.components
  ctrl.sortColumn = 'name';
  ctrl.sortReverse = false;


  ctrl.increaseFavorite = function(thing){
    debugger;
    thing.favorite += 1
    debugger;
    DataService.removeComp(thing)
  }


  ctrl.withinRange = function(){
    ctrl.components = components.data.filter(function(x){ if (ctrl.min <= x.price == x.price <= ctrl.max){ return x }})
  }

  ctrl.reset = function(){
    ctrl.components= components.data
    ctrl.min = ""
    ctrl.max = ""

  }


}

angular
  .module('app')
  .controller('ComponentsController', ComponentsController);
