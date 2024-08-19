import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4 container">
      <h2 className="text-lg font-semibold">Suspense demo</h2>
      <p>
        This project demonstrates the difference of doing server side rendering
        with vs without Suspense. <br />
        <br />
        Use the menu above to navigate.
      </p>
    </div>
  );
}
