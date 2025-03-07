import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Image
        className="mx-auto"
        src="/image/chameleonultra.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />

      <p className="text-fd-muted-foreground">
        <Link
          href="/docs/chameleonultra"
          className="text-fd-foreground font-semibold underline"
        >
          查看文档
        </Link>{" "}
      </p>
    </main>
  );
}
