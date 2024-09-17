// GENERATED CODE -- DO NOT EDIT!

'use strict';
const grpc = require('@grpc/grpc-js');
var proto_uvgc_custom_pb = require('../proto/uvgc_custom_pb.js');

function serialize_UvgcCustomRequest(arg) {
  if (!(arg instanceof proto_uvgc_custom_pb.UvgcCustomRequest)) {
    throw new Error('Expected argument of type UvgcCustomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UvgcCustomRequest(buffer_arg) {
  return proto_uvgc_custom_pb.UvgcCustomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UvgcCustomResponse(arg) {
  if (!(arg instanceof proto_uvgc_custom_pb.UvgcCustomResponse)) {
    throw new Error('Expected argument of type UvgcCustomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UvgcCustomResponse(buffer_arg) {
  return proto_uvgc_custom_pb.UvgcCustomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UVGCCustomHandlerService = exports.UVGCCustomHandlerService = {
  generateUvgcCustom: {
    path: '/UVGCCustomHandler/GenerateUvgcCustom',
    requestStream: false,
    responseStream: false,
    requestType: proto_uvgc_custom_pb.UvgcCustomRequest,
    responseType: proto_uvgc_custom_pb.UvgcCustomResponse,
    requestSerialize: serialize_UvgcCustomRequest,
    requestDeserialize: deserialize_UvgcCustomRequest,
    responseSerialize: serialize_UvgcCustomResponse,
    responseDeserialize: deserialize_UvgcCustomResponse,
  },
};

exports.UVGCCustomHandlerClient = grpc.makeGenericClientConstructor(UVGCCustomHandlerService);
