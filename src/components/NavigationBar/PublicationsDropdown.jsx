import React, { useState, forwardRef, useEffect, useRef } from "react";

const PublicationsDropdown = forwardRef(function PublicationsDropdown(
  { onItemClick, activeFilter },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Merge forwarded ref with local ref so parent can still access the element
  const setRefs = (el) => {
    containerRef.current = el;
    if (typeof ref === "function") {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  };

  useEffect(() => {
    function handleDocumentClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("touchstart", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("touchstart", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const options = [
    { label: "Journal Articles", value: "ALL" },
    { label: "Book Chapters", value: "SUBMENU_2" },
    { label: "Books", value: "SUBMENU_3" },
    { label: "Patents", value: "SUBMENU_4" },
  ];

  function handleSelect(value) {
    onItemClick(3, { publicationFilter: value });
    setIsOpen(false);
  }

  return (
    <li
      className="tab-name dropdown"
      ref={setRefs}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
    >
      Publications
      <ul className={`dropdown-menu${isOpen ? " open" : ""}`}>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`dropdown-item${activeFilter === opt.value ? " active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(opt.value);
            }}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </li>
  );
});

export default PublicationsDropdown;
