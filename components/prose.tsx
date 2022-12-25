type Props = {
  children: React.ReactNode
}

export const Prose = ({ children }: Props) => {
  return (
    <div id="post-body" className="max-w-none prose prose-a:text-pink-600 dark:prose-invert">
      {children}
    </div>
  );
};