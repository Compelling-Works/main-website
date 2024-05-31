import {
  json,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// Admin users table
export const users = pgTable("users", {
  // id: uuid("id").defaultRandom().primaryKey(),
  id: text("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).unique().notNull(),
  // username: varchar("username", { length: 50 }),
  password: text("password").notNull(),
  role: varchar("role").default("user"),
  createdAt: text("created_at").default(new Date().toDateString()),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type User = typeof users.$inferSelect;

// team member table
export const teamMembers = pgTable("team_members", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  role: varchar("role", { length: 100 }).notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  message: text("message"),
  // bio: object()
  bio: json("bio_info").notNull(),
  url: text("image_url").notNull(),
});

export type TeamMember = typeof teamMembers.$inferSelect;

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  startDate: varchar("start_date").notNull(),
  endDate: varchar("end_date").notNull(),
  status: varchar("status").default("Open").notNull(),
  commissioningParty: text("commissioning_party").notNull(),
  country: text("countries").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  implementors: text("implementors").notNull(),
  url: text("image_url").notNull(),
});

export type Project = typeof projects.$inferSelect;

// cw publications table
export const publications = pgTable("publications", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  articleUrl: text("article_url"),
  date: varchar("publication_date"),
  type: varchar("type", { length: 50 }), // Note that type can be: report, article, etc. If report, then allow for pdf upload field
  document: varchar("pdf_document"),
  // image:
});

export type Publication = typeof publications.$inferSelect;

// cw partners table
export const partners = pgTable("partners", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  logo: text("logo_url"),
  website: text("website_url"),

  // projects: --> Add projects to which this partner belongs
});
export type Partner = typeof partners.$inferSelect;

// cw donors table
export const donors = pgTable("donors", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  logo: text("logo_url"),
  website: text("website_url"),
  // projects: --> Add projects to which this donor contributed
});

export type Donor = typeof donors.$inferSelect;

// cw jobs table
export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),

  pdf: text("pdf_url"),
  status: text("status").default("open"),
  endDate: text("end_date"),
  createdAt: text("created_at").default(new Date().toDateString()),
  // projects: --> Add projects to which this donor contributed
});

export type Job = typeof jobs.$inferSelect;

// cw offices table
export const offices = pgTable("offices", {
  id: uuid("id").defaultRandom().primaryKey(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  plotNumber: text("plot_number").notNull(),
  area: text("area").notNull(),
  telephone: text("telephone").notNull(),
  postOfficeBoxNumber: text("pobox-number").notNull(),
  createdAt: text("created_at").default(new Date().toDateString()),
});

export type Office = typeof offices.$inferSelect;

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
