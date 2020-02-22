import React from 'react';
import cssObj from '@/css/democss.css'
// import bootCss from 'bootstrap/dist/css/bootstrap'
// console.log(bootCss);

export default function CmtItem(props) {
    return <div><p className="fontSize" style={{color:'red'}}>评论人id:{props.id}</p>  评论人姓名:{props.user}  评论内容:{props.content}</div>
}