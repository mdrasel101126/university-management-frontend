"use client"
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ManageStudentsPage = () => {
    const {role}=getUserInfo() as any;
    return (
        <div>
            <UMBreadCrumb items={[
            {
                label:`${role}`,link:`${role}`
            },
        ]}/>
            <h1>Manage Student Page</h1>
            <Link href="/super_admin/manage-student/create">
            <Button type='primary'>Create Student</Button>
            </Link>
        </div>
    );
};

export default ManageStudentsPage;