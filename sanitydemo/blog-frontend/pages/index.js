import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react';
import PostListTest from '../components/PostListTest';
export default function Home(){
  const [name, setName] = useState('Defaulty');
  const [posts, setPosts] = useState([
    {id: 1, title: "Post-1", content: "Content-1"},
    {id: 2, title: "Post-2", content: "Content-2"},
    {id: 3, title: "Post-3", content: "Content-3"},
  ])
  const [age, setAge] = useState(12);
}
export default function Home() {
  const handleClick = (name, e) =>{
    console.log("clicked by" + name, e.target);
  }
  const handleDelete = (id) =>{
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }
  useEffect(() =>{
    console.log('useEffect called');
  }, [age]);

  return (
    <div className={styles.container}>
      <h2>Homepage</h2>
      <button onClick = {(e)=>{
        setAge(age + 1);
        setName("Artem");
      }}>Click</button>
      <p>Hello {name} you are {age}</p>
      <PostListTest posts = {posts} handleDelete = {handleDelete}/>
    </div>
  )
}

