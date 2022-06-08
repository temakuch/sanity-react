import styles from '../styles/Home.module.css'
import Link from 'next/link'
const PostListTest = ({ posts, handleDelete}) => {

    return (
        <div className={styles.container}>
        {posts.posts_.map((post) =>(
            <div className={styles.card} key={post._id}>
              <Link href={"/post/"+ post.slug.current} key = {post._id}>
                  <a>
                  <h2>{ post.title }</h2>
                  </a>
              </Link>
              <p>{ post.content }</p>
              <button onClick={()=> handleDelete(post._id)}>Delete Post</button>
            </div>
         ) )}
         </div>
    );

}

export default PostListTest;