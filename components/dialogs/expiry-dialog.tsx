'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useEffect, useRef } from "react";

const ExpiryDialog = ({
    auth
}: {auth: boolean}) => {

    const button = useRef<HTMLButtonElement>(null);

    useEffect( () => {
        if (auth)
        {
            button.current?.click();
        }
    },[]);

    if (!auth)
    {
        return null;
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="" ref={button}>Open dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Your session has expired</AlertDialogTitle>
                    <AlertDialogDescription>
                        Your session has been expired sign in to continue.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction >
                        <Link href="/auth/signin">
                            Sign in
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ExpiryDialog;

