require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  NuboEarDetector interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nuboeardetector.NuboEarDetector
 *
 * @fires {@link module:nuboeardetector#event:OnEar OnEar}
 */
function NuboEarDetector(){
  NuboEarDetector.super_.call(this);
};
inherits(NuboEarDetector, Filter);


//
// Public methods
//

/**
 * The events will be launched to the server with the information about the ear 
 * detected.  milliseconds indicate the frequency with which events will be 
 * launched (0 millisecons => an event will be lauched, when there is some 
 * information
 *
 * @alias module:nuboeardetector.NuboEarDetector.activateServerEvents
 *
 * @param {external:Integer} activate
 *  1=>activate it, 0 desactivated
 *
 * @param {external:Integer} time
 *  the frequency in ms to send the events
 *
 * @param {module:nuboeardetector.NuboEarDetector~activateServerEventsCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.activateServerEvents = function(activate, time, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'activate', activate, {required: true});
  checkType('int', 'time', time, {required: true});

  var params = {
    activate: activate,
    time: time
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'activateServerEvents', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~activateServerEventsCallback
 * @param {external:Error} error
 */

/**
 * To indicate  the algorithm if process all the images or only when it receives
 *
 * @alias module:nuboeardetector.NuboEarDetector.detectByEvent
 *
 * @param {external:Integer} event
 *  0 (default) => process all the frames without constraints; 1 => process only
 *
 * @param {module:nuboeardetector.NuboEarDetector~detectByEventCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.detectByEvent = function(event, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'event', event, {required: true});

  var params = {
    event: event
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'detectByEvent', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~detectByEventCallback
 * @param {external:Error} error
 */

/**
 * Specify how much the image size is reduced at each haar image 
 *
 * @alias module:nuboeardetector.NuboEarDetector.multiScaleFactor
 *
 * @param {external:Integer} scaleFactor
 *  5-50 (25 default)
 *
 * @param {module:nuboeardetector.NuboEarDetector~multiScaleFactorCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.multiScaleFactor = function(scaleFactor, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'scaleFactor', scaleFactor, {required: true});

  var params = {
    scaleFactor: scaleFactor
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'multiScaleFactor', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~multiScaleFactorCallback
 * @param {external:Error} error
 */

/**
 * process x frames every 4 frames
 *
 * @alias module:nuboeardetector.NuboEarDetector.processXevery4Frames
 *
 * @param {external:Integer} xper4
 *  1,2,3,4 (default) => process x frames every 4 frames
 *
 * @param {module:nuboeardetector.NuboEarDetector~processXevery4FramesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.processXevery4Frames = function(xper4, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'xper4', xper4, {required: true});

  var params = {
    xper4: xper4
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'processXevery4Frames', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~processXevery4FramesCallback
 * @param {external:Error} error
 */

/**
 * The ears and the profile faces detected (x,y,width,height) are sent as 
 * metadata 
 *
 * @alias module:nuboeardetector.NuboEarDetector.sendMetaData
 *
 * @param {external:Integer} metaData
 *  0 (default) => metadata are not sent; 1 => metadata are sent
 *
 * @param {module:nuboeardetector.NuboEarDetector~sendMetaDataCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.sendMetaData = function(metaData, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'metaData', metaData, {required: true});

  var params = {
    metaData: metaData
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'sendMetaData', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~sendMetaDataCallback
 * @param {external:Error} error
 */

/**
 * Show or Hide the ears in the video stream
 *
 * @alias module:nuboeardetector.NuboEarDetector.showEars
 *
 * @param {external:Integer} viewEars
 *  Determines wheter the detected ears will be displayed or not
 *
 * @param {module:nuboeardetector.NuboEarDetector~showEarsCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.showEars = function(viewEars, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'viewEars', viewEars, {required: true});

  var params = {
    viewEars: viewEars
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'showEars', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~showEarsCallback
 * @param {external:Error} error
 */

/**
 * this will be the width of the image that the algorithm is going to process to
 *
 * @alias module:nuboeardetector.NuboEarDetector.widthToProcess
 *
 * @param {external:Integer} width
 *  160,320 (default),480,640
 *
 * @param {module:nuboeardetector.NuboEarDetector~widthToProcessCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.widthToProcess = function(width, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'width', width, {required: true});

  var params = {
    width: width
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'widthToProcess', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~widthToProcessCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nuboeardetector.NuboEarDetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboEarDetector.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nuboeardetector.NuboEarDetector.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboEarDetector.events = Filter.events.concat(['OnEar']);


/**
 * Checker for {@link module:nuboeardetector.NuboEarDetector}
 *
 * @memberof module:nuboeardetector
 *
 * @param {external:String} key
 * @param {module:nuboeardetector.NuboEarDetector} value
 */
function checkNuboEarDetector(key, value)
{
  if(!(value instanceof NuboEarDetector))
    throw ChecktypeError(key, NuboEarDetector, value);
};


module.exports = NuboEarDetector;

NuboEarDetector.check = checkNuboEarDetector;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-nuboeardetector package on the browser
 */

require('.');

},{".":"kurento-module-nuboeardetector"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * EarInfo contains information about the detected ears
 *
 * @constructor module:nuboeardetector/complexTypes.EarInfo
 *
 * @property {external:String} name
 *  This value contains the word ear in order to identify the register
 * @property {external:Integer} x
 *  represent the x value of the upper left corner of the ear 
 * @property {external:Integer} y
 *  represent the y value of the upper left corner of the ear 
 * @property {external:Integer} height
 *  Represent the height of the detected ear
 * @property {external:Integer} width
 *  Represent the width of the detected ear
 */
function EarInfo(earInfoDict){
  if(!(this instanceof EarInfo))
    return new EarInfo(earInfoDict)

  earInfoDict = earInfoDict || {}

  // Check earInfoDict has the required fields
  checkType('String', 'earInfoDict.name', earInfoDict.name, {required: true});
  checkType('int', 'earInfoDict.x', earInfoDict.x, {required: true});
  checkType('int', 'earInfoDict.y', earInfoDict.y, {required: true});
  checkType('int', 'earInfoDict.height', earInfoDict.height, {required: true});
  checkType('int', 'earInfoDict.width', earInfoDict.width, {required: true});

  // Init parent class
  EarInfo.super_.call(this, earInfoDict)

  // Set object properties
  Object.defineProperties(this, {
    name: {
      writable: true,
      enumerable: true,
      value: earInfoDict.name
    },
    x: {
      writable: true,
      enumerable: true,
      value: earInfoDict.x
    },
    y: {
      writable: true,
      enumerable: true,
      value: earInfoDict.y
    },
    height: {
      writable: true,
      enumerable: true,
      value: earInfoDict.height
    },
    width: {
      writable: true,
      enumerable: true,
      value: earInfoDict.width
    }
  })
}
inherits(EarInfo, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(EarInfo.prototype, {
  __module__: {
    enumerable: true,
    value: "nuboeardetector"
  },
  __type__: {
    enumerable: true,
    value: "EarInfo"
  }
})

/**
 * Checker for {@link module:nuboeardetector/complexTypes.EarInfo}
 *
 * @memberof module:nuboeardetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:nuboeardetector/complexTypes.EarInfo} value
 */
function checkEarInfo(key, value)
{
  if(!(value instanceof EarInfo))
    throw ChecktypeError(key, EarInfo, value);
};


module.exports = EarInfo;

EarInfo.check = checkEarInfo;

},{"inherits":"inherits","kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module nuboeardetector/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

var EarInfo = require('./EarInfo');


exports.EarInfo = EarInfo;

},{"./EarInfo":3}],"kurento-module-nuboeardetector":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module nuboeardetector
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'nuboeardetector'});
Object.defineProperty(exports, 'version', {value: '6.5.0'});


var NuboEarDetector = require('./NuboEarDetector');


exports.NuboEarDetector = NuboEarDetector;

exports.complexTypes = require('./complexTypes');

},{"./NuboEarDetector":1,"./complexTypes":4}]},{},[2]);
