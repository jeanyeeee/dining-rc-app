import React, {useState, useEffect} from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { View, Image, StyleSheet } from 'react-native';
// Get a reference to the storage service, which is used to create references in your storage bucket

const GetImage = (props) => {
    const [url, setUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            // Create a storage reference from our storage service
            // Will be replaced with the extracted path later
            const storageRef = ref(storage, props.name);
            await getDownloadURL(storageRef).then((ref) => {setUrl(ref)});

        }
        if (url ==  undefined) {func()};
    }, []);

    return(
        <View>
            <Image 
            style = {styles.image} 
            source= {{uri:url}}/>
        </View>
    );
}

export default GetImage;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
})