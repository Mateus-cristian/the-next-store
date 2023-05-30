import { Button } from "../../../styles/components/Button/nsButton";

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
}

export default function NsButton({ onClick, disabled, title }: ButtonProps) {
    return (
        < Button disabled={disabled} onClick={onClick} >
            {title}
        </Button >
    )
}