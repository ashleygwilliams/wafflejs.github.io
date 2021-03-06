import heap from './heap'

import angular from 'angular'
import css from './index.css'

angular.module('wafflejs', [
  require('./routes/index').default,
  require('./routes/performers').default,
  require('./routes/speakers').default,
  require('./routes/sponsorship').default,
  require('./title').default,
])
.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
})
.run(($rootScope, $document) => {
  $rootScope.$on('$stateChangeSuccess', (event, to, toParams, from) => {
    if (from.name !== to.name)
      $document[0].body.scrollTop = 0
  })
})
