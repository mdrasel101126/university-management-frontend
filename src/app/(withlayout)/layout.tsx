"use client"
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLogedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  const router= useRouter();
  const userLogedIn=isLogedIn();
  const [isLoading,setIsLoading]=useState<boolean>(true);
  useEffect(()=>{
    if(!userLogedIn){
      router.push("/login");
    }
    setIsLoading(false);
  },[router,userLogedIn]);
  if(isLoading){
    return  <Row justify="center" align="middle"
    style={{height:"100vh"}}>
    <Space>
       <Spin size="large" />
    </Space>
</Row>
  }
  return (
    <Layout hasSider>
      <Sidebar/>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;