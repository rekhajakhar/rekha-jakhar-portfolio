export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
