import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

const App = () => {
    // const dispatch = useAppDispatch()
    // const {error, loading, users} = useAppSelector(state => state.userReducer)
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className='App'>
            {/*{loading && <h1>Идет загрузка...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
            <PostContainer/>
            <PostContainer2/>
        </div>
    );
};

export default App;