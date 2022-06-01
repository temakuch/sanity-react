import styles from '../styles/Home.module.css'


const PostListTest = ({posts, handleDelete})=>{
    return(
        posts.map((post)=> (
            <div key={post.id} className = {styles.card}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button onClick = {()=> handleDelete(post.id)}>Delete</button>
            </div>
          ))
    )
}

export default PostListTest;