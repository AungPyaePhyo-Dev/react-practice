import { useState } from "react";
import "./CustomTab.css";

export default function CustomTab({headers, children}) {
    const [activeTab, setActiveTab] = useState(0);

    const tabHeaderClick = (index) => {
        console.log('clicker index: ', index);
        setActiveTab(index);
    }
    return (<div>
        <div>
            {
                headers.map((header, index) => <span className="custom-tab-header" key={index}
                onClick={() => tabHeaderClick(index)}
            >{header}</span>)}
        </div>
        <div className="custom-tab-body">
            {children[activeTab]}
        </div>
    </div>)
}