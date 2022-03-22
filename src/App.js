import styles from './App.module.css'
import MainHeader from './components/layout/MainHeader'
import MainFooter from './components/layout/MainFooter'
import Button from './components/ui/Button'
import MyComponents from './components/MyComponents/MyComponents'

function App() {
  return (
    <main>
      <MainHeader />
      <MyComponents />
      <MainFooter />
    </main>
  )
}

export default App
