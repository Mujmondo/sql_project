import { useEffect, useState } from "react";
import axios from 'axios';

const Books = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    const fetchBooks = async () => {
        try{
            const res = await axios.get('http://localhost:4000/books')
            setData(res.data)
        } catch(err){
            console.log(err);
        }
    }
    fetchBooks()
    }, []);
    
    return ( 
        <>
        {data && (
        <div>
        {data.map(d => (
            <div key={d.ISBN}>
                <h1>{d.title}</h1>
                <p>{d.ISBN}</p>
                <p>{d.category}</p>
                <p>{d.publicationYear}</p>

            </div>  
        ))}
        
        </div>)}  
        </>
     );
}
 
export default Books;