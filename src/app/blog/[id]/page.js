export default function Page(props) {
  return <div>My ID Blog </div>;
}
export async function generateStaticParams() {
  const posts = await fetch('https://reqres.in/api/users?page=2').then((res) =>
    res.json()
  );
  return posts.data.map((post) => ({
    slug: post.slug,
  }));
}
