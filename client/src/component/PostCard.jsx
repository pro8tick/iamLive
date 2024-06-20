import { Link } from "react-router-dom";
import { stripHtmlTags } from "../pages/Home";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
export default function PostCard({ post }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className="group relative w-[95vw] mx-auto opacity-100 dark:bg-slate-600  h-[600px] overflow-hidden rounded-lg sm:w-[430px] transition-all "
    >
      <Link to={`/post/${post.slug}`} className="block">
        <img
          src={post.image}
          alt="post cover"
          className="h-[350px] w-[95vw] mx-auto sm:w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 opacity-90"
        />
      </Link>
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
        <Link
          to={`/post/${post.slug}`}
          className="z-10 bock group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
    </motion.div>
  );
}
