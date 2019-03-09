module.exports = {
  // enabled logging for development
  logging: true,
  seed: true,
  db: {
    //  url: 'mongodb://127.0.0.1/nodeblog'
  //url: 'mongodb+srv://backend:NyWy223ZaATFEvZ@cpcluster-tsylb.gcp.mongodb.net/test?retryWrites=true'
  url: 'mongodb://backend:NyWy223ZaATFEvZ@cpcluster-shard-00-00-tsylb.gcp.mongodb.net:27017,cpcluster-shard-00-01-tsylb.gcp.mongodb.net:27017,cpcluster-shard-00-02-tsylb.gcp.mongodb.net:27017/test?ssl=true&replicaSet=cpcluster-shard-0&authSource=admin&retryWrites=true'
 
  }
};
