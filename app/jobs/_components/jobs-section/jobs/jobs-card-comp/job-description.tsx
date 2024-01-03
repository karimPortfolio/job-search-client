

export const JobDescription = ({
    content
}: {
    content: string
}) => {

    const briefDescription = content.substring(0, 210);

    return (
        <div>
            <p
            className="text-gray-500 font-DM-sans"
            >
                {briefDescription}...
            </p>
        </div>
    )
}

