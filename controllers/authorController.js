const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");


const getAuthorById = asyncHandler(async (req, res) => {
    const {authorId} = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if(!author) {
        throw new CustomNotFoundError("Author not found");
    }

    res.send(`Author Name: ${author.name}`)
})

// async function getAuthorById(req, res){
//     const {authorId} = req.params;

//     try {

//     const author = await db.getAuthorById(Number(authorId));

//     if(!author) {
//         res.status(404).send("Author not found");
//         return;
//     }

//     res.send(`Author Name: ${author.name}`)
// } catch (error) {
//     console.error("Error retrieving author:", error);
//     res.status(500).send("Internal Server Error");
// }
// };

module.exports = {getAuthorById}