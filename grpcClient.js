var PROTO_PATH = 'D:\\WebstormProjects\\grpc-demo\\protos\\helloworld.proto';
var grpc = require('grpc')
var grpcService = grpc.load(PROTO_PATH).helloworld
var client = new grpcService.Greeter('localhost:8090', grpc.credentials.createInsecure())

client.SayHello({name: 'Lisi'}, function (error,response) {
    console.log(response)
})