// Define the utillity scope
_groundUtil = {};

// New ground scope
Ground = {};
////////////////////////////////////////////////////////////////////////////////
// MAP METEOR API's
////////////////////////////////////////////////////////////////////////////////

// Access the DDP connection class
try {
  _groundUtil.Connection = Package['ddp'].LivedataTest.Connection;
} catch(err) {
  throw new Error('GroundDB cannot access the DDP.Connection class');
}

// Meteor connection
_groundUtil.connection = _groundUtil.connection || Meteor.default_connection;

// ParseId function
_groundUtil.idParse = LocalCollection && LocalCollection._idParse ||
        Meteor.idParse;

// Meteor.Collection or Mongo.Collection
_groundUtil.Collection = (typeof Mongo !== 'undefined')? Mongo.Collection: Meteor.Collection;

// Get the database map
_groundUtil.getDatabaseMap = function(col) {
  // XXX: Suport older styles?
  return col._collection._docs._map;
};

// State of all subscriptions in meteor
var _subscriptionsReady = new ReactiveVar(false);

//////////////////////////// ALL SUBSCRIPTIONS READY ///////////////////////////

_groundUtil.allSubscriptionsReady = function() {
  return _subscriptionsReady.get();
};

// Could be nice to have a Meteor.allSubscriptionsReady
var readyInterval = Meteor.setInterval(function() {
  if (DDP._allSubscriptionsReady()) {
    // Stop this madness
    Meteor.clearInterval(readyInterval);
    // Set the reactive var
    _subscriptionsReady.set(true);
  }
}, 1000);

//////////////////////////////// UNDERSCORE DEPS ///////////////////////////////

_groundUtil.each = _.each;

_groundUtil.toArray = _.toArray;

_groundUtil.extend = _.extend;