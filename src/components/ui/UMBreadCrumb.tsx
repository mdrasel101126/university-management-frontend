import { Breadcrumb } from "antd";
import Link from "next/link";
import {
    HomeOutlined
  } from "@ant-design/icons";

const UMBreadCrumb = ({items}:{
    items:{
        label:string;
        link:string
    }[]
}) => {
    const breadCrumb=[
        {
            title:(<Link href="/"><HomeOutlined/></Link>)
        },
        ...items.map(item=>{
            return{
                title:item.link?(<Link href={item.link}>{item.label}</Link>):(<span>{item.label}</span>)
            }
        })
    ]
    return (
        <Breadcrumb items={breadCrumb}></Breadcrumb>
    );
};

export default UMBreadCrumb;