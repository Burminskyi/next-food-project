import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <p>
        <Link href="/">Main page</Link>
      </p>
      <p>
        <Link href="meals/share">Meals share page</Link>
      </p>
    </main>
  );
}
