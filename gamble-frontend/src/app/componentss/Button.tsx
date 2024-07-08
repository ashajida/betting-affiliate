import Link from "next/link";

type Props = {
    text: string,
    classes?: string
}

const Button = ({ text, classes }: Props) => {
    return (
        <>
        <Link href="#" className={`block w-fit h-fit border border-primary rounded-md text-dark bg-primary p-2 ${classes}`}>
            {text}
        </Link>
        </>
    );
}

export default Button;
