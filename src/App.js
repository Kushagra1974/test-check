import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useState, useEffect, useRef } from 'react';

import useDrivePicker from 'react-google-drive-picker'
import DropboxChooser from 'react-dropbox-chooser';

function App() {
  const [options, setOptions] = useState("GoogleDrive")
  const [openPicker, data, authResponse] = useDrivePicker();
  const text = useRef(null);
  const type = useRef(null);
  useEffect(() => {
    if (data) {
      data.docs.map(i => text.current.innerText = i.name)
      if (options === "GoogleDrive") type.current.innerText += " GoogleDrive"
      if (options === "DropBox") type.current.innerText += " DropBox"
    }
  }, [data])
  const upload = () => {
    setOptions("GoogleDrive")
    openPicker({
      clientId: "129702369230-k8v4kh0qo82btlo7tqgqnv038rlcfq6u.apps.googleusercontent.com",
      developerKey: "AIzaSyANlDhlAqaXVje-wFKGxIYanTr23LP92pk",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
    })
  }

  return (
    <div className="App">
      <Stack className='stack' spacing={4}>
        <Button onClick={upload} variant="contained" size="smalls">Upload from google drive</Button>
        <DropboxChooser
          appKey={'vjj8apqlutl56t8'}
          success={files => this.onSuccess(files)}
          cancel={() => this.onCancel()}
          multiselect={false}
          extensions={['.mp4']}
        >
          <Button onClick={() => setOptions("DropBox")} variant="contained" size="smalls">Upload from DropBox</Button>
        </DropboxChooser>
        <Typography ref={text} className='display_name' variant="h6" component="div">
          Selected file name :
        </Typography>
        <Typography ref={type} className='display_type' variant="h6" component="div">
          Selected file from :
        </Typography>
      </Stack>

    </div>
  );
}

export default App;
