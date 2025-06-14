import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      {/* Section Heading */}
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br />
        platform has made a difference in their lives.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border border-gray-200"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating & Feedback */}
            <div className="mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.round(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
