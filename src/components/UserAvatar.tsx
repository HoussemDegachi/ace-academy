import { Avatar as AvatarProvider, AvatarImage, AvatarFallback } from './ui/avatar'

type UserAvatarProps = {
    image: string,
    className?: string
}

function UserAvatar({ image, className="" }: UserAvatarProps) {
  return (
    <AvatarProvider className={`bg-neutral-200 p-1 ${className}`}>
    <AvatarImage src={image} />
    <AvatarFallback>profile</AvatarFallback>
</AvatarProvider>
  )
}

export default UserAvatar