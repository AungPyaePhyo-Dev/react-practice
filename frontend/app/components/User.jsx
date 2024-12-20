'use client';

function AdminUser(){
    return (<div>
        Admin User
    </div>);
}

function NormalUser(){
    return (<div>
        Normal User
    </div>);
}

export default function User({admin}) {
    let comp;
    if (admin) {
        comp = <AdminUser />
    }else {
        comp = <NormalUser />
    }
    // if(admin) {
    //     return <AdminUser />;
    // }else {
    //     return <NormalUser />;
    // }
    return (<div>
        {/* { admin ? <AdminUser /> : <NormalUser />} */}
        {comp}
    </div>);
}