import react, { useState, useContext, useEffect, useReucer} from "react";
import SharedContext from "./context";

const App = () => {
    const [blog, setBlog] = useState({
        React: {
            post: 'Learn useContext hooks',
            author: 'Ogelo'
        },
        GraphQL: {
            post: 'Learn GraphQL Mutations',
            author: 'Ogelo'
        }
    });

    return (
        <SharedContext.Provider value={[blog, setBlog]} >
            <Child />
        </SharedContext.Provider>
    )
}

const Child = () => {
    return (
        <>
        <GChild1 />
        <GChild2 />
        </> 
    )
}

const GChild1 = () => {
    const [blog, setBlog] = useContext(SharedContext);
    return <h1>
            <h3>React Blog Details</h3>
            <p>Topic: {blogDetails.React.post}</p>
            <p>Author: {blogDetails.React.author}</p>
            <button onClick={() => setBlog({})}>Click Here</button>
        </h1>
}
const GChild2 = () => {
    const blogDetails = useContext(SharedContext);
    return <h1>
            <h3>React Blog Details</h3>
            <p>Topic: {blogDetails.React.post}</p>
            <p>Author: {blogDetails.React.author}</p>
        </h1>
}
export default App;