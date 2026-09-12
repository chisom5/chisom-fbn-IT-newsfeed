import React, { useState } from "react";
import { Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { toast } from "sonner";
import { truncateText, formatRelativeTime } from "../utils/formatters";

export function ArticleCard({ article }) {
  
  const handleBookmark = ({ title }) => {
    toast.success("Article bookmarked successfully!", {
      description: title ? `"${title.slice(0, 40)}..."` : undefined,
      position: "bottom-center",
      style: {
        backgroundColor: "#4B48FF",
        color: "#FFFFFF",
        borderColor: "#4B48FF",
      },
    });
  };

  return (
    <Card className="flex flex-col h-auto shadow-card">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl font-normal text-black">
          {truncateText(article?.title, 40)}
        </CardTitle>
      </CardHeader>
      <Separator className="bg-brand-gray h-0.5" />

      <CardContent className="flex-1 overflow-hidden px-4 mb-4 sm:px-6">
        <p className="text-sm text-gray-700">
          {truncateText(article?.content, 180)}
        </p>
      </CardContent>

      <CardFooter className="flex text-sm items-center justify-between px-4 pb-6 sm:px-6 sm:pt-0">
        <div className="flex gap-6 min-[900px]:gap-4  items-center ">
          <a
            href={article?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-secondary hover:underline cursor-pointer"
          >
            Read full story
          </a>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleBookmark({ title: article?.title });
            }}
            aria-label="Add to bookmarks"
            type="button"
            className="flex items-center gap-2 text-brand-article_text focus:outline-none"
          >
            <Star className="w-4 h-4 sm:w-3 sm:h-3 text-brand-gray  transition-colors" />

            {/* hidden on mobile */}
            <span className="max-[435px]:hidden inline-block font-regular cursor-pointer text-brand-gray_1">
              Add to bookmarks
            </span>
          </button>
        </div>

        <span className="text-brand-gray_1 font-regular">
          {formatRelativeTime(article?.publishedAt)}
        </span>
      </CardFooter>
    </Card>
  );
}
