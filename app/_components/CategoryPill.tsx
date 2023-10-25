export default function CategoryPill(props: { category: string[] }) {
  const { category } = props;

  return (
    <span className="rounded-full px-3 py-1 bg-slate-900 border border-slate-600">
      {category}
    </span>
  );
}
