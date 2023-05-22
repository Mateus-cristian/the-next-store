import { Button } from "../../styles/components/nsButton";

interface ButtonProps {
    disabled?: boolean;
    handlerPoduct?: () => void;
    title: string;
}

export default function NsButton({ handlerPoduct, disabled, title }: ButtonProps) {
    return (
        < Button disabled={disabled} onClick={handlerPoduct} >
            {title}
        </Button >
    )
}