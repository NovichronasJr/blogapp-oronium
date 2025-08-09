
export const getBlogs = async()=>{

const res = await fetch("https://689364dcc49d24bce86aa52d.mockapi.io/api/blogs/articles")
if(!res.ok) throw new Error('Failed to fetch');
return res.json()
}