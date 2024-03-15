"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries: string[] = ["All", "Uganda", "Malawi"];
const statuses: string[] = ["All", "Open", "Closed"];

const filterOptions = [
  {
    id: "countries",
    type: "checkbox",
    title: "Countries",
    options: countries,
  },
  {
    id: "status",
    type: "radio",
    title: "Status",
    options: statuses,
  },
];

export default function Filters() {
  const router = useRouter();
  const [status, setStatus] = useState("");

  function handleFilter() {
    console.log(status);
    if (status !== "All") {
      router.push(`?status=${status}`);
    }
  }
  console.log(status);

  return (
    <div className="container">
      <h5>Filter by:</h5>
      <div className="flex gap-4">
        <div>
          <p>Country</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Uganda">Uganda</SelectItem>

              <SelectItem value="Malawi">Malawi</SelectItem>
              <SelectItem value="Indonesia">Indonesia</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>Status</p>
          <Select onValueChange={setStatus} defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose project status" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="All">All</SelectItem> */}
              {statuses.map((s, index) => (
                <SelectItem value={s} key={s}>
                  {s}
                </SelectItem>
              ))}
              {/* <SelectItem value="Open">Open</SelectItem>

              <SelectItem value="Closed">Closed</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
