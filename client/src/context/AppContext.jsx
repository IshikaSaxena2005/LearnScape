import { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);


  // Fetch all courses from dummy data
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // ✅ Corrected Function to calculate average course rating
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) return 0;
    const totalRating = course.courseRatings.reduce((acc, curr) => acc + curr.rating, 0);
    return parseFloat((totalRating / course.courseRatings.length).toFixed(1));
  };

  //function to calculate course chaper time
  const calculateChapterTime = (chapter) => {
    let time=0;
    chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration);
    return humanizeDuration(time * 60 *1000, { units:['h','m'] });
  }

  //func to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) => {chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)});
    return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] });
  }

  //func to cal no of lectures in the course
  const calculateNoOfLectures = (course) => {
    let noOfLectures = 0;
    course.courseContent.map((chapter) => {
      noOfLectures += chapter.chapterContent.length;
    });
    return noOfLectures;
  }
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures
    
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
