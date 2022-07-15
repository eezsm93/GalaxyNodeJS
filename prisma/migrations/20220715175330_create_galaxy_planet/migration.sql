BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Galaxy] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [color] NVARCHAR(1000) NOT NULL,
    [size] FLOAT(53) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Galaxy_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Galaxy_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Planet] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [size] FLOAT(53) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Planet_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [galaxy_id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Planet_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Planet] ADD CONSTRAINT [Planet_galaxy_id_fkey] FOREIGN KEY ([galaxy_id]) REFERENCES [dbo].[Galaxy]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
