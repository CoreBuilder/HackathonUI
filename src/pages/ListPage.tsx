import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const fetchUserData = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const ListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUserData });

  const columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' }
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact rowData={data} columnDefs={columnDefs} />
    </div>
  );
};

export default ListPage;