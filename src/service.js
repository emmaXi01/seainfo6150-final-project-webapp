const filter = (courses, target) => {
  const searchResult = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].title.toLowerCase().includes(target.toLowerCase())) {
      searchResult.push(courses[i])
    }
  }
  return searchResult;
}

export const getSearchResult = (courses,target) => {  
  return filter(courses, target);
};

const users = [
  {
    name: "April",
    password: "123456"
  },
  {
    name: "Tom",
    password: "112234"
  },
  {
    name: "Mickey",
    password: "112min"
  },
  {
    name: "Emma",
    password: "abcred"
  },
];

export const checkUser = (name, password) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].password === password) {
      return true;
    }
  }

  return false;
}

export const addUser = (user) => {
  users.push(user);
}

export const filterCourses = (courses, category) => {
  if(category === "All Courses") {
    return courses;
  }

  const filteredCourses = [];
  for(let i = 0; i < courses.length; i++) {
    if (courses[i].category === category) {
      filteredCourses.push(courses[i])
    }
  }

  return filteredCourses;
}
