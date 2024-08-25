// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import LoadingPage from './Page/LoadingPage.tsx'
import NotionPage from './Page/NotionPage.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* <App /> */}
    <LoadingPage/>
    <NotionPage/>
 </StrictMode>,
)
