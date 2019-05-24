export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://root:root@cluster0-shard-00-00-a7oxi.mongodb.net:27017,cluster0-shard-00-01-a7oxi.mongodb.net:27017,cluster0-shard-00-02-a7oxi.mongodb.net:27017/alphakart_db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true' ||'mongodb://localhost/ReactWebpackNode';

export default {
  db
};
