import { useState } from "react";
import "./CustomTab.css";
import classNames from "classnames";

function TabHeader({onClick, header, activeTab}) {

    const tabHeaderClass  = classNames({
        "custom-tab-header": true,
        "active": activeTab
    })
    // let className = "custom-tab-header";
    // if(activeTab) {
    //     className += " active";
    // }
    return <span onClick={onClick} className={tabHeaderClass}>
        {header}
    </span>
}
export default function CustomTab({headers, children}) {
    const [activeTab, setActiveTab] = useState(0);

    console.log('Headers', headers)

    const tabHeaderClick = (index) => {
        setActiveTab(index);
    }

    return (<div>
            {
                headers.map((header, index) => <TabHeader  
                            key={index}
                            activeTab={activeTab == index}
                            onClick={() => tabHeaderClick(index)}
                            header={header}
                        ></TabHeader>)}
        <div className="custom-tab-body">
            {children[activeTab]}
        </div>
    </div>)
}