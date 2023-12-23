'use client'
import { LuAlertTriangle } from "react-icons/lu";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useEffect, useState } from "react";

const ServerMessages = ({response}: any) => {


    console.log(response);

    if (!response ||
        typeof response === 'undefined' ||
        response.response === null ||
        response.response.type === 'success')
    {
        return null;
    }


    return(
        <Alert 
        variant="destructive" 
        className= "mb-5 overflow-hidden slide-in-from-left-4 transition-all duration-1000 ease-in-out"
        >
            <LuAlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle>Sign up {response.response.type} </AlertTitle>
            <AlertDescription>
                {response.response.message}
            </AlertDescription>
        </Alert>
    )
}

export default ServerMessages;

