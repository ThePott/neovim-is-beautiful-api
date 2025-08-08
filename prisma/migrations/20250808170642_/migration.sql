-- CreateTable
CREATE TABLE "public"."Plugin" (
    "plugin_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "repo_url" TEXT NOT NULL,

    CONSTRAINT "Plugin_pkey" PRIMARY KEY ("plugin_id")
);
