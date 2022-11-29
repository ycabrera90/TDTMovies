import Image from 'next/image'

export default function Home() {
  return (
    <Image
        alt="test"
        src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"
        fill                                            
        sizes="50vw"
        style={{ objectFit: "cover" }}
    />
  )
}
