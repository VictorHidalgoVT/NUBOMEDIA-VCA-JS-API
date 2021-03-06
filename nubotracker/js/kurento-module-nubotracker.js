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
 *  NuboTracker interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nubotracker.NuboTracker
 *
 * @fires {@link module:nubotracker#event:OnTracker OnTracker}
 */
function NuboTracker(){
  NuboTracker.super_.call(this);
};
inherits(NuboTracker, Filter);


//
// Public methods
//

/**
 * The events will be launched to the server with the information about the 
 * mouth detected.  milliseconds indicate the frequency with which events will 
 * be launched (0 millisecons => an event will be lauched, when there is some 
 * information
 *
 * @alias module:nubotracker.NuboTracker.activateServerEvents
 *
 * @param {external:Integer} activate
 *  1=>activate it, 0 desactivated
 *
 * @param {external:Integer} time
 *  the frequency in ms to send the events
 *
 * @param {module:nubotracker.NuboTracker~activateServerEventsCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.activateServerEvents = function(activate, time, callback){
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
 * @callback module:nubotracker.NuboTracker~activateServerEventsCallback
 * @param {external:Error} error
 */

/**
 * Set up the Maximum area of the object
 *
 * @alias module:nubotracker.NuboTracker.setDistance
 *
 * @param {external:Integer} distance
 *  the maximum area of the object
 *
 * @param {module:nubotracker.NuboTracker~setDistanceCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.setDistance = function(distance, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'distance', distance, {required: true});

  var params = {
    distance: distance
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setDistance', params, callback), this)
};
/**
 * @callback module:nubotracker.NuboTracker~setDistanceCallback
 * @param {external:Error} error
 */

/**
 * Set up the Maximum area of the object
 *
 * @alias module:nubotracker.NuboTracker.setMaxArea
 *
 * @param {external:Number} maxArea
 *  the maximum area of the object
 *
 * @param {module:nubotracker.NuboTracker~setMaxAreaCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.setMaxArea = function(maxArea, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('float', 'maxArea', maxArea, {required: true});

  var params = {
    maxArea: maxArea
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setMaxArea', params, callback), this)
};
/**
 * @callback module:nubotracker.NuboTracker~setMaxAreaCallback
 * @param {external:Error} error
 */

/**
 * Set up the Minimun area of the object
 *
 * @alias module:nubotracker.NuboTracker.setMinArea
 *
 * @param {external:Integer} minArea
 *  the minimum area of the object
 *
 * @param {module:nubotracker.NuboTracker~setMinAreaCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.setMinArea = function(minArea, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'minArea', minArea, {required: true});

  var params = {
    minArea: minArea
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setMinArea', params, callback), this)
};
/**
 * @callback module:nubotracker.NuboTracker~setMinAreaCallback
 * @param {external:Error} error
 */

/**
 * Minimum diferece among pixels  to detect motion
 *
 * @alias module:nubotracker.NuboTracker.setThreshold
 *
 * @param {external:Integer} threshold
 *  Set the threshold
 *
 * @param {module:nubotracker.NuboTracker~setThresholdCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.setThreshold = function(threshold, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'threshold', threshold, {required: true});

  var params = {
    threshold: threshold
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setThreshold', params, callback), this)
};
/**
 * @callback module:nubotracker.NuboTracker~setThresholdCallback
 * @param {external:Error} error
 */

/**
 * Set up the visual Mode of the output video
 *
 * @alias module:nubotracker.NuboTracker.setVisualMode
 *
 * @param {external:Integer} mode
 *  0 => normal video; 1=>normal video + object trackerd; 2=> diff images + 
 *  object tracked; 3=> motion histagram + object tracked
 *
 * @param {module:nubotracker.NuboTracker~setVisualModeCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboTracker.prototype.setVisualMode = function(mode, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'mode', mode, {required: true});

  var params = {
    mode: mode
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setVisualMode', params, callback), this)
};
/**
 * @callback module:nubotracker.NuboTracker~setVisualModeCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nubotracker.NuboTracker.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboTracker.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nubotracker.NuboTracker.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboTracker.events = Filter.events.concat(['OnTracker']);


/**
 * Checker for {@link module:nubotracker.NuboTracker}
 *
 * @memberof module:nubotracker
 *
 * @param {external:String} key
 * @param {module:nubotracker.NuboTracker} value
 */
function checkNuboTracker(key, value)
{
  if(!(value instanceof NuboTracker))
    throw ChecktypeError(key, NuboTracker, value);
};


module.exports = NuboTracker;

NuboTracker.check = checkNuboTracker;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-nubotracker package on the browser
 */

require('.');

},{".":"kurento-module-nubotracker"}],3:[function(require,module,exports){
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
 * TrackerInfo contains information about the detected objects
 *
 * @constructor module:nubotracker/complexTypes.TrackerInfo
 *
 * @property {external:String} name
 *  This value contains the word tracker in order to identify the register
 * @property {external:Integer} x
 *  represent the x value of the upper left corner of the object 
 * @property {external:Integer} y
 *  represent the y value of the upper left corner of the object 
 * @property {external:Integer} height
 *  Represent the height of the detected object
 * @property {external:Integer} width
 *  Represent the width of the detected object
 */
function TrackerInfo(trackerInfoDict){
  if(!(this instanceof TrackerInfo))
    return new TrackerInfo(trackerInfoDict)

  trackerInfoDict = trackerInfoDict || {}

  // Check trackerInfoDict has the required fields
  checkType('String', 'trackerInfoDict.name', trackerInfoDict.name, {required: true});
  checkType('int', 'trackerInfoDict.x', trackerInfoDict.x, {required: true});
  checkType('int', 'trackerInfoDict.y', trackerInfoDict.y, {required: true});
  checkType('int', 'trackerInfoDict.height', trackerInfoDict.height, {required: true});
  checkType('int', 'trackerInfoDict.width', trackerInfoDict.width, {required: true});

  // Init parent class
  TrackerInfo.super_.call(this, trackerInfoDict)

  // Set object properties
  Object.defineProperties(this, {
    name: {
      writable: true,
      enumerable: true,
      value: trackerInfoDict.name
    },
    x: {
      writable: true,
      enumerable: true,
      value: trackerInfoDict.x
    },
    y: {
      writable: true,
      enumerable: true,
      value: trackerInfoDict.y
    },
    height: {
      writable: true,
      enumerable: true,
      value: trackerInfoDict.height
    },
    width: {
      writable: true,
      enumerable: true,
      value: trackerInfoDict.width
    }
  })
}
inherits(TrackerInfo, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(TrackerInfo.prototype, {
  __module__: {
    enumerable: true,
    value: "nubotracker"
  },
  __type__: {
    enumerable: true,
    value: "TrackerInfo"
  }
})

/**
 * Checker for {@link module:nubotracker/complexTypes.TrackerInfo}
 *
 * @memberof module:nubotracker/complexTypes
 *
 * @param {external:String} key
 * @param {module:nubotracker/complexTypes.TrackerInfo} value
 */
function checkTrackerInfo(key, value)
{
  if(!(value instanceof TrackerInfo))
    throw ChecktypeError(key, TrackerInfo, value);
};


module.exports = TrackerInfo;

TrackerInfo.check = checkTrackerInfo;

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
 * @module nubotracker/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

var TrackerInfo = require('./TrackerInfo');


exports.TrackerInfo = TrackerInfo;

},{"./TrackerInfo":3}],"kurento-module-nubotracker":[function(require,module,exports){
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
 * @module nubotracker
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'nubotracker'});
Object.defineProperty(exports, 'version', {value: '6.5.0'});


var NuboTracker = require('./NuboTracker');


exports.NuboTracker = NuboTracker;

exports.complexTypes = require('./complexTypes');

},{"./NuboTracker":1,"./complexTypes":4}]},{},[2]);
