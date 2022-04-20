import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useState, useEffect, useRef } from 'react';

import useDrivePicker from 'react-google-drive-picker'
import DropboxChooser from 'react-dropbox-chooser';

function App() {
  const [dropboxFile, setDropboxFile] = useState(null)
  const [Text, setText] = useState("")
  const [From, setFrom] = useState("")
  const [options, setOptions] = useState("GoogleDrive")
  const [openPicker, data, authResponse] = useDrivePicker();
  const text = useRef(null);
  const type = useRef(null);
  useEffect(() => {
    if (data) {
      data.docs.map(i => setText(i.name))
      setFrom("Google")
    }
  }, [data])



  const upload = () => {
    setOptions("GoogleDrive")
    openPicker({
      clientId: "129702369230-02801vg2per99phiua9em09vu7h86a7v.apps.googleusercontent.com",
      developerKey: "AIzaSyBGxghFEnNt0zYIn5PKyD_mdHSNJNX76bk",
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
          success={files => {
            setText(files[0].name)
            setFrom("DropBox")
          }}
          cancel={() => this.onCancel()}
          multiselect={false}
        >
          <Button onClick={() => setOptions("DropBox")} variant="contained" size="smalls">Upload from DropBox</Button>
        </DropboxChooser>
        <Typography ref={text} className='display_name' variant="h6" component="div">
          Selected file name : {Text}
        </Typography>
        <Typography ref={type} className='display_type' variant="h6" component="div">
          Selected file from : {From}
        </Typography>
      </Stack>

    </div>
  );
}

export default App;
