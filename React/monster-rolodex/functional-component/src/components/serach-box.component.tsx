import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeHolder?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeHolder,
  changeHandler,
}: SearchBoxProps) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeHolder}
      onChange={changeHandler}
    />
  );
};

export default SearchBox;
