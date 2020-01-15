
const users = [
  {
    id: 1,
    firstName: "Tin",
    lastName: "Ujević",
    image: "../../assets/bee_icon.jpg"
  },
  {
    id: 2,
    firstName: "Wislawa",
    lastName: "Szimborska",
    image: "../../assets/bee_icon.png"
  },
  {
    id: 3,
    firstName: "Carlos",
    lastName: "Ruiz Zafon",
    image: "../../assets/volunteer.jpg"
  }
];

const ads = [
  {
    id: 1,
    title: "Tražim čizme",
    description: "Traže se zimske čizme, ženski model, veličina 42.",
    author: 1
  },
  {
    id: 2,
    title: "Trebam volontere",
    description: "Traže se volonteri za rad u parku prirode.",
    author: 2
  },
  {
    id: 3,
    title: "Poklanjam traperice",
    description: "Tamne ženske traperice, veličina 42, high-waist.",
    author: 3
  }
];

app.get("/users", (req, res) => {
  const idx = req.params.id - 1;
  if(!users[idx]){
    return res.status(404).json({error: "User not found"});
  }

  return res.json(users[idx]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
