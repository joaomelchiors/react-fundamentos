import Link from "next/link";

interface MenuItemProps {
    texto: string;
    href: string;
    icone: any;
}

export default function MenuItem(props: MenuItemProps) {
    
    return (
        <Link href={props.href} className="
         flex
         text-white text-sl w-full rounded-md px-4 py-2 gap-2 hover:bg-blue-900">
            <span>{props.icone}</span>
            <span>{props.texto}</span>
        </Link>
    )
}



