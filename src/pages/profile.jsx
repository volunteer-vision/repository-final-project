import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from "next/router";

// import jsPDF from "jspdf";

// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

export default function Profile() {
  const router = useRouter()
  const [updateUser, setUser] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: "",
    linkedin: "",
  });

  useEffect(() => {
    async function handleProfile() {
      const token = localStorage.getItem("token")
      if(token === null) {
        router.push("/login")
        }
      try {
        const res = await fetch(`/api/${token}`); // Replace with your API endpoint
        if (res.status === 200 ) {
          const profile = await res.json();
          console.log(profile)
          setFormData({
          fullName: profile[0]?.fullName || "",
          email: profile[0]?.email || "",
          password: profile[0]?.password || "",
          skills: profile[0]?.skills || "",
          linkedin: profile[0]?.linkedin || "",
        });}
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    handleProfile();
  }, [updateUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const  handleSubmit =  async (e) => {
    const id = localStorage.getItem("token")
    e.preventDefault();
    const options = {
        method:"POST", 
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({
          id: id,
          ...formData
        })
      }
    const res = await fetch(`/api/updateUser`, options)
    
    if(res.status === 200) {
      const updatedProfile = await res.json()
      setFormData(updatedProfile)
      setUser(!updateUser)
    }
};

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Full Name: ${formData.fullName}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Password: ${formData.password}`, 10, 30);
    doc.text(`Skills: ${formData.skills}`, 10, 40);
    doc.text(`LinkedIn: ${formData.linkedin}`, 10, 50);
    doc.save("profile.pdf");
  };

  const logOut = () => {
    localStorage.removeItem("token")
    router.push("/login")
   }
  return (
    <div className={styles.container}>
      <form className={styles.aroundform} onSubmit={handleSubmit}>
        <div className={styles.profilepicheart}>
          <div className={styles.profilepic}>
            <img src="https://via.placeholder.com/120" alt="Profile Pic" />
          </div>
          <div className={styles.likes}>12</div>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Enter your skills"
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Enter your LinkedIn"
          />
        </div>
        
        <div className={styles.buttonbox}>
          <button className={styles.logOutButton} onClick={() => logOut()}>Log Out</button>
           <Button className={styles.uploadbutton}
            component="label"
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            UPLOAD FILE
            <VisuallyHiddenInput type="file" />
          </Button>
          <button className={styles.savebutton} type="submit" >
            Save
          </button>
         
        </div>
      </form>
    </div>
  );
}
