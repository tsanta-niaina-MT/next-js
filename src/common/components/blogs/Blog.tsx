import Link from "next/link";
import Image from "next/image";
import { BlogType } from "@/common/utils/contants";
import { Button } from "../Button";

export enum ViewType {
  LIST,
  SHOW,
  SHOW_IMAGE
}

export function Blog({ blog, view }: { blog: BlogType, view: ViewType }) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-full rounded hover:scale-[1.02] transition cursor-pointer mx-auto my-2 max-w-[700px] p-5  bg-gray-800">
        <h1 className="font-bold text-[#f3f3f3]">
          {blog.id}
        </h1>
        <p className="font-bold text-white opacity-[.7]">{blog.title}</p>
        {view === ViewType.SHOW && (
          <>
            <br/>
            <p className="text-white opacity-[.7]">{blog.content}</p>
            <Link className="underline mt-2 hover:text-green-400 text-end block text-green-600" href={`/blog/${blog.id}/image`}> 
              <Button
                label="View image"
                style={{color: "white", opacity: .7, backgroundColor: "green"}}
              />
            </Link>
          </>
        )}
        {view == ViewType.SHOW_IMAGE && <Image src={blog.img} alt={blog.img} width={500} height={500}/>}
      </div>
    </Link >
  )
}
