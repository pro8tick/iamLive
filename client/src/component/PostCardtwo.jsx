import { Link } from "react-router-dom";
import { stripHtmlTags } from "../pages/Home";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function PostCardtwo({ post }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className="group relative w-[95vw] mx-auto  dark:bg-slate-600  h-[600px] overflow-hidden rounded-lg sm:w-[430px] transition-all "
    >
      <Link to={`/post/${post.slug}`} className="block">
        <img
          src={post.image}
          alt="post cover"
          className="h-[350px] w-[95vw] mx-auto sm:w-full object-cover group-hover:opacity-75 transition-all duration-300 z-20 opacity-90"
        />

        <div className="py-3 flex flex-col gap-1">
          <span className="text-xs text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
            {post.category}
          </span>
          <p className="text-lg  text-[#000000d8] font-bold line-clamp-2">
            {post.title}
          </p>
          <p className="text-sm mt-4 text-[#000000c9] dark:text-green-100 line-clamp-4">
            {stripHtmlTags(post.content)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
