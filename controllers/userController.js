// userController.js to handle users table requests
const knex = require("knex")(require("../knexfile").development);

const createUser = async (user) => {
  try {
    return await knex("users").insert({
      name: user.name,
      username: user.username,
      email: user.email,
      password_hash: user.password_hash,
      user_type: user.user_type,
      bio: user.bio,
    });
  } catch (error) {
    console.error("Error creating the user", error);
    return error;
  }
};

const findUser = async (user) => {
  try {
    const result = await knex("users")
      .where({ username: user.username })
      .first();
    if (!result) throw new Error("User Not Found!");
    return result;
  } catch (error) {
    console.error("Error finding the user", error);
    return { code: "NOT_FOUND", message: "User Not Found!" };
  }
};

const getProfileById = async (id) => {
  try {
    const result = await knex("users").where({ id: id }).first();
    if (!result) throw new Error("User Not Found!");
    return result;
  } catch (error) {
    console.error("Error finding the user", error);
    return { code: "NOT_FOUND", message: "User Not Found!" };
  }
};

const getStudentByUsername = async (username) => {
  const user = await knex("users")
    .join("cohorts", "users.id", "=", "cohorts.user_id")
    .where("users.username", username)
    .first(
      "users.*",
      "cohorts.name as cohortName",
      "cohorts.campus as cohort",
      "cohorts.discipline",
      "cohorts.start_date as cohortDate"
    );

  if (!user) {
    return null;
  }

  const projects = await knex("projects")
    .where("user_id", user.id)
    .select(
      "id as project_id",
      "title",
      "type",
      "description",
      "image_source",
      "link",
      "created_at as project_created_at"
    );

  const techStacks = await knex("tech_stack")
    .where("user_id", user.id)
    .select("id as tech_stack_id", "tech_stack", "tech_stack_source_link");

  const options = { month: "long", year: "numeric" };
  const formattedCohortDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(user.cohortDate)
  );

  const student = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    headline: user.headline,
    discipline: user.discipline,
    cohort: user.cohort,
    cohortDate: formattedCohortDate,
    cohortName: user.cohortName,
    backgroundImage: user.background_image,
    profilePic: user.profile_pic,
    userType: user.user_type,
    bio: user.bio,
    phoneNumber: user.phone,
    slack: user.slack,
    website: user.website,
    linkedin: user.linkedin,
    github: user.github,
    twitter: user.twitter,
    facebook: user.facebook,
    instagram: user.instagram,
    video1: user.video_source_1,
    video2: user.video_source_2,
    projects: projects.map((project) => ({
      id: project.project_id,
      title: project.title,
      type: project.type,
      description: project.description,
      imageSrc: project.image_source,
      link: project.link,
      createdAt: project.project_created_at,
    })),
    techStacks: techStacks.map((techStack) => ({
      id: techStack.tech_stack_id,
      tech_stack: techStack.tech_stack,
      tech_stack_source_link: techStack.tech_stack_source_link,
    })),
  };

  return student;
};

const getPartnerByUsername = async (username) => {
  const user = await knex("users")
    .join("cohorts", "users.id", "=", "cohorts.user_id")
    .where("users.username", username)
    .first(
      "users.*",
      "cohorts.name as cohortName",
      "cohorts.campus as cohort",
      "cohorts.discipline",
      "cohorts.start_date as cohortDate"
    );

  if (!user) {
    return null;
  }

  const projects = await knex("projects")
    .where("user_id", user.id)
    .select(
      "id as project_id",
      "title",
      "type",
      "description",
      "image_source",
      "link",
      "created_at as project_created_at"
    );

  const techStacks = await knex("tech_stack")
    .where("user_id", user.id)
    .select("id as tech_stack_id", "tech_stack", "tech_stack_source_link");

  const options = { month: "long", year: "numeric" };
  const formattedCohortDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(user.cohortDate)
  );

  const student = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    headline: user.headline,
    discipline: user.discipline,
    cohort: user.cohort,
    cohortDate: formattedCohortDate,
    cohortName: user.cohortName,
    backgroundImage: user.background_image,
    profilePic: user.profile_pic,
    userType: user.user_type,
    bio: user.bio,
    phoneNumber: user.phone,
    slack: user.slack,
    website: user.website,
    linkedin: user.linkedin,
    github: user.github,
    twitter: user.twitter,
    facebook: user.facebook,
    instagram: user.instagram,
    video1: user.video_source_1,
    video2: user.video_source_2,
    projects: projects.map((project) => ({
      id: project.project_id,
      title: project.title,
      type: project.type,
      description: project.description,
      imageSrc: project.image_source,
      link: project.link,
      createdAt: project.project_created_at,
    })),
    techStacks: techStacks.map((techStack) => ({
      id: techStack.tech_stack_id,
      tech_stack: techStack.tech_stack,
      tech_stack_source_link: techStack.tech_stack_source_link,
    })),
  };

  return student;
};

module.exports = {
  createUser,
  findUser,
  getProfileById,
  getStudentByUsername,
  getPartnerByUsername,
};
