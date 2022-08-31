import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  // console.log(posts);

  return (
    <div>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

//fillowing method is used to fetch data at buil time we use it to create data for static website
export async function getStaticProps() {
  //get file from the post directory
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and formater from posts
  const posts = files.map((filename) => {
    //cereate slug (it will replace)
    const slug = filename.replace(".md", " ");

    //create markdown (it will show data and patern)
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts : posts.sort(sortByDate),
    },
  };
}
