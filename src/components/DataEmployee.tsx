import React from 'react';
import { Table } from 'antd';
import { useState, useEffect } from 'react';

const DataEmployee: React.FC = () => {
    const [dataSource, setDataSource] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => setDataSource(data.data))
        .catch(error => console.error('Error Fecthing Data', error));
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Frist Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
    ];
    
    return (
        <>
            <Table className='table-employee' dataSource={dataSource} columns={columns}></Table>
        </>
    )
}

export default DataEmployee;