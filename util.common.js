/* global _groundUtil:true */
/* global Ground:true */
// Define the utillity scope
_groundUtil = {};

// New ground scope
Ground = {};

// Meteor.Collection or Mongo.Collection
_groundUtil.Collection = (typeof Mongo !== 'undefined')?
        Mongo.Collection: Meteor.Collection;

