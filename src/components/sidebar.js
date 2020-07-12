import React, {useState}  from 'react';

function Sidebar() {
	const [isShown, setIsShown] = useState(false);

  return (
    <div >
      <p
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <b className="sidebar-symbol"> * </b>
      </p>
      {isShown && (
        <div className="sidebar-title">
          <b> About. </b>
        </div>

      )}
      <p
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <b> + </b>
      </p>
      {isShown && (
        <div className="sidebar-title">
          <b> Resume. </b>
        </div>

      )}
    </div>
  );
}

export default Sidebar;