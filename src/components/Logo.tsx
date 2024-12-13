import { IconBrandReact, IconRectangle } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="
         flex items-center
         text-3xl font-black text-white p-2 h-16 bg-zinc-500 rounded-tl-md border-r-2 border-zinc-900 gap-2">
            <span><IconBrandReact/></span>
            <span>React</span>
        </Link>
    )
}