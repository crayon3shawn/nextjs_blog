import Post from '../models/post';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://crayon3shawn:qyF7N0TOiH4GwdT7@cluster.wmrdetu.mongodb.net/nextjs_blog';
//const uri = process.env['MONGODB_URI'];

export async function getPostsInMongo(): Promise<Post[]> {
  if (!uri) throw new Error('Server cannot connect to database.');
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db('blog').collection('posts');
    const find = await collection.find<Post>({});
    return (await find.toArray()).map(post => ({
      ...post,
      content: post.content.trim().substring(0, 100) + ' ...'
    })).sort((a: Post, b: Post) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } finally {
    await client.close();
  }
}
