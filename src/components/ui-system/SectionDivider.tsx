export default function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
