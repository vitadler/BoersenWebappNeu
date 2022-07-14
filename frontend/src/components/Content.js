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



const TabellenUeberschrift = () => {
  return (
    <Grid container spacing={1}>
    <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={1} display={"block"}>
      <Item1>
        Name
      </Item1>
    </Grid>
    <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={2} display={"block"}>
      <Item2>
        Kurs
      </Item2>
    </Grid>
    <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={3} display={"block"}>
      <Item3>
        Veränderung
      </Item3>
    </Grid>
    <Grid item sm={2} md={2} lg={2} xl={2} key={4} display={{ xs: "none", sm: "block" }}>
      <Item4>
        KGV
      </Item4>
    </Grid>
    <Grid item sm={2} md={2} lg={2} xl={2} key={5} display={{ xs: "none", sm: "block" }}>
      <Item5>
        Nettomarge
      </Item5>
    </Grid>
    <Grid item sm={2} md={2} lg={2} xl={2} key={6} display={{ xs: "none", sm: "block" }}>
      <Item6>
        Marktkapitalisierung
      </Item6>
    </Grid>
  </Grid>
  )
}

const Content = ({stockData}) => {
  return (
    <Box sx={{ flexGrow: 1, margin: 2 }} style={{ outline: "5px dotted green"}}>
      <TabellenUeberschrift />
      {stockData.map((e, i) => (
        <Grid container spacing={1} key={i} >
          <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={e.name+i.toString()} display={"block"}>
            <Item1>
              {e.name}
            </Item1>
          </Grid>
          <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={e.kurs+i.toString()} display={"block"}>
            <Item2>
              {e.kurs}
            </Item2>
          </Grid>
          <Grid item xs={4} sm={2} md={2} lg={2} xl={2} key={e.veraenderung+i.toString()} display={"block"}>
            <Item3>
              {e.veraenderung}
            </Item3>
          </Grid>
          <Grid item sm={2} md={2} lg={2} xl={2} key={e.kgv+i.toString()} display={{ xs: "none", sm: "block" }}>
            <Item4>
              {e.kgv}
            </Item4>
          </Grid>
          <Grid item sm={2} md={2} lg={2} xl={2} key={e.nettomarge+i.toString()} display={{ xs: "none", sm: "block" }}>
            <Item5>
              {e.nettomarge}
            </Item5>
          </Grid>
          <Grid item sm={2} md={2} lg={2} xl={2} key={e.marktkapitalisierung+i.toString()} display={{ xs: "none", sm: "block" }}>
            <Item6>
              {e.marktkapitalisierung}
            </Item6>
          </Grid>
        </Grid>
      ))}

    </Box>
  )
}

export default Content;