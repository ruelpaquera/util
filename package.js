Package.describe({
  name: "ground:util",
  version: "0.1.2",
  summary: "Adds utillity functions for ground db to use",
  git: "https://github.com/GroundMeteor/util.git"  
});

Package.on_use(function (api) {


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
    'ground:minimax@1.0.1'
    ], ['client', 'server']);

  api.use(['tracker'], 'client');    

  api.add_files('util.client.js', 'client');

  api.add_files('util.server.js', 'server');
});

Package.on_test(function (api) {
  api.use('ground:util', ['client', 'server']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('util.tests.js', 'client');

});
