export default function MealsDetailsPage({params}) {

  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details Page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
