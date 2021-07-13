import React, { useContext } from 'react';
import { Store } from './store';

const PostDetail = () => {
    const data = useContext(Store);
    const {postIds,postList,setPostId} = data
    console.log("Post Id >>>",postIds);
    if(postIds.length === 0){
        return <div>Select Any Post</div>
    }

    


    return <div>{postList.filter((post) => postIds.includes(post.id)).map((item) => {
        return (
            <div className="postDetail">
                <div>ID: {item.id}<button onClick={() => {
                    const posts = postIds.filter(postId => postId !== item.id);
                    console.log("Remaining >>",posts)
                    setPostId(posts)
                }} style={{float:'right',color:'red'}}>Delete</button></div>
                <div>Title: {item.title}</div>
                <div>Body: {item.body}</div>
            </div>
        )
    })}</div>
}

export default PostDetail;