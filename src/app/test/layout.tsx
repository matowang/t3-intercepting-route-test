export default function TestLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <div>Layout</div>
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
}
