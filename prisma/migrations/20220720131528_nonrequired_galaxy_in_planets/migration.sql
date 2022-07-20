BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Planet] DROP CONSTRAINT [Planet_galaxy_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[Planet] ALTER COLUMN [galaxy_id] NVARCHAR(1000) NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Planet] ADD CONSTRAINT [Planet_galaxy_id_fkey] FOREIGN KEY ([galaxy_id]) REFERENCES [dbo].[Galaxy]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
