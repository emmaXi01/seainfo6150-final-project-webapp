import React from "react";
import LinkList from '../LinksList/LinksList.jsx';
import styles from "./Footer.module.css";

const Footer = () => {
  const basicInfo = ["About", "Leadership", "Careers", "Catalog"];
  const community = ["Learners", "Blog", "Tech Blog"];
  const more = ["Terms", "Privacy", "Help", "Contact"];

  return (
    <div className={styles.footerBlock}>
      <div className={styles.listContainer}>
        <div className={styles.title}>OnlineEdu</div>
        <LinkList links={basicInfo}/>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.title}>Community</div>
        <LinkList links={community}/>
      </div>    
      <div className={styles.listContainer}>
        <div className={styles.title}>More</div>
        <LinkList links={more}/>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.title}>Others</div>
      </div>      
    </div>
  );
};

export default Footer;