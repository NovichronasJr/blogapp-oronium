async function getSingleBlog(id){

const post = await fetch("https://689364dcc49d24bce86aa52d.mockapi.io/api/blogs/articles/"+id)

if(!post.ok) throw new Error('fetch failed')

return post.json()

}

export default getSingleBlog;