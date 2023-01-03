import React from "react"
import "./PasswordListItem.less"

const PasswordListItem = ({ entry }) => {
  return (
    <div className="passwordListItem">
        <img src={entry.url + "/favicon.ico"} alt="favicon" />
        <div className="passwordListItem-info">
            <div className="passwordListItem-infoURL">{entry.url}</div>
            <div className="passwordListItem-infoUsername">{entry.username}</div>
        </div>
    </div>
  )
}

export default PasswordListItem