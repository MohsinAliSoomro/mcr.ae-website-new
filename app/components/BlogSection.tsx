"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Section404 from "./Section404";
import SkeletonCard from "./SkeletonCard";

type BlogSectionProps = {
  posts: any[];
  categories: { title: string; slug: { current: string } }[];
};

export default function BlogSection({
  posts = [],
  categories = [],
}: BlogSectionProps) {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const postsPerPage = 9;

  // const allCategories: string[] = Array.from(
  //     new Set(posts.flatMap((post: any) => post.categories?.map((cat: any) => cat.title) || []))
  // );
  const allCategories: string[] = categories.map((cat) => cat.title);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  // 🔍 Filtered Posts Logic
  const filteredPosts = posts.filter((post: any) => {
    const matchesSearch =
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? post?.categories?.some((cat: any) => cat.title === selectedCategory)
      : true;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const getPageNumbers = () => {
    const maxVisiblePages = 3;
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
    const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
    let startPage, endPage;

    if (currentPage <= maxPagesBeforeCurrent + 1) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pageNumbers = getPageNumbers();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // simulate 1s loading, adjust as needed

    return () => clearTimeout(timer);
  }, [posts]);

  return (
    <section className="">
      <div className="flex gap-5 items-start justify-end mx-auto max-w-6xl px-1">
        {/* // categories // */}
        <div className=" mt-10">
          <div className="dropdown-menu relative">
            <div
              onClick={handleDropdown}
              className="rounded-lg flex items-center px-3 py-3 border cursor-pointer"
            >
              <input
                type="text"
                placeholder={selectedCategory || "Select Category"}
                disabled
                className=" bg-transparent pointer-events-none text-base text-gray-700 outline-none w-full h-full flex-1"
              />
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
                <line x1="20" y1="0" x2="10" y2="10" stroke="#9CA3AF" />
              </svg>
            </div>
            {/* // dropdown // */}
            {openDropdown && (
              <div className="absolute w-full z-10 bg-white rounded-lg shadow-xl px-4 mt-2 border max-h-96 overflow-y-auto">
                {["All", ...allCategories].map((cat) => (
                  <>
                    <div className="py-4 flex items-center w-full border-b border-gray-200 cursor-pointer">
                      <div className="flex-1">
                        <div
                          onClick={() => {
                            setSelectedCategory(cat === "All" ? "" : cat);
                            setCurrentPage(1);
                            setOpenDropdown(false);
                          }}
                          className="text-gray-400 text-base"
                        >
                          {cat}
                        </div>
                      </div>
                      <div>
                        <svg
                          width="40"
                          height="20"
                          viewBox="0 0 40 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="30"
                            y1="2"
                            x2="40"
                            y2="10"
                            stroke="#9CA3AF"
                          />
                          <line
                            x1="30"
                            y1="18"
                            x2="40"
                            y2="10"
                            stroke="#9CA3AF"
                          />
                          <line
                            x1="20"
                            y1="10"
                            x2="40"
                            y2="10"
                            stroke="#9CA3AF"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* // search // */}
        <div className="relative w-full lg:w-[28%] mt-10 cursor-pointer">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Search"
            value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // 👈 So it starts fresh
            }}
          />
        </div>
      </div>

      <div className="container px-1 py-4 mx-auto max-w-6xl">
        <div className="text-start mt-5">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>
        </div>
      </div>
      <>
        {/* // posts Card data // */}
        <div className="container mx-auto max-w-6xl px-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <SkeletonCard />
          ) : paginatedPosts.length > 0 ? (
            paginatedPosts.map((post: any) => (
              <div
                key={post._id}
                onClick={() => router.push(`/blog/post/${post.slug.current}`)}
                className="bg-white cursor-pointer shadow-md border border-gray-200 rounded-lg max-w-lg mb-5 transition  hover:-translate-y-[3px]"
              >
                <img
                  className="rounded-t-lg w-full object-cover h-auto lg:h-[250px]"
                  src={post?.mainImage?.asset?.url}
                  alt=""
                />
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {post?.title}
                    </h5>
                  </a>
                  <p className="font-normal text-gray-500 mb-6 line-clamp-4">
                    {post?.description}
                  </p>
                  <div className="flex mt-3">
                    <img
                      src={
                        post?.author?.image?.asset?.url ||
                        "https://randomuser.me/api/portraits/men/97.jpg"
                      }
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">
                        {post?.author?.name}
                      </p>
                      <p className="font-semibold text-gray-400 text-xs">
                        {/* {new Date(post.publishedAt).toLocaleDateString("en-GB")} */}
                        {new Date(post?.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-5xl text-gray-400 py-10">
              No posts found.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mb-5">
          {/* {totalPages > 1 && ( */}
          <div className="w-full lg:w-[13%] flex justify-center items-center mt-8 gap-2 border p-2 rounded-lg">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-xl transition  hover:-translate-y-[1px] border border-slate-300 py-[7px] px-3 cursor-pointer text-sm shadow-sm hover:bg-slate-800 hover:text-white disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-1 cursor-pointer border text-sm rounded transition shadow-sm ${
                  currentPage === page
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-xl transition  hover:-translate-y-[1px] text-white border border-slate-300 py-[7px] cursor-pointer px-3 text-sm shadow-sm hover:bg-slate-800 hover:text-white disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* // )} */}
        </div>
      </>
    </section>
  );
}
