var PROTO_PATH = 'D:\\WebstormProjects\\grpc-demo\\protos\\helloworld.proto';
var grpc = require('grpc')
var grpcService = grpc.load(PROTO_PATH).helloworld

var server = new grpc.Server();
server.addService(grpcService.Greeter.service, {
    SayHello: SayHello1
});

server.bind('localhost:8090',grpc.ServerCredentials.createInsecure());
server.start();
function SayHello1(call, callback) {
    console.log("call: " + call);
    callback(null, {message: '張三'});
}
