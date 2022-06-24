import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import PostListTest from '../Components/PostListTest';
import  Toolbar  from '../Components/Toolbar';
import imageUrlBuilder from '@sanity/image-url';
import {signIn, signOut, useSession} from 'next-auth/react';



const Home =  ({posts_})=> {
  const {data: session} = useSession();



  const [name, setName] = useState('Defaulty');
  const [age, setAge] = useState(11);
  const [posts, setPosts] = useState(posts_);

  const [mappedPosts, setMappedPosts] = useState([]);

  const handleClick = (name, e) =>{
    console.log('clicked by ' + name, e.target);
  }
  const handleDelete = (id) =>{
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
  }

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: '0he28j0q',
      dataset: 'production'
    });
    setMappedPosts(posts_.map(p => {
      return{...p,
             mainImage: imgBuilder.image(p.mainImage).width(320).height(180)}
    }));
    
    }, [posts]);
  
  return (
    <>
    <div className={styles.main}>
      {!session && (<button onClick={()=>signIn()}>
        SignIn
      </button>)}
      {session &&(
       <>
       <h1>Welcome to intelligent website {session.user.name}</h1>
        <h3>Hi, you'r cool </h3>
            
        <PostListTest posts={mappedPosts} handleDelete={handleDelete}/>
      </>
      )}

    </div>
    </>
      )
}

export default Home;

export const getServerSideProps = async (pageContext)=>{
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);
  // const query = encodeURIComponent( `*[_type == "post" && slug.current == "${pageSlug}"]`);
  const query = encodeURIComponent( `*[_type == "post"]`);
  const url = `https://0he28j0q.api.sanity.io/v1/data/query/production?query=${query}`;
  
  const res = await fetch(url).then(data => data.json());
  const posts = res.result;
  
  if (!posts) {
      return { 
          notFound: true };
  }
  
  return {
      props: { 
        posts_: posts
      }
  }
  
};