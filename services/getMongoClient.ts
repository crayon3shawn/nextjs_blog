import { MongoClient } from 'mongodb';

//const uri = 'mongodb+srv://crayon3shawn:qyF7N0TOiH4GwdT7@cluster.wmrdetu.mongodb.net/nextjs_blog';
const uri = process.env['MONGODB_URI'];

export default async function getMongoClient() {
  if (!uri) throw new Error('Server cannot connect to database.');
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}
