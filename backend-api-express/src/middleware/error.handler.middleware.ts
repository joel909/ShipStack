import { Request, Response, NextFunction } from 'express';

export function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({ error: 'Invalid JSON format' });
    return;
  }
  //console.error("Unhandled Error:", err)
  res.status(500).json({ error: 'Something went wrong' });
}