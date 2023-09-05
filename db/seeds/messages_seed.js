exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          id: 1,
          name: "Iman",
          message: "Hello, this is Iman!",
          timestamp: new Date(),
        },
        {
          id: 2,
          name: "John",
          message: "Hi Iman, this is John.",
          timestamp: new Date(),
        },
        {
          id: 3,
          name: "Jane",
          message: "Hi everyone, this is Jane.",
          timestamp: new Date(),
        },
        {
          id: 4,
          name: "Alice",
          message: "Good morning everyone!",
          timestamp: new Date(),
        },
        {
          id: 5,
          name: "Bob",
          message: "Good morning Alice!",
          timestamp: new Date(),
        },
        {
          id: 6,
          name: "Charlie",
          message: "Hello all, hope you are doing well.",
          timestamp: new Date(),
        },
        {
          id: 7,
          name: "David",
          message: "Hi Charlie, doing well, thanks!",
          timestamp: new Date(),
        },
        {
          id: 8,
          name: "Emma",
          message: "Hey everyone, happy Friday!",
          timestamp: new Date(),
        },
        {
          id: 9,
          name: "Frank",
          message: "Thanks Emma, happy Friday to you too!",
          timestamp: new Date(),
        },
        {
          id: 10,
          name: "Grace",
          message: "Hi guys, have a great weekend!",
          timestamp: new Date(),
        },
        {
          id: 11,
          name: "Hank",
          message: "You too Grace, take care!",
          timestamp: new Date(),
        },
        {
          id: 12,
          name: "Ivy",
          message: "Bye all, see you next week!",
          timestamp: new Date(),
        },
        {
          id: 13,
          name: "Jack",
          message: "Goodbye Ivy, have a good one!",
          timestamp: new Date(),
        },
      ]);
    });
};
