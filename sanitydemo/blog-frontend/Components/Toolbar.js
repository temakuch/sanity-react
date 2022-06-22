import styles from '../styles/Toolbar.module.css';
import Link from 'next/link';
import {signIn, signOut, useSession} from 'next-auth/react';


export const Toolbar = () => {
    const {data: session} = useSession();
    return (

        <div className={styles.main}>
            <div>
                {session && (<button onClick={()=>signOut()}>SignOut</button>)}
            </div>
            
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>

            <div>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
            
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </div>
    );
}

export default Toolbar;