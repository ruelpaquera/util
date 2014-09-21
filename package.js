Package.describe({
  name: "ground:util",
  version: "0.0.1",
  summary: "Adds utillity functions for ground db to use",
  git: "https://github.com/GroundMeteor/util.git"  
});

Package.on_use(function (api) {


  api.export('_groundUtil');

  if (api.versionsFrom) {
    
    api.versionsFrom('METEOR@0.9.1');

    api.use('meteor-platform', ['client', 'server']);

    api.use([
      'meteor',
      'underscore',
      'random',
      'minimongo',
      'ejson',
      'ground:minimax@0.0.0'
      ], ['client', 'server']);

    api.use(['deps'], 'client');    

  } else {

    api.use('standard-app-packages', ['client', 'server']);

    api.use([
      'meteor',
      'underscore',
      'random',
      'minimongo',
      'ejson',
      'ejson-minimax'
      ], ['client', 'server']);

    api.use(['deps'], 'client');

  }


  api.add_files('util.client.js', 'client');

  api.add_files('util.server.js', 'server');
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('ground:util', ['client', 'server']);
  } else {
    api.use('ground-util', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('util.tests.js', 'client');

});
