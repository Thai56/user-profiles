angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      /* FIX ME */
      return $http({
        url:'/api/login',
        method:"POST",
        data: user
      })
    },

    getFriends: function() {
    	/* FIX ME */
      return $http({
        url:'api/profiles',
        method:"GET"
      })
    }

  }
});
