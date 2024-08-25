import { Skeleton } from "antd"
import '../App.css'
import { useEffect, useState } from "react";;
import axios from "axios";

interface DataState {
    properties: Record<string, NotionProperty> | null;
}

interface NotionProperty {
    id: string;
    type: string;
    title?: { text: { content: string } }[];
    rich_text?: { text: { content: string } }[];
    select?: { name: string };
    number?: number;
  // Add other property types as needed
}

export interface Title {
    plain_text: string
}

function NotionPage() {
    const [loading, setLoading] = useState(true) 
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // })

    const NOTION_URL = "http://localhost:8080/notion/database";
    const [data, setData] = useState<DataState>({
        properties: null,
    })
    
    const fetchTest = async () => {
        try {
            console.info(loading)
            const response = await axios.get(NOTION_URL)
            
            // if ( response.data.results.lenght > 0) {
                setData({
                    properties: response.data.results[0].properties
                })
            // }
        } catch (err) {
            console.error("error response",err)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchTest()
    },[])

    return <>
        {loading ? (
            <div>
                <Skeleton />
            </div>
        ): (
            <div>
                {/* {JSON.stringify(data.properties)} */}
                <h1>Notion Data</h1>
                {data.properties && Object.entries(data.properties).map(([key, property]) => (
                    <div>key: {key} {property.type === 'title' && property.title ? property.title[0]?.text.content : ""}</div>
                ))}
            </div>
        )}
    </>
}

export default NotionPage

