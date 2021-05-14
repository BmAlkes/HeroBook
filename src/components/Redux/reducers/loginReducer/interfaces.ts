export interface User {
  id:number;
 name:string;
 image:string;
 followers:number;
 following:number;

}

export interface LoginState {
    status: "idle" | "loading" | "success" | "error";
    user: User;
}
