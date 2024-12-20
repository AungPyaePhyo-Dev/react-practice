import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "./components/HelloWorld"; // default import
import {Child} from "./components/HelloWorld"; // name import
import Profile from "./components/Profile";
import ContainerDemo from "./components/ContainerDemo";
import Border from "./components/Border";
import User from "./components/User";
import ListDemo from "./components/ListDemo";
import EventDemo from "./components/EventDemo";

export default function Home() {
  let size = {
    width: 120,
    height: 50
  }

  let profile1 = {
    url : "https://randomuser.me/api/portraits/women/64.jpg",
    name: "Amara"
  }

  let profile2 = {
    url: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Nawzar"
  };

  let items = [
    {
      id: 1,
      title: "Todo 1"
    },
    {
      id: 2,
      title: "Todo 2"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
          {/* Welcome to Next.js
          <Profile profile={profile1}/>
          <Profile profile={profile2}/> */}
          {/* <ContainerDemo {...size} /> */}
          {/* <Border>
            <Profile profile={profile1}/>
          </Border>
          <Border>
            <h1>Hello World</h1>
          </Border> */}

          <User admin />
          {/* <User admin={false} /> */}
          {/* <ListDemo  todos={items}/> */}
          <EventDemo />
      </main>
    </div>
  );
}
