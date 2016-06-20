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
 *  NuboEyeDetector interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nuboeyedetector.NuboEyeDetector
 *
 * @fires {@link module:nuboeyedetector#event:OnEye OnEye}
 */
function NuboEyeDetector(){
  NuboEyeDetector.super_.call(this);
};
inherits(NuboEyeDetector, Filter);


//
// Public methods
//

/**
 * The events will be launched to the server with the information about the eye 
 * detected.  milliseconds indicate the frequency with which events will be 
 * launched (0 millisecons => an event will be lauched, when there is some 
 * information
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.activateServerEvents
 *
 * @param {external:Integer} activate
 *  1=>activate it, 0 desactivated
 *
 * @param {external:Integer} time
 *  the frequency in ms to send the events
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~activateServerEventsCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.activateServerEvents = function(activate, time, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~activateServerEventsCallback
 * @param {external:Error} error
 */

/**
 * To indicate  the algorithm if process all the images or only when it receives
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.detectByEvent
 *
 * @param {external:Integer} event
 *  0 (default) => process all the frames without constraints; 1 => process only
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~detectByEventCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.detectByEvent = function(event, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~detectByEventCallback
 * @param {external:Error} error
 */

/**
 * Specify how much the image size is reduced at each haar image 
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.multiScaleFactor
 *
 * @param {external:Integer} scaleFactor
 *  5-50 (25 default)
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~multiScaleFactorCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.multiScaleFactor = function(scaleFactor, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~multiScaleFactorCallback
 * @param {external:Error} error
 */

/**
 * process x frames every 4 frames
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.processXevery4Frames
 *
 * @param {external:Integer} xper4
 *  1,2,3,4 (default) => process x frames every 4 frames
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~processXevery4FramesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.processXevery4Frames = function(xper4, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~processXevery4FramesCallback
 * @param {external:Error} error
 */

/**
 * The eyes  detected (x,y,width,height) are sent as metadata 
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.sendMetaData
 *
 * @param {external:Integer} metaData
 *  0 (default) => metadata are not sent; 1 => metadata are sent
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~sendMetaDataCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.sendMetaData = function(metaData, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~sendMetaDataCallback
 * @param {external:Error} error
 */

/**
 * Show or Hide the eyes in the video stream
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.showEyes
 *
 * @param {external:Integer} viewEyes
 *  Determines wheter the detected eyes will be displayed or not
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~showEyesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.showEyes = function(viewEyes, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'viewEyes', viewEyes, {required: true});

  var params = {
    viewEyes: viewEyes
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'showEyes', params, callback), this)
};
/**
 * @callback module:nuboeyedetector.NuboEyeDetector~showEyesCallback
 * @param {external:Error} error
 */

/**
 * this will be the width of the image that the algorithm is going to process to
 *
 * @alias module:nuboeyedetector.NuboEyeDetector.widthToProcess
 *
 * @param {external:Integer} width
 *  160,320 (default),480,640
 *
 * @param {module:nuboeyedetector.NuboEyeDetector~widthToProcessCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEyeDetector.prototype.widthToProcess = function(width, callback){
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
 * @callback module:nuboeyedetector.NuboEyeDetector~widthToProcessCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nuboeyedetector.NuboEyeDetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboEyeDetector.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nuboeyedetector.NuboEyeDetector.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboEyeDetector.events = Filter.events.concat(['OnEye']);


/**
 * Checker for {@link module:nuboeyedetector.NuboEyeDetector}
 *
 * @memberof module:nuboeyedetector
 *
 * @param {external:String} key
 * @param {module:nuboeyedetector.NuboEyeDetector} value
 */
function checkNuboEyeDetector(key, value)
{
  if(!(value instanceof NuboEyeDetector))
    throw ChecktypeError(key, NuboEyeDetector, value);
};


module.exports = NuboEyeDetector;

NuboEyeDetector.check = checkNuboEyeDetector;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-nuboeyedetector package on the browser
 */

require('.');

},{".":"kurento-module-nuboeyedetector"}],3:[function(require,module,exports){
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
 * EyeInfo contains information about the detected eye
 *
 * @constructor module:nuboeyedetector/complexTypes.EyeInfo
 *
 * @property {external:String} name
 *  This value contains the word eye in order to identify the register
 * @property {external:Integer} x
 *  represent the x value of the upper left corner of the eye 
 * @property {external:Integer} y
 *  represent the y value of the upper left corner of the eye 
 * @property {external:Integer} height
 *  Represent the height of the detected eye
 * @property {external:Integer} width
 *  Represent the width of the detected eye
 */
function EyeInfo(eyeInfoDict){
  if(!(this instanceof EyeInfo))
    return new EyeInfo(eyeInfoDict)

  eyeInfoDict = eyeInfoDict || {}

  // Check eyeInfoDict has the required fields
  checkType('String', 'eyeInfoDict.name', eyeInfoDict.name, {required: true});
  checkType('int', 'eyeInfoDict.x', eyeInfoDict.x, {required: true});
  checkType('int', 'eyeInfoDict.y', eyeInfoDict.y, {required: true});
  checkType('int', 'eyeInfoDict.height', eyeInfoDict.height, {required: true});
  checkType('int', 'eyeInfoDict.width', eyeInfoDict.width, {required: true});

  // Init parent class
  EyeInfo.super_.call(this, eyeInfoDict)

  // Set object properties
  Object.defineProperties(this, {
    name: {
      writable: true,
      enumerable: true,
      value: eyeInfoDict.name
    },
    x: {
      writable: true,
      enumerable: true,
      value: eyeInfoDict.x
    },
    y: {
      writable: true,
      enumerable: true,
      value: eyeInfoDict.y
    },
    height: {
      writable: true,
      enumerable: true,
      value: eyeInfoDict.height
    },
    width: {
      writable: true,
      enumerable: true,
      value: eyeInfoDict.width
    }
  })
}
inherits(EyeInfo, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(EyeInfo.prototype, {
  __module__: {
    enumerable: true,
    value: "nuboeyedetector"
  },
  __type__: {
    enumerable: true,
    value: "EyeInfo"
  }
})

/**
 * Checker for {@link module:nuboeyedetector/complexTypes.EyeInfo}
 *
 * @memberof module:nuboeyedetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:nuboeyedetector/complexTypes.EyeInfo} value
 */
function checkEyeInfo(key, value)
{
  if(!(value instanceof EyeInfo))
    throw ChecktypeError(key, EyeInfo, value);
};


module.exports = EyeInfo;

EyeInfo.check = checkEyeInfo;

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
 * @module nuboeyedetector/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

var EyeInfo = require('./EyeInfo');


exports.EyeInfo = EyeInfo;

},{"./EyeInfo":3}],"kurento-module-nuboeyedetector":[function(require,module,exports){
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
 * @module nuboeyedetector
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'nuboeyedetector'});
Object.defineProperty(exports, 'version', {value: '6.5.0'});


var NuboEyeDetector = require('./NuboEyeDetector');


exports.NuboEyeDetector = NuboEyeDetector;

exports.complexTypes = require('./complexTypes');

},{"./NuboEyeDetector":1,"./complexTypes":4}]},{},[2]);
