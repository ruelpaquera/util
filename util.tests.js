"use strict";

function equals(a, b) {
  return !!(JSON.stringify(a) === JSON.stringify(b));
}

Tinytest.add('GroundDB - Util - test', function(test) {
  // Basic test of scope and mappings
  test.isTrue(typeof _groundUtil !== 'undefined', '_groundUtil scope is not defined');
  test.isTrue(typeof _groundUtil.connection == 'function', '_groundUtil.connection is not a function');
  test.isTrue(typeof _groundUtil.idParse == 'function', '_groundUtil.idParse is not a function');
  test.isTrue(typeof _groundUtil.getDatabaseMap == 'function', '_groundUtil.getDatabaseMap is not a function');
  test.isTrue(typeof _groundUtil.Collection == 'function', '_groundUtil.Collection is not a function');
  test.isTrue(typeof _groundUtil.subscriptionsReady == 'boolean', '_groundUtil.subscriptionsReady is not boolean');
  test.isTrue(typeof _groundUtil.subscriptionsReadyDeps == 'function', '_groundUtil.subscriptionsReadyDeps is not a function');

});


//Test API:
//test.isFalse(v, msg)
//test.isTrue(v, msg)
//test.equalactual, expected, message, not
//test.length(obj, len)
//test.include(s, v)
//test.isNaN(v, msg)
//test.isUndefined(v, msg)
//test.isNotNull
//test.isNull
//test.throws(func)
//test.instanceOf(obj, klass)
//test.notEqual(actual, expected, message)
//test.runId()
//test.exception(exception)
//test.expect_fail()
//test.ok(doc)
//test.fail(doc)
//test.equal(a, b, msg)