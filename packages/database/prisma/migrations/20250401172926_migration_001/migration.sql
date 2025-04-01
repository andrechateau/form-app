-- CreateTable
CREATE TABLE "form" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "fields" JSONB NOT NULL,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source_record" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "form_id" UUID NOT NULL,

    CONSTRAINT "source_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source_data" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "source_record_id" UUID NOT NULL,

    CONSTRAINT "source_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "source_record_form_id_idx" ON "source_record"("form_id");

-- CreateIndex
CREATE INDEX "source_data_source_record_id_idx" ON "source_data"("source_record_id");

-- AddForeignKey
ALTER TABLE "source_data" ADD CONSTRAINT "source_data_source_record_id_fkey" FOREIGN KEY ("source_record_id") REFERENCES "source_record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
