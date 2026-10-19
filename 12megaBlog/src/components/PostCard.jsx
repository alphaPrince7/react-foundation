import React from "react";
import { appwriteService } from "../appwrite/config";
import { Link } from "react-router-dom";

// FIXED: Destructured explicitly to accept both naming variations
function PostCard({ $id, title, featureImage, featuredImage }) {
  // FIXED: Detect whichever image property Appwrite returned
  const imageId = featureImage || featuredImage;

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {/* FIXED: Safeguard added. Only calls getFilePreview if imageId exists */}
          {imageId ? (
            <img
              src={appwriteService.getFilePreview(imageId)}
              alt={title}
              className="rounded-xl"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
