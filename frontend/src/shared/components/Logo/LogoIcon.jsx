import clsx from "clsx";
import {
  // HiOutlineHeart,
  // HiOutlinePlusCircle,
  // HiOutlineShieldCheck,
  HiOutlineUserGroup,
 } from "react-icons/hi2";

function LogoIcon({ className }) {
    return (
        <div
            className={clsx(
                "flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md",
                className
            )}
        >
            <HiOutlineUserGroup className="size-6" />
        </div>
    );
}

export default LogoIcon;