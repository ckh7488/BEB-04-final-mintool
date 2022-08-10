import promiseClinet from '../../lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const vidPath = path.resolve(process.cwd(), "public/mp4/test.mp4");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(vidPath);
    res.setHeader("content-type", "video");
    fs.createReadStream(vidPath).pipe(res);
        
}

