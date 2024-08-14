import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-16 p-10">
      <motion.button
        onClick={handlePreviousPage}
        className="flex bg-purple-600 hover:bg-purple-700 items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-100 uppercase align-middle transition-all rounded-full select-none active:bg-purple-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled={currentPage === 1}
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Previous
      </motion.button>

      <span className="mx-4 text-2xl">
        Page {currentPage} of {totalPages}
      </span>

      <motion.button
        onClick={handleNextPage}
        className="flex bg-purple-600 hover:bg-purple-700 items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-100 uppercase align-middle transition-all rounded-full select-none active:bg-purple-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Next
        <ArrowRightIcon className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

export default Pagination;
