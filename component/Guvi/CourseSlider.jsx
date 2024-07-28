import React from 'react';
import CourseCard from '../Guvi/Coursecard';

const CourseSection = () => {
  const courses = [
    {
      image: 'https://ik.imagekit.io/sri05/java-at.webp?updatedAt=1721239814132',
      title: 'Java Full Stack Development Course',
      availableLanguages: ['ENGLISH', 'TAMIL'],
      features: [
        'EMI Options Available',
        'Placement Guidance',
        '1:1 Mentor Doubt Clearing Sessions'
      ],
      buttonText: 'Know More ',
    },
    {
      image: 'https://ik.imagekit.io/sri05/java-fsd.webp?updatedAt=1721239814047',
      title: 'Python Full Stack Development Course',
      availableLanguages: ['ENGLISH', 'HINDI'],
      features: [
        'EMI Options Available',
        'Placement Guidance',
        '1:1 Mentor Doubt Clearing Sessions'
      ],
      buttonText: 'Know More ',
    },
    {
      image: 'https://ik.imagekit.io/sri05/data-engineeringg.webp?updatedAt=1721239814081',
      title: 'Data Science with Python',
      availableLanguages: ['ENGLISH'],
      features: [
        'EMI Options Available',
        'Placement Guidance',
        '1:1 Mentor Doubt Clearing Sessions'
      ],
      buttonText: 'Know More ',
    },
  ];

  return (
    <div className="p-14 2xl:container m-14">
      <div className="w-[90%] mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              availableLanguages={course.availableLanguages}
              features={course.features}
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
