ALTER TABLE "jobs" ALTER COLUMN "created_at" SET DEFAULT 'Fri Mar 22 2024';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'Fri Mar 22 2024';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "image_url" text NOT NULL;