import express, { Request, Response } from "express";
import dotenv from 'dotenv';

export  class CookiesController {
    constructor() {
        // Initialize any necessary properties or dependencies here
    }

    // Example method to set a cookie
    setAuthCookie(req : Request, res:Response,sessionData:string) {
        res.cookie(`sb-${process.env.PROJECTREF}-auth-token`, sessionData, {
            httpOnly: true,    // JS can't access
            secure: process.env.SecureCookies === "true",      // HTTPS only
            sameSite: 'strict',// CSRF protection
            maxAge: 20 * 24 * 60 * 60 * 1000, // 7 days
            path: '/',         // Available on all routes
        });
        // res.cookie('idToken', accessToken, {
        //     httpOnly: true,
        //     secure:  process.env.SecureCookies === "true",
        //     sameSite: 'strict',
        //     maxAge: 30 * 60 * 1000 // 15 minutes
        //     });
    }

    // // Example method to get a cookie
    // getCookie(req, res) {
    //     const cookieValue = req.cookies[req.params.name];
    //     if (cookieValue) {
    //         res.status(200).send({ value: cookieValue });
    //     } else {
    //         res.status(404).send({ message: 'Cookie not found' });
    //     }
    // }

    // Example method to delete a cookie
    // deleteCookie(req, res) {
    //     res.clearCookie(req.params.name);
    //     res.status(200).send({ message: 'Cookie deleted successfully' });
    // }
}

export default new CookiesController();