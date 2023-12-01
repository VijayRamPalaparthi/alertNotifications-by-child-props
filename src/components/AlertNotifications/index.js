// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="body-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle color="#2dca73" height="30" width="30" />
      <div className="notification">
        <h1 className="state1">Success</h1>
        <p className="msg"> You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill color="#ff0b37" height="30" width="30" />
      <div className="notification">
        <h1 className="state2">Error</h1>
        <p className="msg">
          {' '}
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning color="#ffb800" height="30" width="30" />
      <div className="notification">
        <h1 className="state3">Warning</h1>
        <p className="msg">
          {' '}
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo color="#0f81e0" height="30" width="30" />
      <div className="notification">
        <h1 className="state4">Info</h1>
        <p className="msg"> Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
