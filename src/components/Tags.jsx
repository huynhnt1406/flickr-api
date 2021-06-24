import React from 'react'
import './Tags.css'
function Tags({clickTag,tags}) {


    const style = {
        backgroundColor:`hsl(${Math.random() * 100}, ${Math.random() * 100}%, 50%`,
        margin:'5px',
        listStyle:'none',
        padding:'5px',
        color:'white',
        cursor:'pointer',
        borderRadius:'5px'
    }
    return (
        <div className="Tags">
            <h3>Tags</h3>
            <div className="tag-childs">
                {
                    tags.map((tag) => (
                       <li style={style} onClick={() => clickTag(tag.tags)} key={tag.id}>{tag.tags}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Tags
