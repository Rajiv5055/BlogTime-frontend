import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import SideBar from '../components/SideBar';
import axios from 'axios';

function Profile() {
  const location = useLocation();
  const [post, setPost] = useState({});
  const path = location.pathname.split("/")[2];
  console.log(path);
   const [sidebar, setSideBar] = useState({
    title: "About",
    fullName: "",
    about: "",
    profilePhoto: "",
    facebook: "",
    instagram: "",
    github: "",
    linkedin: ""
  });
    useEffect(() => {
    const getPost = async () => {
        const res = await axios.get("https://blogtimeserver.herokuapp.com/api/post/" + path);
        setPost(res.data);

        const userData = await axios.get(`https://blogtimeserver.herokuapp.com/api/auth/${res.data.username}`);
        const user = userData.data.user;
        console.log(userData);
        setSideBar({
          title: 'About',
          fullName: user.fullName,
          about: user.about,
          profilePhoto: user.profilePhoto,
          github: user.github,
          instagram: user.instagram,
          facebook: user.facebook,
          linkedin: user.linkedin
        })
    }
    getPost();
  }, [path]);

  return(
    <div>
     <h1>Name</h1>
     <SideBar sidebar={sidebar} />
    </div>
  );
}

export default Profile;