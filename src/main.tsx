import React from 'react'
import ReactDOM from 'react-dom/client'
import Entry from './Entry.tsx'
import './index.css'
import NavShowContextProvider from './_context/NavShowContextProvider.tsx'
import PageContextProvider from "./_context/PageContextProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PageContextProvider>
        <NavShowContextProvider>
        <Entry />
        </NavShowContextProvider>
      </PageContextProvider>
    
  </React.StrictMode>,
)
