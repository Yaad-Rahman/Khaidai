import React from 'react';

class MenuList extends React.Component {
    render() {
        return(
            <div className="MenuList">
                <div id="margin">
                    <img src="fastFood.png" />
                    <h2>Breakfast</h2>
                </div>
                <div id="margin">
                    <img src="dinner.png" />
                    <h2>Lunch</h2>
                </div>
                <div id="margin">
                    <img src="dinner.png" />
                    <h2>Dinner</h2>
                </div>
                <div>
                    <img src="beverage.png" />
                    <h2>beverage</h2>
                </div>
            </div>
        );
    }
}

export default MenuList;