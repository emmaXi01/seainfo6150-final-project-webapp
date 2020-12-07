import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import Home from "./Home/HomePage.jsx";
import Categories from "./Categories/Categories.jsx";
import CoursesList from "./CoursesList/CoursesList.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Login from "./Login/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Account from "./Account/Account.jsx";
import Footer from "./Footer/Footer.jsx";
import Error from "./Error/Error.jsx";

import { getSearchResult } from "./service.js";
import styles from "./App.module.css";

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false, username: ''});
  const [target, setTarget] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const history = useHistory();
  
  useEffect(() => {
    const fetchData = async () => {
    // performs a GET request
      const response = await fetch("https://demo0156473.mockable.io/courses");
      const responseJson = await response.json();
      setCourseList(Object.values(responseJson));
    };

    if (!courseList.length) {
      fetchData();
    }
  }, [courseList]);

  const onLogin = username => {
    setUserState({
      isLoggedIn: true,
      username: username,
    });
    history.push('/');
  };

  const handleLogout = () => {
    setUserState({
      isLoggedIn: false,
      username: ''
    });
    history.push('/');
  };

  const onSignup = username => {
    setUserState({
      isLoggedIn: true,
      username: username,
    });
    history.push('/user');
  };

  const onSearch = text => {
    setTarget(getSearchResult(courseList, text));
    setSearchText(text);
    history.push(`/search/${text}`);    
  }

  return (
    <>
      <header>
        <nav>
          <ul className={styles.list}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.webName}>
              <Link to="/">OnlineEdu</Link>
            </li>
            <li className={styles.listItem}> 
              <Link to="/courses">Categories</Link>
            </li>
            <li className={styles.search}>
              <SearchBar onSearch={onSearch}/>
            </li>
            <li className={styles.listItem}>
              { userState.isLoggedIn ? <Link to="/user">{userState.username}</Link> : <Link to="/login">Log in</Link>}
            </li>
            <li className={styles.listItem}> 
            { userState.isLoggedIn ? <Link onClick={handleLogout}>Log out</Link> : <Link to="signup">Sign up</Link> }
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/courses" ><Categories courseList={courseList}/></Route>
        <Route path="/search"><CoursesList intro={searchText} courseList={target}/></Route>
        <Route path="/login" exact><Login onLogin={onLogin}/></Route>
        <Route path="/signup" exact><Signup onSignup={onSignup}/></Route>
        <Route path="/user" exact><Account username={userState.username}/></Route>
        <Route component={Error} />
      </Switch>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default App;