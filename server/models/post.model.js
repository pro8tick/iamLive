import mongoose from "mongoose";
import Category from "./category.model.js";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    category: {
      type: String,
      default: "uncategorized",
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
    fetchCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

postSchema.post("save", async function (doc, next) {
  try {
    const categoryExists = await Category.exists({ value: doc.categorySlug });

    if (!categoryExists) {
      // Create new category and save to Category model
      const newCategory = new Category({
        label: doc.category,
        value: doc.categorySlug, // Convert to lowercase and replace spaces with hyphens
      });

      await newCategory.save();
    }
    next();
  } catch (err) {
    next(err);
  }
});

postSchema.post("save", async function (doc, next) {
  try {
    // Check if the subtitle already exists
    if (!doc.subtitle) {
      // Generate subtitle by taking a part of the content as preview
      const maxLength = 200; // Maximum length for the preview
      const contentWithoutTags = doc.content.replace(/<[^>]+>/g, "");
      let preview = contentWithoutTags;

      if (preview.length > maxLength) {
        preview = preview.substring(0, maxLength).trim() + "...";
      }

      // Update the subtitle field
      doc.subtitle = preview;

      // Save the updated document
      await doc.save();
    }

    next();
  } catch (error) {
    console.error("Error generating subtitle:", error);
    next(error);
  }
});

postSchema.post("find", function (docs) {
  if (docs.length === 1) {
    docs.forEach((doc) => {
      doc.fetchCount += 1;
      doc.save(); // Save the document with the updated fetch count
    });
  }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
