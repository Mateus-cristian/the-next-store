import { Button } from "../../../styles/components/Button/nsButtonSignGoogle";
import { FcGoogle } from 'react-icons/fc'

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
}

export default function NsButtonSignGoogle({ title, disabled, onClick }: ButtonProps) {
    return (
        < Button disabled={disabled} onClick={onClick} >
            <FcGoogle size={35} />
            <span>{title}</span>
        </Button >
    )
}