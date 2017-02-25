angular.module('video-player')

.controller('videoListEntryController', function($scope) {
 
})

.directive('videoListEntry', function() {

  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});

