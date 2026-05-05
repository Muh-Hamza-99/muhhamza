const Plus = ({ className }: { className: string }) => {
  return (
    <svg
      aria-hidden
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`absolute text-muted-foreground/60 ${className}`}
    >
      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
};

export default Plus;
