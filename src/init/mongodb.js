'use strcit';
/*practice Node.js
 *@author Liangliang chen
 */

 import mongoose from 'mongoose';
 
 module.exports = function (done) {
   const debug = $.createDebug('init:mongodb');
   debug('connecting to MongoDB...');

   const conn = mongoose.createConnection($.config.get('db.mongodb'));
   $.mongodb = conn;
   $.model = {};
 
   done();
 
 }