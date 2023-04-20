import React from 'react'
import Sidebar from '../pages/Sidebar'
import { Box, Radio, RadioGroup, Stack } from '@mui/material'
import Navbar from '../pages/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
// import FormGroup from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
// import Array from '@mui/material/Array';

import '../Dash.css'


const Client = () => {
    const formik = useFormik({
        initialValues: {
            clientname: '',
            address: '',
            country: '',
            type: '',
            date: '',
            consultant: '',
            email: '',
            approved: '',
            totalprice: '',
        },
        validationSchema: Yup.object({
            clientname: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Client Name is Required'),
            address: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Address is Required'),
            country: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Country is Required'),
            type: Yup.array().of(Yup.string())
                .max(20, 'Must be 20 characters or less')
                .required('Type is Required'),
            date: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Date is Required'),
            consultant: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Consultant is Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is Required'),
            approved: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Approved is Required'),
            totalprice: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Total Price is Required'),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                {/* <Box height={20} /> */}
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ minWidth: 40 + '%', minheight: 100 + 'vh', }}>
                                    <CardContent sx={{
                                        margin:1 + 'px',
                                    }}>
                                        <Container maxWidth="sm" sx={{
                                            marginTop: 1
                                        }}>
                                            <Box>
                                                <>
                                                    <Card>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12}>
                                                                <Typography variant="h5" component="h5" sx={{
                                                                    marginTop: 2,
                                                                    padding: 1,
                                                                    textAlign: 'center',
                                                                }}>
                                                                    Registration Form
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sx={{
                                                                // display: 'flex',
                                                                // flexDirection: 'column',
                                                                padding: "10px 10px",
                                                                // gap: 2,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                margin: 3,
                                                            }}>
                                                                <form onSubmit={formik.handleSubmit} sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    padding: 10,
                                                                    margin: 10,
                                                                    gap: 2,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    marginTop: 3,
                                                                }}>
                                                                    <div style={{ margin: '10px 0', width: '100%' }} >
                                                                        <TextField
                                                                            label="Client Name"
                                                                            size='medium'
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            id="clientname"
                                                                            name="clientname"
                                                                            type="text"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.clientname}
                                                                        />
                                                                        {formik.touched.clientname && formik.errors.clientname && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.clientname}</div>
                                                                        )}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0', width: '100%' }} >
                                                                        <TextField
                                                                            label="Address"
                                                                            size='medium'
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            id="address"
                                                                            name="address"
                                                                            type="text"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.address}
                                                                        />
                                                                        {formik.touched.address && formik.errors.address && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.address}</div>
                                                                        )}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0', width: '100%' }} >
                                                                        <FormControl sx={{ width: '100%' }}>
                                                                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                                                            <Select
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                value={formik.values.country}
                                                                                label="Country"
                                                                                onChange={formik.handleChange}
                                                                                onBlur={formik.handleBlur}
                                                                                name="country"
                                                                            >
                                                                                <MenuItem value="india">India</MenuItem>
                                                                                <MenuItem value="usa">USA</MenuItem>
                                                                                <MenuItem value="uk">UK</MenuItem>
                                                                                <MenuItem value="canada">Canada</MenuItem>
                                                                            </Select>
                                                                        </FormControl> <br />
                                                                        {formik.touched.country && formik.errors.country ? (
                                                                            <div className='alert-for-required'>{formik.errors.country}</div>
                                                                        ) : null}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                        {/* // Checkbox Group for Type Direct sales , Consultative sales and Request for Proposal */}
                                                                        <FormControl component="fieldset">
                                                                            <FormLabel component="legend">Type</FormLabel>
                                                                            <FormGroup aria-label="position" row value={formik.values.type} sx={{
                                                                                display: 'flex',
                                                                                flexDirection: 'row',
                                                                            }}>
                                                                                <FormControlLabel
                                                                                    value="Direct sales"
                                                                                    control={<Checkbox color="primary" />}
                                                                                    label="Direct sales"
                                                                                    labelPlacement="end"
                                                                                    name="type"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                // value={formik.values.type}
                                                                                />
                                                                                <FormControlLabel
                                                                                    value="Consultative sales"
                                                                                    control={<Checkbox color="primary" />}
                                                                                    label="Consultative sales"
                                                                                    labelPlacement="end"
                                                                                    name="type"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                // value={formik.values.type}
                                                                                />
                                                                                <FormControlLabel
                                                                                    value="Request for Proposal"
                                                                                    control={<Checkbox color="primary" />}
                                                                                    label="Request for Proposal"
                                                                                    labelPlacement="end"
                                                                                    name="type"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    // value={formik.values.type}
                                                                                />
                                                                            </FormGroup>
                                                                        </FormControl>
                                                                        {formik.touched.type && formik.errors.type && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.type}</div>
                                                                        )}

                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                        <TextField
                                                                            id="date"
                                                                            label="Date"
                                                                            type="date"
                                                                            defaultValue="2017-05-24"
                                                                            sx={{ width: '100%' }}
                                                                            InputLabelProps={{
                                                                                shrink: true,
                                                                            }}
                                                                            name="date"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.date}
                                                                        />
                                                                        {formik.touched.date && formik.errors.date && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.date}</div>
                                                                        )}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                        <TextField
                                                                            label="consultant"
                                                                            size='medium'
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            id="consultant"
                                                                            name="consultant"
                                                                            type="text"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.consultant}
                                                                        />

                                                                        {formik.touched.consultant && formik.errors.consultant && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.consultant}</div>
                                                                        )}


                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                        <TextField
                                                                            label="Email"
                                                                            size='medium'
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            id="email"
                                                                            name="email"
                                                                            type="email"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.email}
                                                                        />
                                                                        {formik.touched.email && formik.errors.email && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.email}</div>
                                                                        )}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                    {/* {  radio button for approved and not approved} */}
                                                                        <FormControl component="fieldset" >
                                                                            <FormLabel component="legend">Approved : </FormLabel>
                                                                            <RadioGroup
                                                                                aria-label="approved"
                                                                                name="approved"
                                                                                value={formik.values.approved}
                                                                                onChange={formik.handleChange}
                                                                                onBlur={formik.handleBlur}
                                                                                sx={{
                                                                                    display: 'flex',
                                                                                    flexDirection: 'row',
                                                                                }}
                                                                            >
                                                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                                                            </RadioGroup>
                                                                        </FormControl>
                                                                        {formik.touched.approved && formik.errors.approved && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.approved}</div>
                                                                        )}
                                                                    </div>

                                                                    <div style={{ margin: '10px 0' }} >
                                                                        <TextField
                                                                            label="totalprice"
                                                                            size='medium'
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            id="totalprice"
                                                                            name="totalprice"
                                                                            type="number"
                                                                            onChange={formik.handleChange}
                                                                            onBlur={formik.handleBlur}
                                                                            value={formik.values.totalprice}
                                                                        />
                                                                        {formik.touched.totalprice && formik.errors.totalprice && (
                                                                            <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.totalprice}</div>
                                                                        )}
                                                                    </div>

                                                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
                                                                </form>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </>
                                            </Box>
                                        </Container>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box height={15} />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Client