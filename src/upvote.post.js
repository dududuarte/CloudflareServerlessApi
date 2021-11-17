const UpVote = async request => {
     let post = await request.json()
     try{
       await MY_KV.put(post.key, JSON.stringify(post))
     } catch {
       return new Response("Error adding post", { status: 500 })
     }
     const headers = { 'Access-Control-Allow-Origin': '*',
     'Content-type': 'application/json' }
     return new Response(JSON.stringify(post), { headers })
   }
   
   
   export default UpVote