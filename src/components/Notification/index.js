// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      {children}
      <GrFormClose className="close" color="#0f172a" height="30" width="30" />
    </div>
  )
}
export default Notification
