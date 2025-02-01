"use client";
import React, { useState } from "react";

const ProductReviews = () => {
  // State to handle the visibility of description, additional info, and reviews
  const [showDescription, setShowDescription] = useState(true); // Initially, description is visible
  const [showAdditional, setShowAdditional] = useState(false); // Initially, additional info is hidden
  const [showCommentSection, setShowCommentSection] = useState(false); // Initially, reviews are hidden
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState(""); // New state for user's name
  const [reviews, setReviews] = useState<{ name: string; comment: string }[]>([]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success alert

  // Toggle the description visibility
  const showDescriptionSection = () => {
    setShowDescription(true);
    setShowAdditional(false);
    setShowCommentSection(false);
  };

  // Toggle the additional information visibility
  const showAdditionalSection = () => {
    setShowDescription(false);
    setShowAdditional(true);
    setShowCommentSection(false);
  };

  // Toggle the reviews visibility
  const toggleCommentSection = () => {
    setShowDescription(false);
    setShowAdditional(false);
    setShowCommentSection((prevState) => !prevState);
  };

  // Handle form submission for reviews
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && userName.trim()) {
      // Add the user's name and comment as an object to the reviews array
      setReviews([...reviews, { name: userName, comment }]);
      setComment(""); // Clear the comment input field
      setUserName(""); // Clear the name input field

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="p-6 w-full absolute lg:top-[1140px] left-0 right-0 bottom-0 xxs:top-[100px]">
      {/* Buttons to toggle sections */}
      <div className="flex gap-[300px] justify-center items-center">
        <button
          onClick={showDescriptionSection}
          className="text-black hover:underline text-[20px]"
        >
          Description
        </button>
        <button
          onClick={showAdditionalSection}
          className="text-gray-500 hover:underline text-[20px]"
        >
          Additional Info
        </button>
        <button
          onClick={toggleCommentSection}
          className="text-gray-500 hover:underline text-[20px]"
        >
          {showCommentSection ? "Close Comments" : "Reviews"}
        </button>
      </div>

      {/* Product Description */}
      {showDescription && (
        <div className="mt-4">
          <p className="text-gray-600 leading-[30px] text-justify text-align-last:justify">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
      )}

      {/* Additional Information */}
      {showAdditional && (
        <div className="mt-4">
          <p className="text-gray-600 leading-[30px] text-justify text-align-last:justify">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero.the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            <br />Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both
          </p>
        </div>
      )}

      {/* Comment Section */}
      {showCommentSection && (
        <div className="mt-4 pt-4 w-[600px] mx-auto">
          <h3 className="text-xl font-semibold mb-2">Write a Review:</h3>
          <form onSubmit={handleCommentSubmit} className="space-y-4 border-2 border-gray-400 p-4 rounded-lg">
  <input
    type="text"
    className="w-full p-3 rounded-lg resize-none focus:outline-none focus:ring focus:ring-blue-600 font-bold"
    placeholder="Your name"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
  />
  <textarea
    className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring focus:ring-blue-600 font-bold"
    rows={4}
    placeholder="Write your review here..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}
  />
  <button
    type="submit"
    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
  >
    Submit
  </button>
</form>

          
          {/* Success message alert */}
          {showSuccessMessage && (
            <div className="mt-4 p-3 bg-green-200 text-green-800 rounded-lg">
              Thank you for your review! Your message has been submitted.
            </div>
          )}
        </div>
      )}

      {/* Display Reviews */}
      {reviews.length > 0 && (
        <div className="mt-6 w-[600px] mx-auto">
          <h3 className="text-xl font-semibold mb-2">User Reviews:</h3>
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="p-4 border-2 rounded-lg bg-gray-100 shadow-sm">
                <div className="font-bold text-gray-800">{review.name}</div>
                <div className="text-gray-600">{review.comment}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
