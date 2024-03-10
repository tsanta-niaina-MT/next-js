import { Blog, ViewType } from "@/common/components/blogs";
import blogs from "@/common/utils/contants";

export default function Home() {
  return (
    <main className="w-full py-5">
      {blogs.map(blog => <Blog key={blog.id} blog={blog} view={ViewType.LIST} />)}
    </main>
  )
}
