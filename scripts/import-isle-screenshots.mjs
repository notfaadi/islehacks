import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assets =
  'C:/Users/HP/.cursor/projects/c-Users-HP-OneDrive-Desktop-websites-NOT-OPTIMISED/assets';
const gameplayDir = path.join(root, 'public/images/gameplay');
const widths = [320, 400, 512, 640, 960, 1280, 1920, 2560, 3840];

// Palette order: green → red → plains → red → plains → red
const shots = [
  {
    name: 'isle-forest-esp',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_5-1ddf61c5-6af7-4fe5-8399-dbb33f2af239.jpg',
  },
  {
    name: 'isle-forest-horn',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_Gemini_Generated_Image_dyd3wdyd3wdyd3wd-6f8107eb-71aa-4184-a762-09a412d921ea.jpg',
  },
  {
    name: 'isle-plains-health',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_4-12528960-02d7-43e9-88f9-2696129a9d34.jpg',
  },
  {
    name: 'isle-forest-radar',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_2-168d74a0-f149-4f44-86d6-187f35815b1a.jpg',
  },
  {
    name: 'isle-plains-esp',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_3-b8c99e32-83e7-4f5d-a460-e585479d4c1d.jpg',
  },
  {
    name: 'isle-forest-species',
    file: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_1528da22c5a19bd0e8f7c7459d4dedb6_images_1-6be83d22-b625-4960-84d1-874240b98981.jpg',
  },
];

fs.mkdirSync(gameplayDir, { recursive: true });

for (const shot of shots) {
  const input = path.join(assets, shot.file);
  const longInput = input.startsWith('\\\\?\\') ? input : `\\\\?\\${input}`;
  const readable = fs.existsSync(input) ? input : longInput;
  const master = path.join(gameplayDir, `${shot.name}.png`);

  if (!fs.existsSync(input) && !fs.existsSync(longInput)) {
    throw new Error(`Missing source screenshot: ${input}`);
  }

  await sharp(readable)
    .resize(3840, 2160, {
      fit: 'fill',
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.55, m1: 0.4, m2: 0.2 })
    .png({ compressionLevel: 4, adaptiveFiltering: true })
    .toFile(master);

  const meta = await sharp(master).metadata();
  console.log(`4K master ${shot.name}.png ${meta.width}x${meta.height}`);

  for (const width of widths) {
    const output = path.join(gameplayDir, `${shot.name}-${width}.webp`);
    await sharp(master)
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 92, effort: 6, smartSubsample: true })
      .toFile(output);
    console.log(`  ${path.basename(output)}`);
  }
}

console.log('Isle screenshot import complete.');
