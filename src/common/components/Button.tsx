import { CSSProperties } from "react";

export function Button({ label, style }: { label: string, style?: CSSProperties}) {
  return (
    <button 
      className="rounded-[5px] px-2 py-1 hover:bg-gray-600 bg-gray-800 text-white font-bold"
      style={style}
    >
      {label}
    </button>
  )
}
