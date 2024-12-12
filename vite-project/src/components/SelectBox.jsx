import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Featurs" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>featurs</SelectLabel>
          <SelectItem value="action">Action</SelectItem>
          <SelectItem value="another-action">Another action</SelectItem>
          <SelectItem value="dropdown">Dropdown menu</SelectItem>
          <SelectItem value="404page">404 page</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectDemo;
