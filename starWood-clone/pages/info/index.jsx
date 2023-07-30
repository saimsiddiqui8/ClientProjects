import { useRouter } from "next/router";

export default function info() {

    const router = useRouter();
    const { name, palmJumeraHeading, palmJumeraParagraph } = router.query;
    return (
        <>
            <h1>{name}</h1>
            <h5>{palmJumeraHeading}</h5>
            <p>{palmJumeraParagraph}</p>
        </>
    )
}