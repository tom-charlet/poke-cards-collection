import Image from "next/image";
import dynamic from "next/dynamic";

const Content = dynamic(() => import('../components/Content'))

export default function Home() {
  return <main className="container p-24 mx-auto">
    <Content />
  </main>
}
