angular.module('video-player')

.controller('videoListEntryController', function() {
 
})

.directive('videoListEntry', function() {

  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    controller: 'videoListEntryController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
  };
});

