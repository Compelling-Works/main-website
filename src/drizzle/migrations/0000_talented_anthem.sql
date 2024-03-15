CREATE TABLE IF NOT EXISTS "donors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"logo_url" text,
	"website_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jobs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"pdf_url" text,
	"status" text DEFAULT 'open',
	"end_date" text,
	"created_at" text DEFAULT 'Fri Mar 15 2024'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "partners" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"logo_url" text,
	"website_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"start_date" varchar NOT NULL,
	"end_date" varchar NOT NULL,
	"status" varchar DEFAULT 'Open' NOT NULL,
	"commissioning_party" text NOT NULL,
	"countries" text NOT NULL,
	"category" text NOT NULL,
	"description" text NOT NULL,
	"implementors" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "publications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"article_url" text,
	"publication_date" varchar,
	"type" varchar(50),
	"pdf_document" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "team_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"role" varchar(100) NOT NULL,
	"category" varchar(50) NOT NULL,
	"message" text,
	"bio_info" json NOT NULL,
	"image_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"username" varchar(50),
	"password" text NOT NULL,
	"role" varchar DEFAULT 'user',
	"created_at" text DEFAULT 'Fri Mar 15 2024',
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
