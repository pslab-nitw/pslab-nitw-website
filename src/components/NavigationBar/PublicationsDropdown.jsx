import React, { useState, forwardRef } from "react";

const PublicationsDropdown = forwardRef(function PublicationsDropdown(
  { onItemClick },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "All", value: "ALL" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
  ];

  function handleSelect(value) {
    onItemClick(3, { publicationFilter: value });
    setIsOpen(false);
  }

  return (
    <li
      className="tab-name dropdown"
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
    >
      Publications
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li
              key={opt.value}
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(opt.value);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});

export default PublicationsDropdown;