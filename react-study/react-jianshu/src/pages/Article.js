import React from 'react'

const Article = (props)=>{
    // console.log(props);
    return (
    <div>art{props.match.params.id}</div>
)}
export default Article