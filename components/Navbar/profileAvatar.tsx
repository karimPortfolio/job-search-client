import {
    Avatar,
    AvatarFallback,
    AvatarImage 
} from "@/components/ui/avatar"

interface ProfileAvatarProps
{
    profileImgUrl: string | undefined,
    fullName: string
}

export const ProfileAvatar = ({
    profileImgUrl,
    fullName
}: ProfileAvatarProps) => {

    const userNameArr = fullName?.split(' ');
    const firstNameLetter = userNameArr[0][0];
    const lastNameLetter = userNameArr[userNameArr.length - 1][0];


    if (profileImgUrl && profileImgUrl !== 'undefined')
    {
        return <img
                src={profileImgUrl}
                alt="user profile image"
                className="h-full w-full rounded-full flex shrink-0"
                width={44}
                height={44}
                />
    }

    return (
        <Avatar className="h-11 w-11">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback className="bg-blue-500">{firstNameLetter+lastNameLetter}</AvatarFallback>
        </Avatar>
    )

}

