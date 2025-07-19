import React from 'react';

const MockPost = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-4 border">
      <div className="flex items-center p-4">
        <img
          src="/placeholder-profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">@ziioz_user</p>
          <p className="text-sm text-gray-500">Just now</p>
        </div>
      </div>
      <img src="/sample-post.jpg" alt="Sample post" className="w-full" />
      <div className="p-4">
        <p className="mb-2">✨ Chasing the sun and soaking in the bliss ☀️</p>
        <div className="flex justify-between text-sm text-gray-600">
          <p>124 Likes</p>
          <p>18 Comments</p>
          <p>9 Shares</p>
        </div>
      </div>
    </div>
  );
};

export default MockPost;
