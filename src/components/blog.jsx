import React from 'react';
const blogs = [
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2020/09/Image.jpg',
      type: 'ARCHITECTURE',
      header: 'Building the architecture of the future cities',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2020/09/Image-2.jpg',
      type: 'ARCHITECTURE',
      header: 'Reveal the Penthouse interior at Residential Building',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2020/09/blog12.jpg',
      type: 'ARCHITECTURE',
      header: 'Building the architecture of the future cities',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2020/09/blog2-scaled-1.jpg',
      type: 'ARCHITECTURE',
      header: 'Brooklyn Penthouse',
    },
  ];
  
const Blog = ({ header, type, imageUrl }) => {
  return (
    <div className="relative w-full flex flex-col h-[35rem] mb-10 ">
      {/* Image Wrapper */}
      <div className="img-wrapper relative flex-grow overflow-hidden">
        {/* Image */}
        <img
          src={imageUrl}
          alt="Blog Image"
          className="w-11/12 h-full object-cover cursor-pointer transtion duration-300 hover:scale-110"
        />
        {/* Read Button */}
        <button className="absolute bottom-0 right-3 bg-white  py-5 px-6 rounded">
          READ +
        </button>
      </div>

      {/* Content */}
      <div className="py-4  bg-opacity-75">
        <p className="text-gray-600 ">{type}</p>
        <h1 className="pt-5 text-2xl font-bold">{header}</h1>
      </div>
    </div>
  );
};
const BlogList = () => {
    return (
        blogs.map((blog, index) => (
          <Blog
            key={index}
            imageUrl={blog.imageUrl}
            type={blog.type}
            header={blog.header}
          />
        ))
    );
  };
export  default BlogList;
