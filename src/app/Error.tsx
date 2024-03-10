import Link from "next/link";
import { Button } from "@/common/components";

export default function Error() {
  return (
    <div className="w-[100vw] top-0 left-0 bg-white fixed z-99 h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-[2rem]">404 Not Found</h2>
      <Link href="/home">
        <Button label="Go to /home"/>
      </Link>
    </div>
  )
}
