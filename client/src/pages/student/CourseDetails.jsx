import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { FaStar, FaRegStar, FaChevronDown, FaChevronUp, FaPlay } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import YouTube from 'react-youtube';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const { allCourses, calculateChapterTime } = useContext(AppContext);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const currency = '₹';

  const currentUserId = 'CURRENT_USER_ID'; // Replace with actual user ID from context or auth

  useEffect(() => {
    if (allCourses?.length > 0) {
      const course = allCourses.find((course) => course._id === id);
      setCourseData(course);
      if (course?.enrolledStudents?.includes(currentUserId)) {
        setIsAlreadyEnrolled(true);
      }
    }
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!courseData) {
    return <p className="text-center mt-10 text-gray-500 text-lg">Loading course details...</p>;
  }

  const ratings = courseData.courseRatings || [];
  const totalRating = ratings.reduce((sum, r) => sum + r.rating, 0);
  const rating = ratings.length ? totalRating / ratings.length : 0;
  const roundedRating = Math.round(rating);

  const originalPrice = Number(courseData.coursePrice || 0);
  const discount = Number(courseData.discount || 0);
  const discountedPrice = (originalPrice - (discount * originalPrice) / 100).toFixed(2);
  const daysLeft = courseData.offerDuration || 5;

  return (
    <div className="relative flex flex-col md:flex-row gap-12 md:px-24 px-6 pt-20 md:pt-32 pb-16 text-left bg-gradient-to-b from-purple-50 to-white min-h-screen">

      {/* Left Section */}
      <div className="w-full md:w-2/3 space-y-10 z-10">
        <h1 className="text-4xl font-extrabold text-gray-900">{courseData.courseTitle}</h1>

        {/* Enrollment & Ratings */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <p className="text-purple-600 font-medium text-base">
            {courseData.enrolledStudents.length}{' '}
            {courseData.enrolledStudents.length > 1 ? 'students enrolled' : 'student enrolled'}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold text-black text-base">{rating.toFixed(1)}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < roundedRating ? (
                    <FaStar className="text-yellow-500 w-4 h-4" />
                  ) : (
                    <FaRegStar className="text-yellow-400 w-4 h-4" />
                  )}
                </span>
              ))}
            </div>
            <span className="text-gray-500">({ratings.length} ratings)</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-6">📝 Course Description</h2>
          <div
            className="prose max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
          ></div>
        </div>

        {/* Course Structure */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Course Structure</h2>
          <div className="space-y-6">
            {courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    {chapter.chapterTitle}
                  </h3>
                  <span className="text-purple-600">
                    {openSection[index] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Duration: {calculateChapterTime(chapter)}
                </p>

                {/* Lectures */}
                {openSection[index] && (
                  <ul className="space-y-2">
                    {chapter.chapterContent.map((lecture, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center bg-purple-50 px-4 py-2 rounded-md hover:bg-purple-100 transition"
                      >
                        <span className="text-gray-800 text-sm font-medium flex items-center gap-2">
                          <FaPlay className="text-purple-500" />
                          {lecture.lectureTitle} - {lecture.lectureDuration} mins
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      {courseData.courseThumbnail && (
        <div className="w-full md:w-1/3 flex flex-col items-center relative z-10">

          {/* YouTube Video Preview or Fallback Thumbnail */}
          {courseData.videoId ? (
            <YouTube
              videoId={courseData.videoId}
              opts={{ playerVars: { autoplay: 0 } }}
              iframeClassName="w-full aspect-video rounded-2xl shadow-lg border border-purple-200"
            />
          ) : (
            <div className="relative w-full aspect-video mb-3">
              <img
                src={courseData.courseThumbnail}
                alt={courseData.courseTitle}
                className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg border border-purple-200"
              />
            </div>
          )}

          {/* Time Left Badge */}
          <div className="mt-3 flex justify-center items-center gap-2 bg-white border border-gray-200 shadow-sm w-fit px-4 py-1 rounded-full text-sm mx-auto">
            <img
              className="w-3.5"
              src={assets.time_left_clock_icon}
              alt="time left clock icon"
            />
            <span className="text-gray-800 font-medium">{daysLeft} days left</span>
          </div>

          {/* Price */}
          <div className="mt-4 text-center">
            <p className="text-sm text-red-600 font-bold mb-1">
              Hurry! This offer ends in {daysLeft} days.
            </p>
            <div className="flex justify-center items-center gap-3 text-lg md:text-xl font-bold">
              <span className="line-through text-gray-500">
                {currency} {originalPrice.toFixed(2)}
              </span>
              <span className="text-gray-700">→</span>
              <span className="text-green-600">{currency} {discountedPrice}</span>
            </div>
          </div>

          {/* Course Highlights */}
          <div className="pt-6 w-full px-3">
            <p className="font-semibold text-gray-700 text-base">What's in the course?</p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
              <li>Lifetime access to all course materials</li>
              <li>Downloadable resources and assignments</li>
              <li>Certificate of completion</li>
              <li>Access to community forums and Q&A sessions</li>
            </ul>
          </div>

          {/* Enroll Button */}
          <button
            disabled={isAlreadyEnrolled}
            className={`mt-6 w-full py-3 rounded-xl ${
              isAlreadyEnrolled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
            } text-white font-semibold text-lg shadow-md transition duration-300`}
          >
            {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
