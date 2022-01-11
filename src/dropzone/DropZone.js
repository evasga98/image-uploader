import React, { useState } from 'react';
import './DropZone.css';

const DropZone = () => {
    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add uploading  icon
            } else {
                // add a new property called invalid
                // add to the same array so we can display the name of the file
                // set error message
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    return (
        <>
        <div className="container">
            <div className="drop-container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
            
            <div className="drop-message">
                <div className="upload-icon"></div>
                Drag & Drop your image here
            </div>
            </div>
        </div>
        </>
    )
}
export default DropZone;