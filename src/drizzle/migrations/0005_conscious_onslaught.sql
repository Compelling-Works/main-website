CREATE TABLE IF NOT EXISTS "offices" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL,
	"plot_number" text NOT NULL,
	"area" text NOT NULL,
	"telephone" text NOT NULL,
	"pobox-number" text NOT NULL,
	"created_at" text DEFAULT 'Sun Apr 07 2024'
);
