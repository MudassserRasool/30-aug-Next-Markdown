import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />

      {/* Showing the date of the post */}
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      {/* Showing the title of the post */}
      <h3>{post.frontmatter.title}</h3>

      {/* Showing the description of the post */}
      <div>
        <p>{post.frontmatter.excerpt}</p>
      </div>

      {/* Create Button */}
      <div><Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link></div>
      
    </div>
  )
}
