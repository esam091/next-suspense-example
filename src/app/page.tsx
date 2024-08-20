import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-4 container">
      <h2 className="text-lg font-semibold">Suspense demo</h2>
      <p>
        This project demonstrates the difference of doing server side rendering
        with vs without Suspense. <br />
        <br />
        Use the menu above to navigate.

        <br />
        The source code is provided <Link className="underline" href='https://github.com/esam091/next-suspense-example'>here</Link>.
      </p>
    </div>
  );
}
