export default function CategoryPill(props: { category: string[] }) {
  const { category } = props;

  return (
    <span className="rounded-full px-3 py-1 bg-slate-950 border border-slate-700">
      {category}
    </span>
  );
}
