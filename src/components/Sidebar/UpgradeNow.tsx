/// <reference types="vite-plugin-svgr/client" />
import UpgradeIcon from "../../assets/upgrade.svg?react";

const UpgradeNow = () => {
  return (
    <a
      className="relative flex items-center gap-6 p-8 bg-success border-2 border-success-border"
      href="#upgrade-now"
    >
      <UpgradeIcon />
      <span className="text-secondary font-bold">Go Pro Upgrade Now</span>
      <span className="font-medium text-lg absolute -top-[2px] right-6 text-success bg-secondary p-5">
        $1
      </span>
    </a>
  );
};

export { UpgradeNow };
