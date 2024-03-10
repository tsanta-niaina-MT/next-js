import { redirect } from "next/navigation";

import { Blog, BlogList, BlogType } from "@/common/components/blogs";
import blogs from "@/common/utils/contants";

export default function ImageOfBlog({ params: { Id } }: { params: { Id: string } }) {
  const BlogNumber = blogs.find(blog => blog.id === Id);

  if (!BlogNumber) {
    redirect("/404");
  }

  return (
    <div 
      className="flex ml-[300px] p-5 justify-center"
      style={{width: "calc(100% - 300px)"}}
    >
      <BlogList />
      <Blog blog={BlogNumber} view={BlogType.SHOW_IMAGE} />
    </div>
  )
}
