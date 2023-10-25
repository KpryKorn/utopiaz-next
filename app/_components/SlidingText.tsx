export default function SlidingText(props: { text: string }) {
  const { text } = props;
  return (
    <div className="my-6 md:my-12">
      <div
        className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent
      bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.slate.300),theme(colors.slate.400),theme(colors.slate.300),theme(colors.slate.200))] bg-[length:200%_auto] animate-gradient"
      >
        {text}{" "}
        <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
            <li>Finance</li>
            <li>Tech</li>
            <li>AI</li>
            <li>Crypto</li>
            <li>eCommerce</li>
            <li aria-hidden="true">Finance</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
