import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../component/CallToAction";
import CommentSection from "../component/CommentSection";
import PostCard from "../component/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <main className="mx-auto w-full  bg-[url('/texture1.avif')] bg-cover  relative z-30 dark:bg-[#2D4D6C] shadow-md rounded-lg overflow-hidden min-h-screen">
      <div className="bg-[#ffe9c8c5] max-w-2xl mx-auto">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post && post.title}
        </h1>
        <div className="flex justify-between px-10 max-w-2xl mx-auto">
          <Link
            to={`/search?category=${post && post.categorySlug}`}
            className="self-center mt-5"
          >
            <Button color="gray" pill size="xs">
              {post && post.category}
            </Button>
          </Link>
          <Link
            to={`/search?author=${post && post.author}`}
            className="self-center mt-5 flex"
          >
            <span className="text-xs pt-1">Author - </span>
            <Button color="gray" pill size="xs">
              {post && post.author}
            </Button>
          </Link>
        </div>

        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-2 p-10  max-h-[600px] w-full object-cover mx-auto max-w-2xl"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full text-xl"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
      </div>
      <CommentSection postId={post._id} />
      {/* <div className="max-w-4xl mx-auto w-full bg-white">
        <CallToAction />
      </div> */}

      <div className="flex flex-col justify-center text-center bg-white -center  relative z-10">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
