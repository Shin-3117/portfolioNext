import Image from "next/image";
import Logo from "@/img/projects/COA/logo.svg";
import TextLogo from "@/img/projects/COA/TextLogo.svg";

export default function COA() {
  return (
    <article>
      <h3 className="text-4xl">COA</h3>
      {/* <div className="flex items-center gap-1">
        <Image
          src={Logo}
          width={48}
          height={48}
          alt="COA Logo"
        />
        <Image
          src={TextLogo}
          width={102}
          height={32}
          alt="COA Logo"
        />
      </div> */}
    </article>
  );
}
