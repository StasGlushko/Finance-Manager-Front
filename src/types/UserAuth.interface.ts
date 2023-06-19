export interface IUserLogin {
	email: string
	password: string
}

export interface IUserReg extends IUserLogin {
	userName: string
}
