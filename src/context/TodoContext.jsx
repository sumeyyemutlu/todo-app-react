import React, {createContext, useContext, useReducer} from "react";

 export const TodoLayerContext = useContext();
 //createContext context oluşturmamıza yarar
 //useContext oluşturduğumuz contexti kulllanmamıza yarar

 export const TodoLayer = ({initialState, reducer, children}) => (
     <TodoLayerContext.Provider value={useReducer(reducer, initialState)}> 
     {/* burada bir Provider oluşturduk*/}
          {children}
     </TodoLayerContext.Provider>
    
 )
