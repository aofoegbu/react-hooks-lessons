import react, {useContext, useState} from "react";
import SharedContext from "./context2";

const App = () => {
    const [blog, setBlog] = useState({
        React: {
            post: 'Learn React hooks',
            author: 'Ogelo'
        },
        GraphQL: {
            post: 'Learn GraphQL Mutations',
            author: 'Ogelo'
        }
    });
    return (
        <SharedContext.Provider value={[blog, setBlog]}>
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
    );
}

const obj = {
    React: {
        post: 'updated',
        author: 'Another Ogelo'
    },
    GraphQL: {
        post: 'updated',
        author: 'Another Ogelo'
    }
};

const GChild1 = () => {
    const [blog, setBlog] = useContext(SharedContext);
    return (
        <h1>
            <h3>React Blog Details</h3>
            <p>Topic: {blog.React.post}</p>
            <p>Author: {blog.React.author}</p>
            <button onClick={() => setBlog(obj)}>Click here</button>
        </h1>
    )
}
const GChild2 = () => {
    return (
        <p>hi</p>
        );
}

export default App;