module.exports = {
  // enabled logging for development
  logging: true,
  seed: false,
  db: {
    // local mongodb url: 'mongodb://127.0.0.1/nodeblog'
  //never worked url: 'mongodb+srv://backend:NyWy223ZaATFEvZ@cpcluster-tsylb.gcp.mongodb.net/test?retryWrites=true'
 // working but not sure where url: 'mongodb://backend:NyWy223ZaATFEvZ@cpcluster-shard-00-00-tsylb.gcp.mongodb.net:27017,cpcluster-shard-00-01-tsylb.gcp.mongodb.net:27017,cpcluster-shard-00-02-tsylb.gcp.mongodb.net:27017/test?ssl=true&replicaSet=cpcluster-shard-0&authSource=admin&retryWrites=true'
  // url:'mongodb+srv://john:H3PSiPp52hf2oOTt@threecargo-8voa1.mongodb.net/test?retryWrites=true&w=majority'
 url: 'mongodb://john:H3PSiPp52hf2oOTt@threecargo-shard-00-00-8voa1.mongodb.net:27017,threecargo-shard-00-01-8voa1.mongodb.net:27017,threecargo-shard-00-02-8voa1.mongodb.net:27017/test?ssl=true&replicaSet=threecargo-shard-0&authSource=admin&retryWrites=true&w=majority'  
}
};
