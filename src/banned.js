fetch("https://netflixvirus.vercel.app/api/pizzaduo")
  .then((res) => res.json())
  .then((data) => {
    const badReviews = data.filter((comment) => comment.review.includes("1,0"));
    const banned = badReviews
      .map((person) => person.name.split(" "))
      .map((person) => {
        person[1] = "BANNED";
        return person.join(" ");
      });
    console.log(banned);
  });
