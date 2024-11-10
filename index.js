const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

/* F O R  U S E R S */

//GET METHOD
app.get("/user", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
});

app.get("/user/:id", async (req, res) => {
    const id = req.params.id
    const user = await prisma.user.findFirst({where: {id: id}});
    res.json(user);
});

//POST METHOD
app.post("/user", async (req, res) => {
    const newUser = await prisma.user.create( {data: req.body } );
    res.json(newUser);
});

//UPDATE METHOD
app.put("/user/:id", async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const newUser = await prisma.user.update({
        where: {id: id},
        data: { age: newAge}
    });
    res.json(newUser);
});

//DELETE METHOD
app.delete("/user/:id", async (req, res) => {
    const id = req.params.id;
    const deletedUser = await prisma.user.delete({
        where: {id: id},
    });
    res.json(deletedUser);
});

app.delete("/user", async (req, res) => {
    const deletedUser = await prisma.user.deleteMany();
    res.json(deletedUser);
});


/* F O R  H O U S E */

//GET METHOD
app.get("/house", async (req, res) => {
    const allHouses = await prisma.house.findMany({include: {
        owner : true,
        buildBy: true
    }});
    res.json(allHouses);
});

app.get("/house/:id", async (req, res) => {
    const id = req.params.id
    const house = await prisma.house.findFirst({where: {id: id}});
    res.json(house);
});

//POST METHOD
app.post("/house", async (req, res) => {
    const newHouse = await prisma.house.create( {data: req.body } );
    res.json(newHouse);
});

//UPDATE METHOD
app.put("/house/:id", async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const upatedHouse = await prisma.house.update({
        where: {id: id},
        data: { age: newAge}
    });
    res.json(upatedHouse);
});

//DELETE METHOD
app.delete("/house/:id", async (req, res) => {
    const id = req.params.id;
    const deletedHouse = await prisma.house.delete({
        where: {id: id},
    });
    res.json(deletedHouse);
});

app.delete("/house", async (req, res) => {
    const deletedHouse = await prisma.house.deleteMany();
    res.json(deletedHouse);
});

const crypto = require('crypto');

const generateSecret = () => {
    return crypto.randomBytes(64).toString('hex');
};

const jwtSecret = generateSecret();
console.log('JWT Secret:', jwtSecret);


app.listen(3002, () => console.log(`Server is connected on ${3002}`));