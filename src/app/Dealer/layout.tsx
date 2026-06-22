import DealerSidebar from "../components/dealer/DealerSidebar/DealerSidebar"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="min-h-screen flex">
    <DealerSidebar />
    <main className="flex-1 p-6">
      {children}
    </main>
  </div>
  }