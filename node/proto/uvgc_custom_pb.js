// source: proto/uvgc_custom.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.UvgcCustomData', null, global);
goog.exportSymbol('proto.UvgcCustomRequest', null, global);
goog.exportSymbol('proto.UvgcCustomResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UvgcCustomData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UvgcCustomData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UvgcCustomData.displayName = 'proto.UvgcCustomData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UvgcCustomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UvgcCustomRequest.repeatedFields_, null);
};
goog.inherits(proto.UvgcCustomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UvgcCustomRequest.displayName = 'proto.UvgcCustomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UvgcCustomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UvgcCustomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UvgcCustomResponse.displayName = 'proto.UvgcCustomResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UvgcCustomData.prototype.toObject = function(opt_includeInstance) {
  return proto.UvgcCustomData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UvgcCustomData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomData.toObject = function(includeInstance, msg) {
  var f, obj = {
    voucherId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    voucherUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    voucherCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UvgcCustomData}
 */
proto.UvgcCustomData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UvgcCustomData;
  return proto.UvgcCustomData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UvgcCustomData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UvgcCustomData}
 */
proto.UvgcCustomData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoucherId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoucherUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoucherCode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UvgcCustomData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UvgcCustomData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UvgcCustomData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoucherId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoucherUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVoucherCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string voucher_id = 1;
 * @return {string}
 */
proto.UvgcCustomData.prototype.getVoucherId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomData} returns this
 */
proto.UvgcCustomData.prototype.setVoucherId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string voucher_url = 2;
 * @return {string}
 */
proto.UvgcCustomData.prototype.getVoucherUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomData} returns this
 */
proto.UvgcCustomData.prototype.setVoucherUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string voucher_code = 3;
 * @return {string}
 */
proto.UvgcCustomData.prototype.getVoucherCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomData} returns this
 */
proto.UvgcCustomData.prototype.setVoucherCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float amount = 4;
 * @return {number}
 */
proto.UvgcCustomData.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.UvgcCustomData} returns this
 */
proto.UvgcCustomData.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UvgcCustomRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UvgcCustomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UvgcCustomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UvgcCustomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stockInUvgcId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    imageBackgroundUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    colorBackground: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recipient: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.UvgcCustomData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UvgcCustomRequest}
 */
proto.UvgcCustomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UvgcCustomRequest;
  return proto.UvgcCustomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UvgcCustomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UvgcCustomRequest}
 */
proto.UvgcCustomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStockInUvgcId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageBackgroundUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColorBackground(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipient(value);
      break;
    case 5:
      var value = new proto.UvgcCustomData;
      reader.readMessage(value,proto.UvgcCustomData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UvgcCustomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UvgcCustomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UvgcCustomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStockInUvgcId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getImageBackgroundUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColorBackground();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecipient();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.UvgcCustomData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 stock_in_uvgc_id = 1;
 * @return {number}
 */
proto.UvgcCustomRequest.prototype.getStockInUvgcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UvgcCustomRequest} returns this
 */
proto.UvgcCustomRequest.prototype.setStockInUvgcId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string image_background_url = 2;
 * @return {string}
 */
proto.UvgcCustomRequest.prototype.getImageBackgroundUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomRequest} returns this
 */
proto.UvgcCustomRequest.prototype.setImageBackgroundUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string color_background = 3;
 * @return {string}
 */
proto.UvgcCustomRequest.prototype.getColorBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomRequest} returns this
 */
proto.UvgcCustomRequest.prototype.setColorBackground = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string recipient = 4;
 * @return {string}
 */
proto.UvgcCustomRequest.prototype.getRecipient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomRequest} returns this
 */
proto.UvgcCustomRequest.prototype.setRecipient = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated UvgcCustomData data = 5;
 * @return {!Array<!proto.UvgcCustomData>}
 */
proto.UvgcCustomRequest.prototype.getDataList = function() {
  return /** @type{!Array<!proto.UvgcCustomData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.UvgcCustomData, 5));
};


/**
 * @param {!Array<!proto.UvgcCustomData>} value
 * @return {!proto.UvgcCustomRequest} returns this
*/
proto.UvgcCustomRequest.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.UvgcCustomData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.UvgcCustomData}
 */
proto.UvgcCustomRequest.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.UvgcCustomData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UvgcCustomRequest} returns this
 */
proto.UvgcCustomRequest.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UvgcCustomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.UvgcCustomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UvgcCustomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UvgcCustomResponse}
 */
proto.UvgcCustomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UvgcCustomResponse;
  return proto.UvgcCustomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UvgcCustomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UvgcCustomResponse}
 */
proto.UvgcCustomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UvgcCustomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UvgcCustomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UvgcCustomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UvgcCustomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.UvgcCustomResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UvgcCustomResponse} returns this
 */
proto.UvgcCustomResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto);
