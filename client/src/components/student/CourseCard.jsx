import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const rating = calculateRating(course); // Should return a number like 5
  const roundedRating = Math.round(rating);
  const discountedPrice = (
    course.coursePrice - (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
    >
      <img
        className="w-full h-40 object-cover rounded-lg mb-4"
        src={course.courseThumbnail}
        alt={course.courseTitle}
      />
      <div className="text-left w-full space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-500">
          {course.educator?.name || 'LearnScape'}
        </p>

        {/* ⭐ Ratings */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium text-black">{rating.toFixed(1)}</span>
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < roundedRating ? (
                  <FaStar className="text-yellow-500 w-4 h-4" />
                ) : (
                  <FaRegStar className="text-yellow-500 w-4 h-4" />
                )}
              </span>
            ))}
          </div>
          <span className="text-gray-500">
            ({course.courseRatings?.length || 0})
          </span>
        </div>

        <p className="text-base font-bold text-green-600">
          {currency}
          {discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
