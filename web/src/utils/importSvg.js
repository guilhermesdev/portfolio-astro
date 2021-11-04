import fs from 'node:fs/promises';
import path from 'node:path';


export default async function (filename) {
	const filePath = path.resolve(process.cwd(), '..', 'web', 'public', 'assets', filename);
	
	const file = await fs.readFile(filePath);

	return file.toString();
}