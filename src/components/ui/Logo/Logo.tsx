import { Boxes } from 'lucide-react'
import styles from './Logo.module.css'
function Logo() {
  return (
    <div className={styles.container}>
        <Boxes size={32} />
        <p>BuildTogether</p>
    </div>
  )
}

export default Logo