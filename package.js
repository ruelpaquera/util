Package.describe({
  name: "ground:util",
  version: "0.0.0",
  summary: "Adds utillity functions for ground db to use"
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
      'ground-util',
      'ejson-minimax'
      ], ['client', 'server']);

    api.use(['deps'], 'client');

  }


  api.add_files('util.js', ['client', 'server']);
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('ground:util', ['client', 'server']);
  } else {
    api.use('util', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('util.tests.js', ['client', 'server']);

});
