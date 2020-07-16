var service = require('./static_codegen/protos/helloworld_grpc_pb');
var messages = require('./static_codegen/protos/helloworld_pb');

var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.GreeterService, {sayHello: sayHello2});
server.bind('localhost:8090', grpc.ServerCredentials.createInsecure());
server.start();
/**
 * Implements the SayHello RPC method.
 */
function sayHello2(call, callback) {
    var name = call.request.getName();
    console.log("request ： " + name)
    var helloReply = new messages.HelloReply();
    helloReply.setMessage('hello ' + name);
    callback(null, helloReply);
}
