import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import instance from '../../../services/instance';
import { Box } from '@mui/material';
import { DataGrid,GridToolbarExport,
    GridToolbarContainer } from '@mui/x-data-grid';
    const columns = [
        { field: 'id', headerName: 'SI', type: 'number', width: 70 },
        { field: 'name', headerName: 'Name', width: 140},
        { field: 'email', headerName: 'Email', width: 160 },
        { field: 'phone', headerName: 'Contact', width: 140 },
        { field: 'college', headerName: 'college', width: 130 },
        { field: 'dept', headerName: 'Department', width: 130 },
        { field: 'semester', headerName: 'Semester', width: 130 },
        { field: 'referralCode', headerName: 'Refferal Code', width: 130 },
        { field: 'score', headerName: 'Score', width: 130 },

    
        
      ];

const CampusAmbassador = () => {
    const [data,setData]=useState([]);
   
      
    useEffect(() => {


        getEvents();
       

        
      
         }, [])
         const getEvents=()=>{
          instance({
            url: "/ca",
           
           
          }).then((response) => {
            setData(response.data.data)
           })
          .catch((error) => {
            handleClose();
           console.log(error)
          });
         }


         

         const rows=
         data?.map((item,indx)=>(
     
          {id:indx+1,
           name:item?.name,
           email:item?.email,
           phone:item?.phone,
           college:item?.college,
           dept:item?.dept,
           semester:item?.semester,
           referralCode:item?.referralCode,
           score:item?.score,
         }
         ))


    return (
        <div>

            
< Box sx={{ height: 628, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize:10,
            },
          },
        }}
        pageSizeOptions={[10,25]}
        
        disableRowSelectionOnClick
      />
    </Box>
        </div>
    );
}

export default CampusAmbassador;
