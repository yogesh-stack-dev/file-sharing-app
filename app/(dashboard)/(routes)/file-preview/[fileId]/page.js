"use client"
import React, { useEffect } from 'react'

function FilePreview({ params }) {
    useEffect(() =>{
            console.log(params?.fileId);
        }
    )
  return (
    <div>FilePreview</div>
  )
}

export default FilePreview