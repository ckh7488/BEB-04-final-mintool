import promiseClinet from '../../lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const vidPath = path.resolve(process.cwd(), "./public/images/demo_Images.zip");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(vidPath);
    res.setHeader("content-type", "application/zip");
    fs.createReadStream(vidPath).pipe(res);
        
}

