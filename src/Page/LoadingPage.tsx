import { Skeleton, Space } from "antd"
import '../App.css'
import { useEffect, useState } from "react";
import HomeForm from "../Component/HomeForm";

function LoadingPage() {
    const [loading, setLoading] = useState(true) 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    // const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
    // const [data, setData] = useState([])
    // const fetchTest1 = async () => {
    //     try {
    //         console.info(loading)
    //         const response = await axios.get(BASE_URL)
    //         let resData = response.data;
    //         if (resData) setData(resData)
    //     } catch (err) {
    //         console.error("error response",err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    
    // useEffect(() => {
    //     console.info("call api")
    //     fetchTest1();
    // },[])

    // useEffect(() => {
    //     axios
    //     .get(BASE_URL)
    //     // .then((res) => res.data)
    //     .then((res) => {
    //         console.info(res)
    //         setData(res.data)
    //         setLoading(false)
    //     })
    //     .catch((error) => console.error(error))
    // }, [])
    return <>
        {loading ? (
            <div>
                <Skeleton.Input active size="small"/><br /><br />
                <Skeleton.Input active/><br /><br />
                <Skeleton.Input active/> <br /><br />
                <Skeleton.Input active/> <br /><br />
                <Space>
                    <Skeleton.Button active/>
                    <Skeleton.Button active/>
                </Space>
            </div>
        ): (
            <HomeForm/>
        )}
    </>
}

export default LoadingPage

