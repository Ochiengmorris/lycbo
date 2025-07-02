import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@/images/icons/Facebook";
import InstagramIcon from "@/images/icons/InstagramIcon";
import XIcon from "@/images/icons/XIcon";

const HeaderInfo = () => {
  return (
    <div className="relative">
      <div className="bg-primary">
        <div className="max-w-7xl flex items-center justify-between mx-auto">
          <div className="flex items-center gap-4 p-2 text-sm text-muted">
            <div>
              <PhoneIcon className="inline-block size-4 mr-2 " />
              <span className="">
                Talk With us: <b>+254-742642356</b>
              </span>
            </div>
            <div>
              <MailIcon className="inline-block mr-2 size-4 " />
              <span className="">
                Send us an email:{" "}
                <Link href="mailto:info@example.com" className="underline ">
                  <b> info@example.com</b>
                </Link>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mr-2 text-primary">
            <Link href={"/"} className="">
              <FacebookIcon color="#fff" />
            </Link>
            <Link href={"/"} className="">
              <InstagramIcon color="#fff" />
            </Link>
            <Link href={"/"} className="">
              <XIcon color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
