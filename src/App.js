import logo from './logo.svg';
import './App.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState, useEffect } from 'react';

import useDrivePicker from 'react-google-drive-picker'

function App() {
  const [options, setOptions] = useState("GoogleDrive")
  const [openPicker, data, authResponse] = useDrivePicker();
  useEffect(() => {
    if (data) {
      data.docs.map(i => console.log(i.name))
    }
  }, [data])
  const upload = () => {
    if (options == "GoogleDrive") {
      openPicker({
        clientId: "129702369230-8okruh768mh9chbg94gb16rf04tg9aph.apps.googleusercontent.com",
        developerKey: "AIzaSyANlDhlAqaXVje-wFKGxIYanTr23LP92pk",
        viewId: "DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: false,
      })
    }
    if (options == "DropBox") {

    }
  }

  return (
    <div className="App">
      <Stack className='stack' spacing={4}>
        <FormControl>
          <FormLabel>Upload File From</FormLabel>
          <RadioGroup
            defaultValue="GoogleDrive"
          >
            <FormControlLabel onClick={() => setOptions("GoogleDrive")} value="GoogleDrive" control={<Radio />} label="GoogleDrive" />
            <FormControlLabel onClick={() => setOptions("DropBox")} value="DropBox" control={<Radio />} label="DropBox" />
          </RadioGroup>
        </FormControl>

        <Button onClick={upload} variant="contained" size="smalls">Upload</Button>
      </Stack>
    </div>
  );
}

export default App;
