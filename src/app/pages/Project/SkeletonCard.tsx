// SkeletonCard.jsx
import React from "react";

export function SkeletonCard() {
  return (
    <article
      className="max-w-md w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
      aria-hidden="true"
    >
      {/* image placeholder */}
      <div className="w-full h-40 md:h-48 bg-gray-200 rounded-t-2xl animate-pulse"></div>

      <div className="p-5 space-y-4">
        {/* header: title + badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-2/3 h-6 bg-gray-200 rounded-md animate-pulse" />
          <div className="w-24 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* short description (2 lines) */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="w-5/6 h-3 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-3">
          {/* kategori label */}
          <div className="w-1/3 h-4 bg-gray-200 rounded-md animate-pulse"></div>

          {/* fitur / paragraph (3 short lines) */}
          <div className="space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-11/12 h-3 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-10/12 h-3 bg-gray-200 rounded-md animate-pulse"></div>
          </div>

          {/* tags */}
          <div className="flex gap-2 pt-3 flex-wrap">
            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="w-24 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="w-16 h-8 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}
