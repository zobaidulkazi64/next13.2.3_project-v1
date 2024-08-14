// "use client";

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// const BlogList: React.FC = () => {
//   const [blogs, setBlogs] = useState<any[]>([]);
//   const [pagination, setPagination] = useState({
//     currentPage: 1,
//     totalPages: 1,
//   });
//   const router = useRouter();

//   useEffect(() => {
//     fetchBlogs(pagination.currentPage);
//   }, [pagination.currentPage]);

//   const fetchBlogs = async (page: number) => {
//     try {
//       const response = await fetch(`/api/blogs?page=${page}`);
//       if (!response.ok) {
//         toast.error("Failed to fetch blogs");
//         return;
//       }
//       const data = await response.json();
//       if (data.blogs && Array.isArray(data.blogs)) {
//         setBlogs(data.blogs);
//         setPagination({
//           currentPage: data.pagination.currentPage,
//           totalPages: data.pagination.totalPages,
//         });
//       } else {
//         toast.error("Unexpected response format");
//       }
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       toast.error("Failed to fetch blogs");
//     }
//   };

//   const handleUpdate = (bId: number) => {
//     router.push(`/dashboard/blog/update/${bId}`);
//   };

//   const handleDelete = async (bId: number) => {
//     try {
//       const response = await fetch(`/api/blogs/${bId}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         toast.error("Failed to delete blog");
//         return;
//       }

//       toast.success("Blog deleted successfully");
//       fetchBlogs(pagination.currentPage); // Refresh the list after deletion
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       toast.error("Failed to delete blog");
//     }
//   };

//   const handlePageChange = (page: number) => {
//     setPagination((prev) => ({ ...prev, currentPage: page }));
//   };

//   return (
//     <div className="container p-7 lg:w-1/2 md:w-2/3 m-auto">
//       <h1 className="text-3xl font-bold mb-4">Blog List</h1>
//       {blogs.length === 0 ? (
//         <p>No blogs found.</p>
//       ) : (
//         <p>{blogs.length} blog(s) found.</p>
//       )}
//       <ul className="space-y-4">
//         {blogs.map((blog) => (
//           <li
//             key={blog.bId}
//             className="flex justify-between items-center border p-4 rounded"
//           >
//             <span>{blog.title}</span>
//             <div>
//               <button
//                 onClick={() => handleUpdate(blog.bId)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => handleDelete(blog.bId)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-center space-x-2 mt-4">
//         <button
//           onClick={() => handlePageChange(pagination.currentPage - 1)}
//           disabled={pagination.currentPage === 1}
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Previous
//         </button>
//         <span>
//           Page {pagination.currentPage} of {pagination.totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange(pagination.currentPage + 1)}
//           disabled={pagination.currentPage === pagination.totalPages}
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogList;
