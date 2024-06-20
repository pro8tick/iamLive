import { Link } from "react-router-dom";
import CallToAction from "../component/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../component/PostCard";
import Slider from "../component/Slider";

export function stripHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  const boxStyle =
    "group relative rounded-xl p-2 flex flex-col items-center justify-center  bg-white dark:bg-[#2D4D6C] shadow-md  shadow-[#f8c290] dark:shadow-gray-200/40 hover:shadow-gray-100  overflow-hidden rounded-lg transition-all";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=7");
      const data = await res.json();
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="md:mx-15">
      {/* Post section */}
      {posts && posts.length > 0 && (
        <div className="flex flex-col gap-6 justify-center items-center mt-5 pb-10 relative  z-10 min-h-[100vh] bg-[#faf5f5] ">
          <div className="flex flex-wrap gap-10 justify-center z-10 bg-[#faf5f5] ">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <div className="z-10">
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center z-10"
            >
              View all posts
            </Link>
          </div>
        </div>
      )}
      <div className="p h-[300vh] bg-[url('/wallpaper1.avif')] bg-cover relative -my-[100vh] z-1">
        <CallToAction />
      </div>

      {/* #grid section */}
      <div className="bg-[#faf5f5]  relative z-20 py-10">
        <h2 className="text-2xl font-semibold text-center mt-5 z-30">
          Trending Posts
        </h2>
        <div className="grid md:grid-cols-4 auto-rows-[550px] sm:auto-rows-[250px] gap-4 my-10  min-h-[100vh] z-20">
          {posts.map((post, i) => (
            <div
              key={i}
              className={` ${boxStyle}  hover:bg-[#f3bf9c13] ${
                i == 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
              } ${i === 2 ? "md:row-span-2" : ""}`}
            >
              <Link to={`/post/${post.slug}`} className="block">
                <div
                  className={`flex flex-col text-wrap flex-grow  ${
                    i == 0 || i === 4 || i === 5 || i === 6 ? "md:flex-row" : ""
                  }  ${i == 1 ? "sm:max-w-[250px]" : ""} smallwrapper`}
                >
                  {i !== 1 && i !== 3 && (
                    <img
                      src={post.image} // Assuming post.image contains the image URL
                      alt={post.title}
                      className={`w-full h-[40vh] sm:h-auto  object-cover filter  ${
                        i === 0 || i === 4 || i === 5 || i == 6
                          ? "md:w-1/2"
                          : ""
                      }`}
                    />
                  )}

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-between flex-grow p-4 w-full ${
                      i === 0 || i === 4 || i === 5 || i == 6 ? "md:w-1/2" : ""
                    }`}
                  >
                    <h2 className="text-xl mb-1 font-semibold line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#e89981] dark:text-gray">
                      {post.author}
                    </p>
                    <p className="text-sm mt-4 dark:text-green-100 line-clamp-4">
                      {stripHtmlTags(post.content)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Slider />
    </div>
  );
}
