import { Grid, GridItem, } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import { Show } from "@chakra-ui/react";


function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above= >
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      <Show />
      <GridItem area="main" bg="didgerblue">
        Main
      </GridItem>
    </Grid>
    );
}

export default App;
