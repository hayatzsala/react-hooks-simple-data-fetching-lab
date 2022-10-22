import { useEffect, useState } from "react";

// create your App component here
export default function App(){
    const [isLoaded,setIsLoaded] = useState(false);
    const [imageUrl,setImageUrl] = useState();
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setImageUrl(data.message);
            setIsLoaded(true);
        })
    },[])
    if (!isLoaded ) return <p>Loading...</p>
    return (
        
        <img src={imageUrl} alt="A Random Dog"></img>
    );
}