import './Sidebar.css'
import { assets } from '../../assets/assets';

const Sidebar = () => {
    return (
        // Side bar
        <div className='sidebar'>
            {/* Menu bar */}
            <div className="top">
                <img className='menu' src={assets.menu_icon} alt="" />
                {/* New Chat */}
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
                {/* Recent Search */}
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {/* Recent Entry */}
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>What is React ...</p>
                    </div>
                </div>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
};

export default Sidebar;