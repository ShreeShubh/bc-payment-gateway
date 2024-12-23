import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex items-center">
      <Image
        src="/logo.jpeg"
        width={1000}
        height={500}
        alt="logo"
        className="w-full"
      />
    </div>
  )
}
