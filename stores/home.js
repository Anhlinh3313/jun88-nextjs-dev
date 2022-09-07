export async function getLink() {
  return await fetch("http://localhost:41966/Link/GetLink")
    .then((res) => (res ? res.json() : null))
    .then((data) => {
      return data;
    });
}
