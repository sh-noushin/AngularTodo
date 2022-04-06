import { User } from "./user-model";


export class UserResponse {
    totalCount: number;
    items: User[];

    constructor() {
        this.totalCount = 0;
        this.items = [
            {
                id: 0,
                userName: '',
                password: ''
            }
        ];


    }
}