BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[galaxys] (
    [galaxyId] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [color] NVARCHAR(1000) NOT NULL,
    [size] DECIMAL(32,16) NOT NULL,
    CONSTRAINT [galaxys_pkey] PRIMARY KEY CLUSTERED ([galaxyId])
);

-- CreateTable
CREATE TABLE [dbo].[planets] (
    [planetId] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [size] DECIMAL(32,16) NOT NULL,
    [galaxyGalaxyId] NVARCHAR(1000),
    CONSTRAINT [planets_pkey] PRIMARY KEY CLUSTERED ([planetId])
);

-- AddForeignKey
ALTER TABLE [dbo].[planets] ADD CONSTRAINT [planets_galaxyGalaxyId_fkey] FOREIGN KEY ([galaxyGalaxyId]) REFERENCES [dbo].[galaxys]([galaxyId]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
