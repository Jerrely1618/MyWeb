import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import icons

const PdfReviewer = ({ fileUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setLoading(true);
  };
  const handleClose = () => setIsOpen(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <FontAwesomeIcon icon={faEye} className="mr-2" />
        Review Report
      </button>
      {isOpen && (
        <div className="m-0 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white w-3/4 h-3/4 overflow-auto">
            {loading && (
              <div className="animate-pulse flex space-x-4 p-4">
                <div className="rounded-full bg-gray-400 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            )}
            <iframe
              src={fileUrl}
              className={`w-full h-full ${loading ? "hidden" : ""}`}
              onLoad={handleIframeLoad}
            ></iframe>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={handleClose}
                className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <FontAwesomeIcon icon={faTimes} className="mr-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfReviewer;
