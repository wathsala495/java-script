const fileBrowseButton=document.querySelector('.file-browse-button');
const fileList=document.querySelector('.file-list')
const fileBrowseInput =document.querySelector('.file-browser-input');
const fileUploadBox=document.querySelector('.file-upload-box')

const createFileItemHTML=(file,uniqueIdentifier)=>{
             const {name,size}=file;
             const extension=name.split(".").pop()
           //const extension = name && typeof name === 'string' ? name.split(".").pop() : '';
           console.log(name,extension,size)
    return  ` <li class="file-item id="file-item-${uniqueIdentifier}">
        <div class="file-extenstion">${extension}</div>  
        <div class="file-content-wrapper">
            <div class="file-content">
                <div class="file-details">
                    <h5 class="file-name">${name}</h5>
                    <div class="file-info">
                        <small class="file-size">4 MB/${size} </small>
                        <small class="file-divider">.</small>
                        <small class="file-status">Uploading</small>

                    </div>
                </div>
                <button class="cancel-button">
                    <!-- <i class="bx bx-x"></i> -->
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="file-progress-bar">
                <div class="file-progress">

                </div>

            </div>
        </div>
        </li>`
}

const handleFileUploading=(file,uniqueIdentifier)=>{
    const xhr =new XMLHttpRequest();
    const formData = new FormData();
    formData.append("file",file);
    //Adding progress event listner to the ajax requuest
    xhr.upload.addEventListener("progress",(e)=>{
        const fileProgress=document.querySelector(`#file-item-${uniqueIdentifier} .file-progress`)
        const fileSize=document.querySelector(`#file-item-${uniqueIdentifier} .file-size`)

        const progress =Math.round((e.loaded/e.total)*100)
        fileProgress.style.width=`${progress}%`;
        fileSize.innerText=`${e.loaded/e}/${e.total}`;

        console.log(e)
    })
  //Opening connetion to the server API endpoint "api.php" and sending the form data
    xhr.open("POST","api.php",true);
    xhr.send(formData)
}

const handleSelectedFiles=([...files])=>{
    if(files.length===0) return //check if no files are selected

    files.forEach((file,index)=>{
        const uniqueIdentifier = Data.now()+index
       // createFileItemHTML(file,index)
       const fileItemHTML= createFileItemHTML(file,uniqueIdentifier)
       //Insert each file into file list
        fileList.insertAdjacentHTML('afterbegin',fileItemHTML)

        handleFileUploading(file,uniqueIdentifier)
    })
   // console.log("files:"+e.target.files)

}

fileBrowseButton.addEventListener("click",()=>fileBrowseInput.click())
fileBrowseInput.addEventListener("change",(e)=>handleSelectedFiles(e.target.files))

fileUploadBox.addEventListener('drop', (e)=> {
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files)
    fileUploadBox.classList.remove('active')
    fileUploadBox.querySelector('.file-instruction').innerHTML="Drag files here or"

    console.log("dragover")
});
fileUploadBox.addEventListener('dragover', (e)=> {
    e.preventDefault();
    fileUploadBox.classList.add('active')
    fileUploadBox.querySelector('.file-instruction').innerHTML="Release to upload or"

    console.log("dragover")
});

fileUploadBox.addEventListener('dragleave',(e)=>{
    e.preventDefault();
    fileUploadBox.classList.remove('active')
    fileUploadBox.querySelector('.file-instruction').innerHTML="Drag files here or"
    console.log("dragleave")
})

fileUploadBox.addEventListener('drop',(e)=>{
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files)
    fileUploadBox.classList.remove('active')
    fileUploadBox.querySelector('.file-instruction').innerHTML="Drag files here or"
    console.log("dragleave")
})




