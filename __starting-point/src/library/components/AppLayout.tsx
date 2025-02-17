type Props = React.PropsWithChildren;
export default function AppLayout({ children }: Props) {
  return (
    <main className="min-h-screen w-full bg-gray-100 p-4">{children}</main>
  );
}
