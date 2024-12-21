"use client";
export default function ContentMenuEventDemo(event) {
    const onContextMenuClick = (e) => {    
        console.log("context menu clicked: ");
        e.preventDefault();
    }

    return (<div onContextMenu={onContextMenuClick}>
            Right click over me
    </div>)
}