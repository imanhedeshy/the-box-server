// ./db/seeds/users_seed.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            name: 'Iman',
            username: 'imanhedeshy',
            email: 'iman@hedeshy.ca',
            password_hash: '$2b$10$b14FX5qE4P9ojNybKvjcdedvdPS17cU5dBNor.S1IgAzp41xPNaoG',
            user_type: 'Odin',
            bio: 'Husband, Software Engineer, MBA, Elecetrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover',
          },
          {
            id: 2,
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com',
            password_hash: 'hashed_password2',
            user_type: 'student',
            bio: 'Web Developer, Music Lover, Outdoor Enthusiast',
          },
          {
            id: 3,
            name: 'Jane Smith',
            username: 'janesmith',
            email: 'jane@example.com',
            password_hash: 'hashed_password3',
            user_type: 'educator',
            bio: 'Math Teacher, Nature Lover, Bookworm',
          },
          {
            id: 4,
            name: 'Ethan Wilson',
            username: 'ethanwilson',
            email: 'ethan@example.com',
            password_hash: 'hashed_password4',
            user_type: 'admin',
            bio: 'Tech Enthusiast, Traveler, Coffee Lover',
          },
          {
            id: 5,
            name: 'Emily Brown',
            username: 'emilybrown',
            email: 'emily@example.com',
            password_hash: 'hashed_password5',
            user_type: 'student',
            bio: 'Art Enthusiast, Cat Lover, Movie Buff',
          },
          {
            id: 6,
            name: 'Daniel Johnson',
            username: 'danieljohnson',
            email: 'daniel@example.com',
            password_hash: 'hashed_password6',
            user_type: 'educator',
            bio: 'History Teacher, Cyclist, Photography Hobbyist',
          },
          {
            id: 7,
            name: 'Olivia White',
            username: 'oliviawhite',
            email: 'olivia@example.com',
            password_hash: 'hashed_password7',
            user_type: 'student',
            bio: 'Science Geek, Hiker, Dog Lover',
          },
          {
            id: 8,
            name: 'Michael Miller',
            username: 'michaelmiller',
            email: 'michael@example.com',
            password_hash: 'hashed_password8',
            user_type: 'developer',
            bio: 'Full Stack Developer, Gamer, Foodie',
          },
          {
            id: 9,
            name: 'Sophia Martinez',
            username: 'sophiamartinez',
            email: 'sophia@example.com',
            password_hash: 'hashed_password9',
            user_type: 'partner',
            bio: 'Marketing Specialist, Yoga Practitioner, Traveler',
          },
        ]);
      });
  };
  