"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '/firebaseConfig.js'
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from  'firebase/storage'
import { setDoc,getFirestore,doc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '/app/_utils/GenerateRandomString.js'
import { useRouter } from 'next/navigation'

function Upload({}){ 
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const router = useRouter();
  const storage = getStorage(app)
  const db = getFirestore(app)
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState();
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type 
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL);
        }).then(resp => {
          console.log(resp)
        })
      },
    )
  }
  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + generateRandomString()

    });
    setFileDocId(docId);
  }

  useEffect(() => {

  }, [progress == 100]);

  useEffect(() => {
    uploadCompleted && setTimeout(() => {
      setUploadCompleted(false);
      router.push('/file-preview/'+fileDocId)
    },2000)
  },[uploadCompleted==true])

  return (
    <div className=' p-5 px-8 md:px-28'>
      <h2 className=' text-[20px] text-center m-5'>
        Start <strong className=' text-primary'>Uploading</strong> Files and <strong className=' text-primary'>Share</strong> it</h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  )
}

export default Upload