'use server';

import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'downloads.json');

export async function getDownloadCount(): Promise<number> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = await fs.promises.readFile(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (typeof parsed.count === 'number') {
        return parsed.count;
      }
    }
  } catch (error) {
    console.error('Error reading download count:', error);
  }
  return 0;
}

export async function incrementDownloadCount(): Promise<number> {
  let count = 0;
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = await fs.promises.readFile(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(fileData);
      if (typeof parsed.count === 'number') {
        count = parsed.count;
      }
    }
  } catch (error) {
    console.error('Error reading existing download count:', error);
  }

  const nextCount = count + 1;

  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      await fs.promises.mkdir(dir, { recursive: true });
    }
    await fs.promises.writeFile(
      DATA_FILE,
      JSON.stringify({ count: nextCount, lastUpdated: new Date().toISOString() }, null, 2),
      'utf-8'
    );
  } catch (error) {
    console.error('Error saving updated download count:', error);
  }

  return nextCount;
}
