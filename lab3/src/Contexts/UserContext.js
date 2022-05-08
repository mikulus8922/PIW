import { createContext } from "react";

//const UserContext = createContext(["", () => {}])
const UserContext = createContext({email: '', login: '', password: '', auth: false})

export default UserContext;