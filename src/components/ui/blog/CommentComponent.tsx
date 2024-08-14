"use client";
import React, { useState, useEffect } from "react";

interface Author {
  _id: string;
  username: string;
}

interface Reply {
  _id: string;
  author: Author;
  comment: string;
  code: string;
}

interface Comment {
  _id: string;
  author: Author;
  blogId: string;
  comment: string;
  code?: string;
  replies: Reply[];
  createdAt: string;
  updatedAt: string;
}

interface CommentComponentProps {
  blogId: string;
}

const CommentComponent: React.FC<CommentComponentProps> = ({ blogId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [newCode, setNewCode] = useState<string>("");

  // Fetch comments
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`http://localhost:5111/api/comment/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogId }),
        });

        const data = await res.json();

        if (data.success) {
          setComments(data.comments);
        } else {
          console.error("Failed to load comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [blogId]);

  // Handle adding a new comment
  const handleAddComment = async () => {
    try {
      const reqBody = {
        blogId,
        comment: newComment,
        code: newCode,
      };
      console.log(reqBody);
      // Send data to the backend
      const res = await fetch(`http://localhost:5111/api/comment/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId,
          comment: newComment,
          code: newCode,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setComments([...comments, data.comment]);
        setNewComment("");
        setNewCode("");
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Handle replying to a comment
  const handleReply = async (
    commentId: string,
    replyComment: string,
    replyCode: string
  ) => {
    try {
      const res = await fetch(
        `http://localhost:5111/api/comment/reply/${commentId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: replyComment,
            code: replyCode,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        const updatedComments = comments.map((comment) =>
          comment._id === commentId
            ? { ...comment, replies: [...comment.replies, data.reply] }
            : comment
        );
        setComments(updatedComments);
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* New Comment Section */}
      <div className="mb-6">
        <textarea
          className="w-full p-2 border rounded"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        ></textarea>
        <textarea
          className="w-full p-2 border rounded mt-2"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          placeholder="Add an optional code snippet"
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={handleAddComment}
        >
          Submit Comment
        </button>
      </div>

      {/* Comments List */}
      {comments.map((comment) => (
        <div key={comment._id} className="mb-4">
          <p>
            <strong>{comment.author.username}</strong>: {comment.comment}
          </p>
          {comment.code && (
            <pre className="bg-gray-100 p-2 rounded">
              <code>{comment.code}</code>
            </pre>
          )}
          <p className="text-sm text-gray-500">
            Posted on {new Date(comment.createdAt).toLocaleString()}
          </p>

          {/* Replies */}
          {comment.replies.length > 0 && (
            <div className="ml-6 mt-2">
              {comment.replies.map((reply) => (
                <div key={reply._id} className="mb-2">
                  <p>
                    <strong>{reply.author.username}</strong>: {reply.comment}
                  </p>
                  {reply.code && (
                    <pre className="bg-gray-100 p-2 rounded">
                      <code>{reply.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Reply Form */}
          <div className="mt-2">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Add a reply"
              onChange={(e) => handleReply(comment._id, e.target.value, "")}
            ></textarea>
            <textarea
              className="w-full p-2 border rounded mt-2"
              placeholder="Add an optional code snippet"
              onChange={(e) => handleReply(comment._id, "", e.target.value)}
            ></textarea>
            <button
              className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              onClick={() => handleReply(comment._id, "", "")}
            >
              Submit Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;
