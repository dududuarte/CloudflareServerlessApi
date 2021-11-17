class GUID {
    Generate() {
    const hex = "0123456789ABCDEF";
    const model = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx";
    var str = "";
    for (var i = 0; i < model.length; i++) {
      var rnd = Math.floor(Math.random() * hex.length);
      str += model[i] == "x" ?  hex[rnd] : model[i] ;
    }
    return str.toLowerCase();
  }
}

const Posts = async request => {
  let post = await request.json()
  const key = post.username+":"+new GUID().Generate()
  post = {... post, id: key}
  try{
    await MY_KV.put(key, JSON.stringify(post))
  } catch {
    return new Response("Error adding post", { status: 500 })
  }
  const headers = { 'Access-Control-Allow-Origin': '*',
  'Content-type': 'application/json' }
  return new Response(JSON.stringify(post), { headers })
}


export default Posts