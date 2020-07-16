var service = require('./static_codegen/protos/helloworld_grpc_pb');
var messages = require('./static_codegen/protos/helloworld_pb');

var grpc = require('grpc');

var client = new service.GreeterClient('localhost:8090',grpc.credentials.createInsecure());

var request = new messages.HelloRequest();
request.setName('static-zb');

client.sayHello(request, function(err, response) {
    console.log('Greeting:', response.getMessage());
});