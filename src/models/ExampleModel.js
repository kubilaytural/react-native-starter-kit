export default function ExampleUserModel({ id, profileImage, mail, name, surname }) {
  return {
    id,
    avatar: profileImage,
    email: mail,
    name,
    surname,
  };
}
