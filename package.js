Package.describe({
  name: "ground:util",
  version: "0.1.7",
  summary: "Adds utillity functions for ground db to use",
  git: "https://github.com/GroundMeteor/util.git"  
});

Package.onUse(function (api) {


  api.export('_groundUtil');
  api.export('Ground');

  api.versionsFrom('1.0');

  api.use('meteor-platform', ['client', 'server']);

  api.use([
    'meteor',
    'underscore',
    'random',
    'minimongo',
    'ejson',
    'reactive-var',
    'ground:minimax@1.0.2'
    ], ['client', 'server']);

  api.imply('ground:minimax', ['client', 'server']);

  api.use(['tracker'], 'client');    

  api.addFiles('util.client.js', 'client');

  api.addFiles('util.server.js', 'server');
});

Package.onTest(function (api) {
  api.use('ground:util', ['client', 'server']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('util.tests.js', 'client');

});
