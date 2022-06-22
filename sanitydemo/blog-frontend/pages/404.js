import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/'); // go back to previous page
        },3000) // wait 3 seconds
    }, [])

    return (
        <div className="not-found">
        <h1>куда ти вжмав, а? А?</h1>
        <p>Page not found</p>
        <p>Get out here<Link href="/"> назад звідки виліз</Link></p>
        </div>)
}

export default NotFound;    // export default NotFound;





