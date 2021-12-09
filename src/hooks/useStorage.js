import {useEffect, useState} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../firebase/config'

const useStorage = (file) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null);
    

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap)=> {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);
        }, err => {
            seterror(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add({url, createdAt: timestamp()})
            seturl(url)
        })
    },[file]);


    return {progress, url, error}
}

export default useStorage
