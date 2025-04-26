import React from "react";

const ProfileImage = () => {
  return (
    <div className="bg-[#bcbcbc]">
      <div className="profile-img flex flex-col items-center justify-center p-4">
        <img
          src="https://guilherme.stracini.com.br/photo.png"
          alt="Guilherme Branco Stracini"
          title="Guilherme Branco Stracini"
          className="max-w-[180px] h-auto mx-auto rounded-lg"
        />
        <div className="text-center mt-4">
          <h1 className="text-xl font-bold text-gray-800">Guilherme Branco Stracini</h1>
          <p className="text-lg font-medium text-gray-600">Senior Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
