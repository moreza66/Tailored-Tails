import React from 'react';
import '../../Css/Pagination.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TiMinus } from 'react-icons/ti';
const Pagination = ({ page, pages, changePage }) => {
    function numberRange(start, end) {
        return new Array(end - start).fill().map((d, i) => i + start);
    }
    // (Keep only the function definition and initialization of variables here)
  };
  if (pages <= 5) {
    // Logic for less than 5 pages
  }