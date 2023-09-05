exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Iman",
          username: "imanhedeshy",
          email: "iman@hedeshy.ca",
          password_hash:
            "$2b$10$b14FX5qE4P9ojNybKvjcdedvdPS17cU5dBNor.S1IgAzp41xPNaoG",
          background_image: "https://via.placeholder.com/150",
          profile_pic: "https://via.placeholder.com/150",
          headline: "Software Engineer",
          location: "Canada",
          industry: "Tech",
          user_type: "Odin",
          bio: "Husband, Software Engineer, MBA, Electrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover",
          phone: "123-456-7890",
          slack: "imanhedeshy",
          website: "https://www.hedeshy.ca",
          linkedin: "https://www.linkedin.com/in/imanhedeshy/",
          github: "https://github.com/imanhedeshy",
          twitter: "https://twitter.com/imanhedeshy",
          facebook: "https://www.facebook.com/imanhedeshy",
          instagram: "https://www.instagram.com/imanhedeshy",
          video_source_1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          video_source_2: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          id: 2,
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          password_hash:
            "$2b$10$b14FX5qE4P9ojNybKvjcdedvdPS17cU5dBNor.S1IgAzp41xPNaoG",
          background_image: "https://via.placeholder.com/150",
          profile_pic: "https://via.placeholder.com/150",
          headline: "Web Developer",
          location: "USA",
          industry: "Tech",
          user_type: "developer",
          bio: "Web Developer, Designer, Coffee Lover, Travel Enthusiast",
          phone: "123-456-7890",
          slack: "johndoe",
          website: "https://www.example.com",
          linkedin: "https://www.linkedin.com/in/johndoe/",
          github: "https://github.com/johndoe",
          twitter: "https://twitter.com/johndoe",
          facebook: "https://www.facebook.com/johndoe",
          instagram: "https://www.instagram.com/johndoe",
          video_source_1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          video_source_2: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          id: 3,
          name: "Jane Doe",
          username: "janedoe",
          email: "jane@example.com",
          password_hash:
            "$2b$10$b14FX5qE4P9ojNybKvjcdedvdPS17cU5dBNor.S1IgAzp41xPNaoG",
          background_image: "https://via.placeholder.com/150",
          profile_pic: "https://via.placeholder.com/150",
          headline: "Project Manager",
          location: "USA",
          industry: "Tech",
          user_type: "admin",
          bio: "Project Manager, Tea Lover, Bookworm",
          phone: "123-456-7890",
          slack: "janedoe",
          website: "https://www.example.com",
          linkedin: "https://www.linkedin.com/in/janedoe/",
          github: "https://github.com/janedoe",
          twitter: "https://twitter.com/janedoe",
          facebook: "https://www.facebook.com/janedoe",
          instagram: "https://www.instagram.com/janedoe",
          video_source_1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          video_source_2: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ]);
    });
};
