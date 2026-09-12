import * as React from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

export function ArticlePagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-end w-full mt-10">
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onPageChange(currentPage - 1);
              }}
              className={`h-6 w-6 p-0 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-400 ${
                currentPage === 1
                  ? "pointer-events-none opacity-40"
                  : "cursor-pointer"
              }`}
            >
              <ChevronsLeft className="w-4 h-4" />
            </PaginationLink>
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => {
              const isActive = page === currentPage;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={isActive}
                    onClick={(event) => {
                      event.preventDefault();
                      onPageChange(page);
                    }}
                    className={`h-6 w-6 text-sm font-normal rounded flex items-center justify-center transition-colors cursor-pointer ${
                      isActive
                        ? "bg-brand-primary text-white hover:bg-brand-primary hover:text-white"
                        : "bg-gray-200 text-brand-gray_1 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            },
          )}

          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Go to next page"
              onClick={(event) => {
                event.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
              className={`h-6 w-6 p-0 flex items-center justify-center  text-gray-600 ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-40"
                  : "cursor-pointer"
              }`}
            >
              <ChevronsRight className="w-4 h-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
