-- CreateTable
CREATE TABLE "Signupdata" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Signupdata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Signupdata_id_key" ON "Signupdata"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Signupdata_username_key" ON "Signupdata"("username");
