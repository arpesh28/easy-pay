import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  DollarSign,
  Layers2,
  LayoutDashboard,
  NotepadText,
  StickyNote,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sticky bg-black w-[250px] h-screen text-white">
      <div className="p-10">
        <h2 className="text-center font-semibold">Easy Pay</h2>
      </div>
      <nav className="px-5 w-full space-y-2">
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "ghost",
              className: "rounded-md h-10 text-left justify-start px-2",
            }),
            "w-full"
          )}
        >
          <div className="rounded-full h-5 w-5 mr-4 items-center flex justify-center">
            <LayoutDashboard className="h-5 w-5" fill="white" />
          </div>
          Overview
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "ghost",
              className: "rounded-md h-10 text-left justify-start px-2",
            }),
            "w-full bg-white text-black"
          )}
        >
          <div className="rounded-full bg-black h-5 w-5 mr-4 items-center flex justify-center">
            <DollarSign color="white" className="h-2.5 w-2.5" />
          </div>
          Transfer
        </Link>

        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "ghost",
              className: "rounded-md h-10 text-left justify-start px-2",
            }),
            "w-full"
          )}
        >
          <div className="rounded-full h-5 w-5 mr-4 items-center flex justify-center">
            <Layers2 className="h-5 w-5" fill="white" stroke="black" />
          </div>
          Transactions
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
