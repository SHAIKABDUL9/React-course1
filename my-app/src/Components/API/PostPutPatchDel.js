import React from 'react';
import axios from 'axios';



function PostPutPatchDel(){
    const [postTtle,setPostTitle]=React.useState("");
    const [postBody,setPostBody]=React.useState();

    const handleCreatePost=async()=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',headers:{
                    'content-type': 'application/json'
                },body: JSON.stringify({title:postTtle,body:postBody,userID:1})
            });
            const newPost=await response.json()
            console.log(newPost);

        }catch(e){
            console.error("Error creating post:" ,e);
        }

    };

    const handleUpdatePostPut=async()=>{
        try{
            let postID=1;
            const response=await fetch('https://jsonplaceholder.typicode.com/posts/${postID}',{
                method:'PUT', headers:{
                    'content-type': 'application/json'
                },body: JSON.stringify({id:postID,title:'Update title',body:'Update put',userID:1})
            })
            const updatePost=await response.JSON()
            console.log(updatePost);

        }catch(e){
            console.error("enter updating post:",e);
        }

    };

    const handleUpdatePostPatch =async()=>{
        try{
            let postID=1;
            const response=await fetch('https://jsonplaceholder.typicode.com/posts/${postID}',{
                method:'PATCH',
                headers: {'content-type':'application/json'},
                body:JSON.stringify({title:'update title'})
            })
            const updatedPost=await response.json()
            console.log(updatedPost);


        }catch(e){
            console.error("enter updating post",e)
        }

    };

    const handleDeletePost = async () => {
        // Logic for deleting a post
        try{
          let postId = 100;
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
          })
          const deletedPost = await response.json();
          console.log(deletedPost);
        } catch(e) {
            console.error("Error deleting post:", e);
        }
    };

return(
    <div>
        <h1>Post, Put, Patch ,Delete Request</h1>
        <h3>Create a new Post</h3>
        <input type="text" placeholder='Enter post Title 'value={postTtle} onChange={(e)=>setPostTitle(e.target.value)}/>
        <input type="text" placeholder="Enter post Body" value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
        
        <br/>
         <button onClick={handleCreatePost}>Update post</button>

         <h3>Update an exsting Put</h3>
         <button onClick={handleUpdatePostPut}>Update Post Put</button>

         <h3>Update an exsting Post Using Post</h3>
         <button onClick={handleUpdatePostPatch}>Update Post Patch</button>

         <h3>Update an exsting Post Delete</h3>
         <button onClick={handleDeletePost}>Delete post</button>
    </div>
)
}



function PostPutPatchDelAxios() {
    const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");

    const handleCreatePost = async ()=> {
        try {
            const response = await axios.fetch('https://jsonplaceholder.typicode.com/posts', {
                title: postTitle,
                body: postBody,
                userId: 1
            }, {
                headers: {'Content-Type': 'application/json'},
            });
            console.log(response.data);
        } catch(e) {
            console.error('Error on creation post', e)
        }
    }

    const handleUpdatePostPUT = async () => {
        try{
            const response=await axios.fetch('https://jsonplaceholder.typicode.com/posts',{title:'Design programmer' ,body:'update content',userId:3},{headers:{'content-type':'application/json'},});
            console.log(response.data);

        }catch(e){
            console.error('Error on creaton post',e);
        }
        
    }

    const handleUpdatePostPatch = async()=> {
        try{
            const response=await axios.fetch('https://jsonplaceholder.typicode.com/posts',{title:'sourse code',body:'input new value'},{headers:{'Content-Type':'application/json'},
            });
            console.log(response.data)

        }catch(e){
            console.error("Enter updating put",e)
        }
       
    }

    const handleDeletePost = async () => {
        try{
            let postID=5;
            const response=await axios.fetch('https://jsonplaceholder.typicode.com/posts/${postID}',{method:'delete',userId:postID});
            console.log(response.data);

        }catch(e){
            console.error(" delete values ",e);
        }
        
    }

    return(
        <div>
            <h1>Post, Put, Patch, Delete Requests</h1>
            <h3>Create a new post</h3>
            <input type="text" placeholder="Enter post title"  value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
            <input type="text" placeholder="Enter post body" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
            <button onClick={handleCreatePost}>Create Post</button>

            <h3>Update an existing post PUT</h3>
            <button onClick={handleUpdatePostPUT}>Update Post PUT</button>

            <h3>Update an existing post using patch</h3>
            <button onClick={handleUpdatePostPatch}>Update Post Patch</button>

            <h3>Delete Post</h3>
            <button onClick={handleDeletePost}>Delete Post</button>

        </div>
    )
}

export {PostPutPatchDel,PostPutPatchDelAxios};