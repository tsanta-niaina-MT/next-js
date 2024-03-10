import Link from "next/link";

export function Header() {
  return (
    <header className="w-full px-5 py-5 bg-gray-800 h-[50px] flex items-center justify-between">
      <h1 className="font-bold text-white">
        Blog
      </h1>
      <ul className="flex gap-5">
        <li className="text-white">
          <Link href="/home">
            Home
          </Link>
        </li>
        <li className="text-white">
          <Link href="/home">
            Something Else
          </Link>
        </li>
      </ul>
    </header>
  )
}
