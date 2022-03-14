import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Nav() {
  const history = useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>HOME</Button>
          <Button color="inherit" onClick={() => history.push("/mobile")}>MOBILE</Button>
          <Button color="inherit" onClick={() => history.push("/addmobile")}>ADDMOBILE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
