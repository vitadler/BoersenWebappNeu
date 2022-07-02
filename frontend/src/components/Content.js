import { Box, Grid, Paper } from "@mui/material";

import styled from 'styled-components';

const Item1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const Item2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const Item3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const Content = props => {
  return (
    <Box sx={{ flexGrow: 1, margin: 2 }} style={{ outline: "5px dotted green"}}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={1}>
          <Item1>
            Item1
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={2}>
          <Item2>
            Item2
          </Item2>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={3}>
          <Item3>
            Item3
          </Item3>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content;