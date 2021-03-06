exports.seed = async (knex) => {
  await knex("users").truncate()
  await knex("foods").truncate()
  await knex("users").insert([
    { username: "Admin", password: "superSecurePass" },
    { username: "Test", password: "somewhatSecurePass" }
  ])
  await knex("foods").insert([
    { food: "strawberries", serving_size: 1, user_id: 1, category: "fruit" },
    { food: "bananas", serving_size: 2, user_id: 1, category: "fruit" },
    { food: "bread", serving_size: 3, user_id: 2, category: "starch" },
    { food: "deer steak", serving_size: 4, user_id: 2, category: "meat" }
  ])
}