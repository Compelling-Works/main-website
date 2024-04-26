ALTER TABLE "jobs" ALTER COLUMN "created_at" SET DEFAULT 'Fri Apr 26 2024';--> statement-breakpoint
ALTER TABLE "offices" ALTER COLUMN "created_at" SET DEFAULT 'Fri Apr 26 2024';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'Fri Apr 26 2024';--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "image_url";