import axios from "axios";
import { useState } from "react";
const UploadTask = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]);
    }

    const onSubmit = async e => {
        console.log('aa');
        e.preventDefault();
        
        const formData = new FormData();
        formData.append(file, file);

        try {
            const res = await axios.post('http://localhost:5000/manager/uploadtask', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ProgressEvent => {
                    setUploadPercentage(parseInt(Math.round((ProgressEvent * 100) / ProgressEvent.total)));

                    
                }
            });
            console.log(res.data);
            const { fileName, filePath } = res.data;
            console.log(res.data);
            setUploadedFile({ fileName, filePath });

            setMessage('File uploaded');
        }
        catch (err) {
            console.log(err);
            if (err.response.status === 500) {
                setMessage('Something is wrong with the server');
            }
            else {
                setMessage(err.response.data.msg);
            }
            


        }
        console.log(message);
    };
    return (
        <div>
            <form method="post">
                <div class="alert alert-info alert-dismissible fade show" role="alert">
                    <p> {message ? message : null}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="mb-3">
                    <label for="formFile" className="form-label">Attachments</label>
                    <input className="form-control" type="file" id="formFile" onChange={onChange} />
                </div>
                <div className='progress'>
                    <div
                        className='progress-bar progress-bar-striped bg-success'
                        role='progressbar'
                        style={{ width: `${uploadPercentage}%` }}
                    >
                        {uploadPercentage}%
                    </div>
                </div>

                <input type="button" value="upload" onClick={onSubmit} />
            </form>
        </div>
    );
}

export default UploadTask;