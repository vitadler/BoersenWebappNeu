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

const Item4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const Item5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const Item6 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 5px dotted blue;
`

const testDaten = [
  {
    name: "adidas",
    kurs: "166,64",
    veraenderung: "-1.12%",
    kgv: "12",
    nettomarge: "6%",
    marktkapitalisierung: "30 Mrd. EUR"
  },
  {    
    name: "airbus",
    kurs: "166,65",
    veraenderung: "-1.13%",
    kgv: "13",
    nettomarge: "7%",
    marktkapitalisierung: "40 Mrd. EUR"
  },
  {
    name: "allianz",
    kurs: "166,66",
    veraenderung: "-1.14%",
    kgv: "14",
    nettomarge: "8%",
    marktkapitalisierung: "50 Mrd. EUR"
  }
]

const Content = props => {
  return (
    <Box sx={{ flexGrow: 1, margin: 2 }} style={{ outline: "5px dotted green"}}>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={1} display={"block"}>
          <Item1>
            Item1
          </Item1>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={2} display={"block"}>
          <Item2>
            Item2
          </Item2>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={3} display={"block"}>
          <Item3>
            Item3
          </Item3>
        </Grid>
        <Grid item sm={2} md={2} lg={2} xl={2} key={4} display={{ xs: "none", sm: "block" }}>
          <Item4>
            Item4
          </Item4>
        </Grid>
        <Grid item sm={2} md={2} lg={2} xl={2} key={5} display={{ xs: "none", sm: "block" }}>
          <Item5>
            Item5
          </Item5>
        </Grid>
        <Grid item sm={2} md={2} lg={2} xl={2} key={6} display={{ xs: "none", sm: "block" }}>
          <Item6>
            Item6
          </Item6>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content;