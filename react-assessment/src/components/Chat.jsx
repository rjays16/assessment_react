import React, {useContext} from "react";
import Cam from "../img/videocall.png";
import Add from "../img/add_people.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import {ChatContext} from "../context/ChatContext";
const Chat = () => {

    const { data } = useContext(ChatContext);
    return(
        <div className="chat">
            <div className="chatInfo">
                <span className="display-4">{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat