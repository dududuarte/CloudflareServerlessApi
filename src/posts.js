const Posts = async () => {
  const body = await MY_KV.list();
  const bodyNew = body.keys.map(obj => { return obj.name})
  const message = []
  for (let value of bodyNew){
    let temp = await MY_KV.get(value)
    message.push(temp)
  }
  if (message.length === 0){
    return new Response("404, no posts found", { status: 404 })
  }
  const headers = { 'Access-Control-Allow-Origin': '*',
   'Content-type': 'application/json' }
  return new Response("["+message+"]", { headers })
}

export default Posts