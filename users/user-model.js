const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find() {
    return db("users")
}

function findBy(filter) {
    return db("users")
        .where(filter)
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 10)

    const [id] = await db("users")
        .insert(user)

    return findById(id)
}

function findById(id) {
    return db("users")
        .where({ id })
        .first("id", "username")
}

module.exports = {
    find,
    findBy,
    add,
    findById
}