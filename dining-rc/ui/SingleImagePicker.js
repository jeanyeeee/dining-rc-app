import React, {useState, useEffect} from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { View, Image, StyleSheet } from 'react-native';
// Get a reference to the storage service, which is used to create references in your storage bucket

const GetSingleImage = (props) => {
    const [url, setUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            // Create a storage reference from our storage service
            // Will be replaced with the extracted path later
            const storageRef = ref(storage, props.name);
            await getDownloadURL(storageRef).then((ref) => {setUrl(ref)});

        }
        func();
    }, []);

    return(
        <View>
            <Image 
            style = {styles.image}
            source= {{uri:url}}/>
        </View>
    );
}

export default GetSingleImage;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})
