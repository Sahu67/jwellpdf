import { createContext, useEffect, useReducer } from "react";
import { instanceData } from "../constants/sampleData";

export const MyContext = createContext({
    filesList: [],
    fetchTheCurrentInstance: (_id) => {}
});

const filesListReducer = (currentState, { type, payload }) => {
    let newFilesList = currentState;
    if(type === 'DUMP_ALL_FILES_DATA') {
        newFilesList = payload;
    }
    return newFilesList;
}

const ContextProvider = ({ children }) => {
    const [ filesList, dispatchFilesList ] = useReducer(filesListReducer, []);

    const fetchTheCurrentInstance = (_id) => {
        if(!filesList || filesList?.length === 0) return {};
        return filesList?.find((file) => file._id === _id) ?? {};
    }

    useEffect(() => {

        dispatchFilesList({ type: 'DUMP_ALL_FILES_DATA', payload: instanceData });

    }, []);

    return (
        <MyContext.Provider value={{ filesList, fetchTheCurrentInstance }}>
            {children}
        </MyContext.Provider>
    );
}

export default ContextProvider;