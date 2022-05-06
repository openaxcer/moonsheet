import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CustomizedTables from '../section/table';
import Grid from '@mui/material/Grid';


import bgimage from '../images/background.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${bgimage})`,
        height: '1000px'
    }
};

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // backgroundImage: `url(${bgimage})`
}));

export default function BasicStack() {
    return (
        <Paper style={styles.paperContainer} >

            <Box sx={{
                width: '100%',
                height: '100%',
                // backgroundImage: `url(${bgimage})`
                // mt: 5,
                alignItems: 'center'


            }}>
                <Stack spacing={2}
                    sx={{
                        pt: 15
                    }}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid xs={8}>
                            <CustomizedTables />
                        </Grid>
                        {/* <Grid xs={4}>
                        <CustomizedTables />
                    </Grid> */}

                    </Grid>

                </Stack>
            </Box>
        </Paper>

    );
}