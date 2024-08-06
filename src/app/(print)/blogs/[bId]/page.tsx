import { BlogType } from "@/types/BlogType";

async function fetchBlog(bId: string) {
  const res = await fetch(`http://localhost:3000/api/blogs/${bId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch blog with id ${bId}: ${res.statusText}`);
  }
  const data = await res.json();
  return data as BlogType;
}

const BlogDetail = async ({ params }: { params: { bId: string } }) => {
  const blog = await fetchBlog(params.bId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <h2 className="text-xl font-semibold mb-2">{blog.subtitle}</h2>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      {blog.image && <img src={blog.image} alt={blog.title} className="mb-4" />}
      <pre className="bg-gray-100 p-4 rounded">{blog.code}</pre>
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default BlogDetail;
