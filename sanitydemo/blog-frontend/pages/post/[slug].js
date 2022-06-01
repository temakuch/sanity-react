const Post = () =>{
    return <div>I'm a post</div>
}

export const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug;
    return{
        props:{
            title: "default title",
            slug: pageSlug
        }
    }
}