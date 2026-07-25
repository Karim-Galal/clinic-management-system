import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import clsx from "clsx";

function Logo({
    showText = true,
    className,
}) {
    return (
        <div className={clsx("flex items-center gap-3", className)}>
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg">
                <HiOutlineBuildingOffice2 className="size-6" />
            </div>

            {showText && (
                <div>
                    <h2 className="font-bold text-lg text-surface-foreground">
                        ClinicFlow
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Clinic Management System
                    </p>
                </div>
            )}
        </div>
    );
}

export default Logo;