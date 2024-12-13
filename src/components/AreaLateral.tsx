import Logo from "./Logo";
import Menu from "./Menu";

interface AreaLateralProps {
    rounded?: string;
}

export default function AreaLateral(props: AreaLateralProps) {
    return (
        <div className={`${props.rounded?? "rounded-none"} bg-zinc-800`}>
            <Logo />
            <Menu />
        </div>
    )
}