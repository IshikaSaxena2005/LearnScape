import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { FaChevronUp, FaChevronDown, FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';
import Footer from '../../components/student/Footer';

// Utility function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.split('/')[1];
    } else if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v');
    }
  } catch (e) {
    return null;
  }
  return null;
};

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [currentLecture, setCurrentLecture] = useState(null);
  const [rating, setRating] = useState(0); // ⭐ Rating State

  useEffect(() => {
    const selectedCourse = enrolledCourses.find(course => course._id === courseId);
    setCourseData(selectedCourse || null);
  }, [courseId, enrolledCourses]);

  const toggleSection = (index) => {
    setOpenSection(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const setPlayerData = (lecture, chapterIndex, lectureIndex) => {
    setCurrentLecture({
      ...lecture,
      chapter: chapterIndex + 1,
      lecture: lectureIndex + 1,
    });
    setRating(0); // Reset rating when switching lecture
  };

  const handleRating = (value) => {
    setRating(value);
    alert(`You rated this lecture ${value} star${value > 1 ? 's' : ''}`);
  };

  if (!courseData) {
    return <div className="text-center text-gray-600 mt-10">Loading course details...</div>;
  }

  return (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* Left Column - Course Structure */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold mb-6">Course Structure</h2>
          <div className="space-y-6">
            {courseData.courseContent?.map((chapter, chapterIndex) => (
              <div
                key={chapterIndex}
                className="p-6 bg-white rounded-xl shadow border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection(chapterIndex)}
                >
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    {chapter.chapterTitle}
                  </h3>
                  <span className="text-purple-600">
                    {openSection[chapterIndex] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Duration: {calculateChapterTime(chapter)}
                </p>

                {/* Lectures */}
                {openSection[chapterIndex] && (
                  <ul className="space-y-2">
                    {chapter.chapterContent?.map((lecture, lectureIndex) => (
                      <li
                        key={lectureIndex}
                        className="flex justify-between items-center bg-purple-50 px-4 py-2 rounded-md hover:bg-purple-100 transition"
                      >
                        <span className="text-gray-800 text-sm font-medium flex items-center gap-2">
                          <FaPlay className="text-purple-500" />
                          {lecture.lectureTitle} - {lecture.lectureDuration} mins
                        </span>
                        {lecture.lectureUrl && (
                          <p
                            onClick={() =>
                              setPlayerData(lecture, chapterIndex, lectureIndex)
                            }
                            className="text-blue-500 cursor-pointer text-sm font-semibold"
                          >
                            Watch
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video Player */}
        <div className="bg-white rounded-xl shadow-md p-4 h-fit">
          {currentLecture ? (
            <>
              <h2 className="text-lg font-semibold mb-2 text-purple-700">
                {currentLecture.chapter}.{currentLecture.lecture} - {currentLecture.lectureTitle}
              </h2>

              {/* YouTube Embed or Video */}
              {currentLecture.lectureUrl.includes('youtube.com') || currentLecture.lectureUrl.includes('youtu.be') ? (
                <YouTube
                  videoId={getYouTubeVideoId(currentLecture.lectureUrl)}
                  opts={{ playerVars: { autoplay: 1 } }}
                  iframeClassName="w-full aspect-video rounded-md shadow-md"
                />
              ) : (
                <video
                  src={currentLecture.lectureUrl}
                  controls
                  className="w-full rounded-md shadow-md"
                />
              )}

              <p className="mt-2 text-gray-600 text-sm">
                Duration: {currentLecture.lectureDuration} mins
              </p>

              <button
                className="mt-3 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition"
                onClick={() => alert('Marked as complete!')}
              >
                Mark Complete
              </button>

              {/* ⭐ Rating Section */}
              <div className="mt-5">
                <p className="text-sm text-gray-600 mb-2">Rate this Lecture:</p>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }, (_, index) => {
                    const starValue = index + 1;
                    return (
                      <span
                        key={index}
                        onClick={() => handleRating(starValue)}
                        className={`text-2xl cursor-pointer transition-colors ${
                          starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-600 text-sm">
              Click <span className="font-semibold text-purple-600">Watch</span> to play a lecture.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Player;
