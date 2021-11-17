import { Router } from 'itty-router'
import Posts from './src/posts'
import PostsPost from './src/posts.post'
import UpVotePost from './src/upvote.post'

// Create a new router
const router = Router()

/*
Our index route, a simple hello world.
*/
router.get("/", () => {
  return new Response("Hello, world! This is the root page of your Worker template.")
})
router.get("/posts", Posts)
router.post("/posts", PostsPost)
router.put("/posts", UpVotePost)
router.all("*", () => new Response("404, not found!", { status: 404 }))
addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
