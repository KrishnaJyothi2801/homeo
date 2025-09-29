import Navbar from "./Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  )
}
