import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Checkbox, FormControlLabel, List, ListItem } from "@mui/material";

function App() {
  return (
    <Container>
      <Box>
        <List>
          <ListItem>
            <FormControlLabel label="Take out Trash" control={<Checkbox />} />
          </ListItem>
          <ListItem>
            <FormControlLabel
              label="Take out Recycling"
              control={<Checkbox />}
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default App;
