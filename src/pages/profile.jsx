import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

// import jsPDF from "jspdf";

// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react


export default function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: "",
    linkedin: "",
  });

  useEffect(() => {
    async function handleProfile() {
      try {
        const res = await fetch("https://api.example.com/profile"); // Replace with your API endpoint
        const profile = await res.json();
        setFormData({
          fullName: profile.name || "",
          email: profile.email || "",
          password: profile.password || "",
          skills: profile.skills || "",
          linkedin: profile.linkedin || "",
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    handleProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

  return (
    <div className={styles.container}>
      <form className={styles.aroundform} onSubmit={handleSubmit}>
        <div className={styles.profilepicheart}>
          <div className={styles.profilepic}>
            <img src="https://via.placeholder.com/100" alt="Profile Pic" />
          </div>
          <div className={styles.likes}>12</div>
        </div>
        <div className={styles.yeyeye}>
          <div className={styles.formgroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
            //   placeholder="Enter your full name"
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
            //   placeholder="Enter your email"
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
            //   placeholder="Enter your password"
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
            //   placeholder="Enter your skills"
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
            //   placeholder="Enter your linkedIn"
            />
          </div>
          <div className={styles.buttonbox}>
            <Button className={styles.uploadbutton}
              component="label"
              role={undefined}
              variant="contained"
            //   tabIndex={-1}
              startIcon={<DownloadIcon />}
            >
              UPLOAD FILE
              <VisuallyHiddenInput type="file" />
            </Button>
            
            <button className={styles.savebutton} type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

