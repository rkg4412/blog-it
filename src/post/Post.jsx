import React from 'react';
import '../post/post.css';

export default function Post() {
    return (
        <div>
           <img
           className="postImg"
           src=""
           alt=""
           />
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Anime</span>
               </div>
               <span className="postTitle">Post Title</span>
               <hr />
               <span className="postDate">1 hour ago</span>
               <p className="postDesc" >
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ea tempore accusamus
                    veritatis totam itaque dolorum repellendus minus tempora,
                    molestiae iure velit accusantium repellat ullam impedit qui quis cumque voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ea tempore accusamus
                    veritatis totam itaque dolorum repellendus minus tempora,
                    molestiae iure velit accusantium repellat ullam impedit qui quis cumque voluptate.
               </p>
           </div>
        </div>
    )
}
