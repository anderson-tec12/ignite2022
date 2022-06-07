import { Header } from './components/Header'
import {Post} from './Post'

import styles from './App.module.css'
import {Sidebar} from './components/Sidebar'

import './global.css'
export function App() {

  return (
   <div>
     <Header />
     
     
     <div className={styles.wrapper}>
        <Sidebar />
        <main>

      <Post author="Anderson" content="teste de propriedades"/>
      <Post author="Anderson" content="teste de propriedades"/>
        </main>
     </div>
    
   </div>
  )
}
