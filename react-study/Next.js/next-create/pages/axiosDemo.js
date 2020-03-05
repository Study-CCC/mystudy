import axios from 'axios'

const axiosDemo=({array})=>{
    // console.log(array);
    return(
        <div>
            {JSON.stringify(array[0])}
        </div>
    )
}
axiosDemo.getInitialProps =async ()=>{
    const promise = new Promise((resolve)=>{
        axios('http://rap2.taobao.org:38080/app/mock/246285/example/1583378360145').then(
            (res)=>{
                // console.log(res.data);
                resolve(res.data)
            }
        )
    })
    return await promise
}
export default axiosDemo;