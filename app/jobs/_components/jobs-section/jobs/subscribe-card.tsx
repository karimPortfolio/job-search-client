'use client'

import {useState, useEffect} from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MdOutlineMailOutline } from "react-icons/md";
import { useSelector } from "react-redux"

interface AuthState {
  auth: {
    AUTH: boolean
    expired: boolean,
    user:{
        email: string
    }
  }
}

export function SubscribeCard() {

  const Auth = useSelector( (state: AuthState) => state.auth );

  const [email, setEmail] = useState('');

  useEffect( () => {
      if (Auth.AUTH)
      {
          setEmail(Auth.user.email);
      }
  },[Auth.AUTH])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
  }

  return (
    <Card className="w-full shadow-md">
        <CardHeader>
            <div className="w-12 h-12 flex justify-center items-center bg-blue-100 rounded-lg mb-4">
                <MdOutlineMailOutline
                className="text-blue-500 w-9 h-7"
                />
            </div>
            <CardTitle>Subscribe for updates</CardTitle>
            <CardDescription>
                Turn on this job alert so you {" don't "} miss out on openings that could fit your needs.
            </CardDescription>
        </CardHeader>
        <CardContent>
              <div className="flex flex-col space-y-1.5">
                  <Input 
                  value={email} 
                  defaultValue={email}
                  placeholder="Enter your email"
                  onChange={handleEmailChange}
                  />
              </div>
        </CardContent>
        <CardFooter className="">
            <Button className="w-full">Subscribe</Button>
        </CardFooter>
    </Card>
  )
}


