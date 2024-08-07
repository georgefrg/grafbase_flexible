import { config, connector, graph } from "@grafbase/sdk";

const g = graph.Standalone();

const pg = connector.Postgres("Postgres", {
  url: g.env("DATABASE_URL"),
});

g.datasource(pg);

const User = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url(),
  linkedInUrl: g.url(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdBy: g.relation(() => User),
});
