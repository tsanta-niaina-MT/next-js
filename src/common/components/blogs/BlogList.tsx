import blogs from "@/common/utils/contants";
import { Blog, ViewType } from "./Blog";

export function BlogList() {
  return (
    <div 
      className="w-[300px] px-2 fixed left-0 top-[50px] overflow-y-auto bg-gray-700"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {blogs.map(blog => <Blog key={blog.id} blog={blog} view={ViewType.LIST} />)}
    </div>
  )
}
