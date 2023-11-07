import localFont from "next/font/local";
import Link from "next/link";

export const CodeNext = localFont({
  src: [
    {
      path: "../_assets/fonts/codenext-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../_assets/fonts/codenext-semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function Logo(props: { brandName: boolean; spin: boolean }) {
  return (
    <Link href={"/"} className={CodeNext.className + " flex gap-2"}>
      <span className={props.spin ? "animate-pulse" : ""}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 74 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="NEUTRE - BLANC">
            <path
              id="Vector 2"
              d="M38 16.5L23.5 29.5L31 37.5L42 27.5H47.5L59.5 43L41 61H19.5L0.5 36V54L14.5 72H45L74 44L52.5 16.5H38Z"
              fill="white"
            />
            <path
              id="Vector 1"
              d="M60 0H29.5L1 28L22 55H36.5L50.5 42L43.5 34L32.5 44H26.5L15 29L33.5 10.5H54.5L73.5 35.5V18L60 0Z"
              fill="white"
            />
          </g>
        </svg>
      </span>
      {props.brandName && (
        <span className="font-semibold text-2xl lowercase tracking-tight">
          utopiaz
        </span>
      )}
    </Link>
  );
}
