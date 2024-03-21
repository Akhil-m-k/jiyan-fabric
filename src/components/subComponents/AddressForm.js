import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'

const AddressForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('fname'),
            lastName: data.get('lname'),
            address:data.get('address'),
            city:data.get('city'),
            state:data.get('state'),
            zipCode:data.get('zip'),
            Mobile:data.get('mobile')
        }
        console.log("address",address);
    }
  return (
    <div>
        <Grid container columnSpacing={4}>
            <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll mb-4'>
                <div className="p-5 border-b cursor-pointer">
                    <AddressCard/>
                    <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant='contained'>Deliver Here</Button>
                </div>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Box className="border rounded-sm-md shadow-md p-5">
                    <form action="" onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='fname' name='fname' label='First Name' fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='lname' name='lname' label='Last Name' fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField required id='address' name='address' label='Address' fullWidth autoComplete='given-name' multiline rows={5}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='city' name='city' label='City' fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='zip' name='zip' label='Zip/Postal code' fullWidth autoComplete='shipping postal code'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id='mobile' name='mobile' label='Mobile' fullWidth autoComplete='given-name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button  sx={{mt:1, py:1.5,bgcolor:"RGB(145 85 253)"}} size="large" variant='contained' type='submit'>Deliver Here</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default AddressForm