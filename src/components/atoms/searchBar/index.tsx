import React from "react";

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  search: string;
  setsearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({
  search,
  setsearch,
  ...props
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center absolute h-10 pl-2 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Cari pokemon"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        className="border-2 p-2 rounded border-[#E6E8F0] focus:border-blue-400 outline-none pr-8 pl-10"
        {...props}
      />
    </div>
  );
};

export default SearchBarComponent;
